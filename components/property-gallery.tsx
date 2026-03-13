'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + (images?.length ?? 1)) % (images?.length ?? 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (images?.length ?? 1));
  };

  const currentImage = images?.[currentIndex] ?? '';

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-content">
        <div className="relative aspect-video bg-gray-200">
          <Image
            src={currentImage}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />

          {(images?.length ?? 0) > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-primary p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-primary p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                {currentIndex + 1} / {images?.length ?? 0}
              </div>
            </>
          )}
        </div>

        {(images?.length ?? 0) > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 p-4">
            {images?.map?.((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video bg-gray-200 rounded overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex ? 'border-accent' : 'border-transparent hover:border-gray-400'
                }`}
              >
                <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            )) ?? []}
          </div>
        )}
      </div>
    </div>
  );
}
