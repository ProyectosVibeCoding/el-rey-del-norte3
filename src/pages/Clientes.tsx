import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";

import img1 from "@/assets/gallery/img1.png";
import img5 from "@/assets/gallery/img5.png";
import img10 from "@/assets/gallery/img10.png";
import img16 from "@/assets/gallery/img16.png";
import img19 from "@/assets/gallery/img19.png";
import img21 from "@/assets/gallery/img21.png";
import img27 from "@/assets/gallery/img27.png";
import img28 from "@/assets/gallery/img28.png";

const projects = [
  {
    title: "Cocina Integral en Madera Maciza",
    category: "Cocinas",
    location: "Córdoba Capital",
    image: img19,
  },
  {
    title: "Cocina Celeste Estilo Clásico",
    category: "Cocinas",
    location: "Villa Carlos Paz",
    image: img21,
  },
  {
    title: "Muebles de Cocina Modernos",
    category: "Cocinas",
    location: "Alta Gracia",
    image: img10,
  },
  {
    title: "Vitrina de Madera Artesanal",
    category: "Muebles a Medida",
    location: "Córdoba Capital",
    image: img28,
  },
  {
    title: "Cómoda Estilo Rústico",
    category: "Muebles a Medida",
    location: "Jesús María",
    image: img27,
  },
  {
    title: "Alacena Estilo Campo",
    category: "Muebles a Medida",
    location: "La Calera",
    image: img5,
  },
  {
    title: "Vanitory Moderno",
    category: "Baños",
    location: "Córdoba Capital",
    image: img1,
  },
  {
    title: "Deck de Madera para Piscina",
    category: "Exterior",
    location: "Country en Córdoba",
    image: img16,
  },
];

const categories = ["Todos", "Cocinas", "Muebles a Medida", "Baños", "Exterior"];

const Clientes = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredProjects.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === filteredProjects.length - 1 ? 0 : selectedImage + 1
      );
    }
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
              Portfolio
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
              Nuestros Clientes
            </h1>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada proyecto es una historia de colaboración y confianza. 
              Mirá algunos de los trabajos que hemos realizado para clientes 
              en toda la provincia de Córdoba.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 lg:py-24 bg-charcoal-light">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 rounded-sm ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="image-hover-zoom aspect-[4/3] rounded-sm overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.category} • {project.location}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/CTA Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Tu Proyecto
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Sé Parte de Nuestra Historia
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Nos encantaría conocer tu proyecto y ayudarte a transformar 
              tus espacios. Contactanos para una consulta sin compromiso.
            </p>
            <Link to="/contacto" className="btn-luxury">
              Iniciar Mi Proyecto
            </Link>
          </motion.div>
        </div>
      </section>

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
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors duration-300 z-10"
              aria-label="Cerrar galería"
            >
              <X className="w-8 h-8" />
            </button>

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

            <div className="text-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-sm mx-auto"
              />
              <div className="mt-6">
                <h3 className="font-serif text-xl text-foreground">
                  {filteredProjects[selectedImage].title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {filteredProjects[selectedImage].location}
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
              {selectedImage + 1} / {filteredProjects.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Clientes;
