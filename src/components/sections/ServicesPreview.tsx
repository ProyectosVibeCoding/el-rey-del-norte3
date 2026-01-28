import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import img19 from "@/assets/gallery/img19.jpg";
import img10 from "@/assets/gallery/img10.jpg";

const services = [
  {
    title: "Muebles de Cocina",
    description: "Cocinas integrales diseñadas a medida con materiales premium. Optimizamos cada espacio para funcionalidad y estética.",
    features: ["Diseño personalizado", "Instalación profesional", "Materiales de primera", "Garantía extendida"],
    image: img19,
  },
  {
    title: "Muebles a Medida",
    description: "Creamos piezas únicas que se adaptan perfectamente a tu espacio. Desde placares hasta bibliotecas y muebles especiales.",
    features: ["Medidas exactas", "Diseños exclusivos", "Variedad de acabados", "Asesoramiento completo"],
    image: img10,
  },
];

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-charcoal-light">
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
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Soluciones a Tu Medida
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card-luxury group"
            >
              {/* Image */}
              <div className="image-hover-zoom h-64 lg:h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/servicios"
                  className="inline-flex items-center text-accent hover:text-gold-light transition-colors duration-300 text-sm tracking-wider uppercase group/link"
                >
                  Ver más
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
