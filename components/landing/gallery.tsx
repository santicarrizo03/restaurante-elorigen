"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    alt: "Asado argentino a la parrilla",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop",
    alt: "Empanadas caseras",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
    alt: "Ambiente del bodegón",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop",
    alt: "Postres artesanales",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    alt: "Vinos argentinos",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=2058&auto=format&fit=crop",
    alt: "Milanesa napolitana",
    span: "col-span-2 row-span-1",
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Galería
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
            Momentos que{" "}
            <span className="italic text-primary">inspiran</span>
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-6">
                <p className="text-white font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
