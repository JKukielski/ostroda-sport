import Navbar from '@/components/Navbar';
import './globals.css';
import { Anton } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { SanityLive } from '@/sanity/lib/live';
import Footer from '@/components/Footer';

export const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'Ostróda Sport Team',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
        <SanityLive />
        <Footer />
      </body>
    </html>
  );
}
