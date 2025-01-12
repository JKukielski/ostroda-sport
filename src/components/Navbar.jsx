'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="w-full flex flex-col h-32">
      <div className="h-[50%] flex justify-center bg-primary">
        <div className="w-full lg:w-[80%] flex px-3">
          <div className="w-[50%] h-full flex justify-start items-center">
            <Link href="/">
              <Image
                src="/logo_light.png"
                alt="logo"
                width={100}
                height={40}
                style={{ width: '100px', height: '40px' }}
              />
            </Link>
          </div>
          <div className="w-[50%] h-full flex justify-end items-center gap-2 md:gap-4">
            <Link
              href="https://www.facebook.com/ostrodasportteam"
              className="w-[25px] h-[25px] flex justify-center items-center bg-additional text-primary rounded-full md:w-[35px] md:h-[35px] md:text-lg"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/ostrodasportteam?igsh=MTZvZWU4MHk3dHA1dA=="
              className="w-[25px] h-[25px] flex justify-center items-center bg-additional text-primary rounded-full md:w-[35px] md:h-[35px] md:text-lg"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.tiktok.com/@ostrodaaportteam?_t=8rUtwcuLsbm&amp;_r=1"
              className="w-[25px] h-[25px] flex justify-center items-center bg-additional text-primary rounded-full md:w-[35px] md:h-[35px] md:text-lg"
              target="_blank"
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[50%] bg-additional flex justify-end items-center px-3 gap-1 md:justify-center md:px-6">
        <div
          className="flex justify-center items-center md:hidden"
          onClick={() => setToggleMenu((prevState) => !prevState)}
        >
          <p className="font-anton">MENU</p>
          <IoIosArrowDown
            className={`text-xl transform transition-transform duration-300 ${
              toggleMenu ? '' : 'rotate-90'
            }`}
          />
        </div>

        <div className="w-full hidden font-anton tracking-wider md:h-full md:flex md:text-sm lg:w-[80%]">
          <ul className="w-full flex justify-between md:h-full md:flex lg:justify-between lg:px-3">
            <Link href="/o-nas" className="h-full group">
              <li className="transition-transform duration-300 border-b-4 border-solid border-additional group-hover:border-primary h-full flex items-center">
                O NAS
              </li>
            </Link>
            <Link href="/1-dla-ostroda-sport-team" className="h-full group">
              <li className="transition-transform duration-300 border-b-4 border-solid border-additional group-hover:border-primary h-full flex items-center">
                PRZEKAŻ 1,5% PODATKU
              </li>
            </Link>
            <Link href="/trenuj-z-nami" className="h-full group">
              {' '}
              <li className="transition-transform duration-300 border-b-4 border-solid border-additional group-hover:border-primary h-full flex items-center">
                TRENUJ Z NAMI
              </li>
            </Link>
            <Link href="/zespol" className="h-full group">
              <li className="transition-transform duration-300 border-b-4 border-solid border-additional group-hover:border-primary h-full flex items-center">
                NASZ ZESPÓŁ
              </li>
            </Link>
            <Link href="/#harmonogram" className="h-full group">
              <li className="transition-transform duration-300 border-b-4 border-solid border-additional group-hover:border-primary h-full flex items-center">
                HARMONOGRAM
              </li>
            </Link>
            <Link href="/#kontakt" className="h-full group">
              <li className="transition-transform duration-300 border-b-4 border-solid border-additional group-hover:border-primary h-full flex items-center">
                KONTAKT
              </li>
            </Link>
            <Link href="/galeria" className="h-full group">
              <li className="transition-transform duration-300 border-b-4 border-solid border-additional group-hover:border-primary h-full flex items-center">
                GALERIA
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {toggleMenu && (
        <div
          className={`absolute w-full top-32 z-20 bg-primary font-anton ${
            toggleMenu ? 'fade-in' : 'fade-out'
          }`}
          role="menu"
        >
          <div className="py-4 flex flex-col items-center gap-4">
            <Link
              onClick={() => setToggleMenu(false)}
              href="/o-nas"
              className="block rounded-lg px-4 py-2 text-sm text-complimentary hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              O NAS
            </Link>

            <Link
              onClick={() => setToggleMenu(false)}
              href="/1-dla-ostroda-sport-team"
              className="block rounded-lg px-4 py-2 text-sm text-complimentary hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              PRZEKAŻ 1,5% PODATKU
            </Link>

            <Link
              onClick={() => setToggleMenu(false)}
              href="/trenuj-z-nami"
              className="block rounded-lg px-4 py-2 text-sm text-complimentary hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              TRENUJ Z NAMI
            </Link>

            <Link
              onClick={() => setToggleMenu(false)}
              href="/zespol"
              className="block rounded-lg px-4 py-2 text-sm text-complimentary hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              NASZ ZESPÓŁ
            </Link>

            <Link
              onClick={() => setToggleMenu(false)}
              href="/#harmonogram"
              className="block rounded-lg px-4 py-2 text-sm text-complimentary hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              HARMONOGRAM
            </Link>

            <Link
              onClick={() => setToggleMenu(false)}
              href="/#kontakt"
              className="block rounded-lg px-4 py-2 text-sm text-complimentary hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              KONTAKT
            </Link>
            <Link
              onClick={() => setToggleMenu(false)}
              href="/galeria"
              className="block rounded-lg px-4 py-2 text-sm text-complimentary hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              GALERIA
            </Link>
          </div>
        </div>
      )}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
