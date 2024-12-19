import { urlFor } from '@/sanity/lib/image';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Formating date for blog posts
export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formatter.format(date).replace(/\//g, '.');
};

// Truncating text for short description
export const truncateText = (text) => {
  const words = text.split(/\s+/);

  if (words.length > 20) {
    return words.slice(0, 20).join(' ') + '...';
  }
  return text;
};

// Modifying PortableText from Sanity to regular text
export const blocksToText = (blocks, opts = {}) => {
  const options = Object.assign({}, { nonTextBehavior: 'remove' }, opts);
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`;
      }

      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
};

// Fetching image dimensions
export const getImageDimensions = (value) => {
  if (!value?.asset?._ref) {
    console.warn('Invalid image value:', value);
    return { width: 1, height: 1 }; // Default dimensions to prevent errors
  }

  // Extract width and height from the asset reference
  const match = value.asset._ref.match(/-(\d+)x(\d+)-/);
  if (match) {
    const [, width, height] = match.map(Number);
    return { width, height };
  }

  console.warn(
    'Could not extract dimensions from asset reference:',
    value.asset._ref
  );
  return { width: 1, height: 1 }; // Default fallback dimensions
};

// Image configuration for PortablText
export const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={urlFor(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        display: isInline ? 'inline-block' : 'block',
        aspectRatio: width / height,
      }}
      width={300}
      height={300}
    />
  );
};

// Configuration for PortableText component
export const components = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-anton text-xl md:text-2xl xl:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-anton text-lg md:text-2xl xl:text-3xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-anton text-base md:text-2xl xl:text-3xl">
        {children}
      </h4>
    ),
    normal: ({ children }) => <p className="font-roboto">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside pl-2 inline w-full font-roboto">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start list-disc pl-2">
        <span className="mr-2 text-base font-bold">•</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
          className="cursor-pointer underline"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-roboto">{children}</strong>
    ),
    em: ({ children }) => <em className="font-roboto">{children}</em>,
  },
};
