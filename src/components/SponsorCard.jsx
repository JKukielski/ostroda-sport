'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function SponsorCard({ name, src, url }) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden h-[100px] min-w-[100px] bg-white rounded-xl flex justify-center items-center md:h-[150px] md:min-w-0 md:w-[150px]"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.a
            href={url}
            target="_blank"
            className="absolute inset-0 z-10 flex justify-center items-center p-2"
            initial={{ opcaity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 10 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-additional font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opcaity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="font-roboto text-primary text-center text-sm">
                {name}
              </span>
            </motion.h1>
          </motion.a>
        )}
      </AnimatePresence>
      <Link href={url} target="_blank">
        <Image src={src} alt={name} fill style={{ objectFit: 'contain' }} />
      </Link>
    </motion.div>
  );
}
