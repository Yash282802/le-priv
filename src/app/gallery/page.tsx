"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Restaurant interior" },
  { id: 2, src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Fine dining table" },
  { id: 3, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Gourmet dish" },
  { id: 4, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Bar area" },
  { id: 5, src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80", alt: "Cocktails" },
  { id: 6, src: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&q=80", alt: "Chef plating" },
  { id: 7, src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Outdoor seating" },
  { id: 8, src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Desserts" },
  { id: 9, src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Ambience" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] tracking-[0.2em] text-sm mb-3 uppercase">Gallery</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Our <span className="gold-gradient">Ambience</span>
          </h1>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto">
            Take a visual tour of our premium fine dining restaurant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index % 3 === 0 ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-[4/3] bg-[#1A1A1A]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[#F5F0E8]">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#F5F0E8] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow us on Instagram for more updates
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-[#F5F0E8] hover:text-[#C9A84C]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={galleryImages.find((i) => i.id === selectedImage)?.src}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
