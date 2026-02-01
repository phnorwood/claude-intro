'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ProjectGalleryProps {
  images: string[];
  alt: string;
}

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const slides = images.map((image) => ({
    src: image,
    alt,
  }));

  return (
    <div className="my-8">
      <h2 className="mb-4 text-2xl font-semibold">Project Gallery</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
            className="group relative aspect-video overflow-hidden rounded-lg"
          >
            <Image
              src={image}
              alt={`${alt} - Image ${idx + 1}`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}
