'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io';
import styles from '../styles/gallery.module.css';

export default function ImageModalGallery({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.aspectWrapper}
            onClick={() => openModal(index)}
          >
            <Image
              src={image.secure_url}
              alt=""
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={styles.objectCover}
              fill
            />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div>
            {/* Close Button */}
            <div
              className="absolute top-2 right-2 text-white text-2xl cursor-pointer z-10"
              onClick={closeModal}
            >
              <IoMdClose />
            </div>

            {/* Photo */}
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={images[currentIndex].secure_url}
                alt=""
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                priority
              />
            </div>

            {/* Navigation Buttons */}
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 cursor-pointer"
              onClick={prevPhoto}
            >
              <IoIosArrowBack className="w-8 h-8" />
            </div>

            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4 cursor-pointer"
              onClick={nextPhoto}
            >
              <IoIosArrowForward className="w-8 h-8" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
