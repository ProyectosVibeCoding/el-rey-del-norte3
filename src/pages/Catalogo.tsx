import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

import img1 from "@/assets/gallery/img1.png";
import img5 from "@/assets/gallery/img5.png";
import img9 from "@/assets/gallery/img9.png";
import img10 from "@/assets/gallery/img10.png";
import img16 from "@/assets/gallery/img16.png";
import img19 from "@/assets/gallery/img19.png";
import img21 from "@/assets/gallery/img21.png";
import img27 from "@/assets/gallery/img27.png";
import img28 from "@/assets/gallery/img28.png";

const WHATSAPP_NUMBER = "5493512346427";

const products = [
  { 
    src: img1, 
    alt: "Mueble de baño blanco moderno",
    title: "Vanitory Moderno",
    description: "Mueble de baño en melamina blanca con cajones de cierre suave y mesada de mármol sintético.",
    category: "Baño"
  },
  { 
    src: img5, 
    alt: "Alacena estilo campo",
    title: "Alacena Rústica",
    description: "Alacena estilo campo en madera maciza con puertas de vidrio repartido y terminación envejecida.",
    category: "Comedor"
  },
  { 
    src: img9, 
    alt: "Mueble para TV moderno con biblioteca",
    title: "Mueble TV con Biblioteca",
    description: "Centro de entretenimiento moderno con espacios de guardado, estantes flotantes y pasacables integrados.",
    category: "Living"
  },
  { 
    src: img10, 
    alt: "Muebles de cocina modernos",
    title: "Cocina Integral",
    description: "Cocina completa con bajo mesada, alacenas y torre de hornos. Terminación en melamina gris topo.",
    category: "Cocina"
  },
  { 
    src: img16, 
    alt: "Deck de madera para exterior",
    title: "Deck de Exterior",
    description: "Deck en madera de lapacho tratada para exterior con terminación antideslizante y alta durabilidad.",
    category: "Exterior"
  },
  { 
    src: img19, 
    alt: "Muebles de cocina en madera maciza",
    title: "Cocina en Madera Natural",
    description: "Cocina premium en madera de paraíso con mesada de granito negro y herrajes de acero inoxidable.",
    category: "Cocina"
  },
  { 
    src: img21, 
    alt: "Cocina celeste estilo clásico",
    title: "Cocina Estilo Clásico",
    description: "Cocina con frentes perfilados en laca celeste, tiradores vintage y mesada de cuarzo blanco.",
    category: "Cocina"
  },
  { 
    src: img27, 
    alt: "Cómoda de madera artesanal",
    title: "Cómoda Artesanal",
    description: "Cómoda de madera maciza con cajones amplios, correderas metálicas y acabado natural encerado.",
    category: "Dormitorio"
  },
  { 
    src: img28, 
    alt: "Vitrina de madera con vidrio",
    title: "Vitrina Exhibidora",
    description: "Vitrina en madera con puertas de vidrio, iluminación LED interior y estantes regulables.",
    category: "Comedor"
  },
];

const Catalogo = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const openProduct = (index: number) => setSelectedProduct(index);
  const closeProduct = () => setSelectedProduct(null);

  const goToPrevious = () => {
    if (selectedProduct !== null) {
      setSelectedProduct(
        selectedProduct === 0 ? products.length - 1 : selectedProduct - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedProduct !== null) {
      setSelectedProduct(
        selectedProduct === products.length - 1 ? 0 : selectedProduct + 1
      );
    }
  };

  const getWhatsAppUrl = (productTitle: string) => {
    const message = `Hola, estoy interesado/a en el producto: ${productTitle}. Me gustaría recibir más información.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestros Trabajos
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
              Catálogo
            </h1>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explorá nuestra colección de muebles artesanales. Cada pieza 
              refleja nuestra dedicación al detalle y la calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-charcoal-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {products.map((product, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isGridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury group cursor-pointer"
                onClick={() => openProduct(index)}
              >
                {/* Image */}
                <div className="image-hover-zoom aspect-[4/3] overflow-hidden">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-accent text-xs tracking-[0.2em] uppercase mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-accent text-sm mt-4 group-hover:translate-x-1 transition-transform duration-300">
                    Ver más →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeProduct}
          >
            {/* Close button */}
            <button
              onClick={closeProduct}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10"
              aria-label="Producto anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10"
              aria-label="Producto siguiente"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Product Detail */}
            <motion.div
              key={selectedProduct}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-square lg:aspect-auto">
                  <img
                    src={products[selectedProduct].src}
                    alt={products[selectedProduct].alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-accent text-xs tracking-[0.2em] uppercase mb-3 block">
                    {products[selectedProduct].category}
                  </span>
                  <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                    {products[selectedProduct].title}
                  </h2>
                  <div className="section-divider mb-6" />
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {products[selectedProduct].description}
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href={getWhatsAppUrl(products[selectedProduct].title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxury w-full flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Consultar por este producto
                    </a>
                  </div>

                  {/* Counter */}
                  <p className="text-muted-foreground text-sm text-center mt-8">
                    {selectedProduct + 1} / {products.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Catalogo;
