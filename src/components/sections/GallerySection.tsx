import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/gallery/img1.jpg";
import img5 from "@/assets/gallery/img5.jpg";
import img10 from "@/assets/gallery/img10.jpg";
import img16 from "@/assets/gallery/img16.jpg";
import img19 from "@/assets/gallery/img19.jpg";
import img21 from "@/assets/gallery/img21.jpg";
import img27 from "@/assets/gallery/img27.jpg";
import img28 from "@/assets/gallery/img28.jpg";

const galleryImages = [
  { src: img1, alt: "Mueble de baño blanco moderno" },
  { src: img5, alt: "Alacena estilo campo" },
  { src: img10, alt: "Muebles de cocina modernos" },
  { src: img16, alt: "Deck de madera para exterior" },
  { src: img19, alt: "Muebles de cocina en madera maciza" },
  { src: img21, alt: "Cocina celeste estilo clásico" },
  { src: img27, alt: "Cómoda de madera artesanal" },
  { src: img28, alt: "Vitrina de madera con vidrio" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Galería
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Nuestros Trabajos
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-muted-foreground">
            Cada proyecto refleja nuestra dedicación al detalle y la calidad artesanal.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="image-hover-zoom aspect-square rounded-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10"
              aria-label="Cerrar galería"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 lg:left-8 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 lg:right-8 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
