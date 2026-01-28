import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import img1 from "@/assets/gallery/img1.png";
import img5 from "@/assets/gallery/img5.png";
import img10 from "@/assets/gallery/img10.png";
import img16 from "@/assets/gallery/img16.png";
import img19 from "@/assets/gallery/img19.png";
import img21 from "@/assets/gallery/img21.png";

const services = [
  {
    id: "cocinas",
    title: "Muebles de Cocina",
    description: "Diseñamos y fabricamos cocinas integrales que combinan funcionalidad y estética. Cada proyecto es único, adaptado a las dimensiones de tu espacio y a tu estilo de vida.",
    features: [
      "Diseño personalizado según tus necesidades",
      "Materiales de primera calidad",
      "Herrajes y accesorios premium",
      "Instalación profesional incluida",
      "Variedad de acabados y colores",
      "Optimización del espacio de guardado",
    ],
    images: [img19, img21, img10],
  },
  {
    id: "medida",
    title: "Muebles a Medida",
    description: "Creamos piezas únicas que se adaptan perfectamente a cualquier espacio. Desde placares y vestidores hasta bibliotecas, escritorios y muebles especiales.",
    features: [
      "Medidas exactas para tu espacio",
      "Diseños exclusivos y personalizados",
      "Amplia variedad de maderas y acabados",
      "Asesoramiento de diseño incluido",
      "Fabricación artesanal de calidad",
      "Entrega e instalación profesional",
    ],
    images: [img27, img28, img5],
  },
  {
    id: "exterior",
    title: "Muebles de Exterior",
    description: "Diseñamos y fabricamos decks, pérgolas y mobiliario para espacios al aire libre. Utilizamos maderas tratadas para resistir las condiciones climáticas.",
    features: [
      "Maderas tratadas para exterior",
      "Decks y pérgolas a medida",
      "Diseño resistente y duradero",
      "Mantenimiento sencillo",
      "Instalación profesional",
      "Garantía extendida",
    ],
    images: [img16, img1],
  },
];

import img27 from "@/assets/gallery/img27.png";
import img28 from "@/assets/gallery/img28.png";

const Servicios = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

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
              Lo Que Hacemos
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
              Nuestros Servicios
            </h1>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ofrecemos soluciones integrales en mobiliario, desde el diseño inicial 
              hasta la instalación final. Cada proyecto es tratado con dedicación 
              y atención al detalle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 lg:py-32 ${
            serviceIndex % 2 === 0 ? "bg-charcoal-light" : "bg-background"
          }`}
        >
          <ServiceBlock service={service} reverse={serviceIndex % 2 !== 0} />
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-charcoal-light">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactanos para una consulta sin compromiso. Te asesoramos 
              sobre la mejor solución para tu espacio.
            </p>
            <Link to="/contacto" className="btn-luxury">
              Solicitar Presupuesto
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

interface ServiceBlockProps {
  service: typeof services[0];
  reverse?: boolean;
}

const ServiceBlock = ({ service, reverse }: ServiceBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Images */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`grid gap-4 ${reverse ? "lg:order-2" : ""}`}
        >
          <div className="image-hover-zoom rounded-sm overflow-hidden">
            <img
              src={service.images[0]}
              alt={service.title}
              className="w-full h-64 lg:h-80 object-cover"
              loading="lazy"
            />
          </div>
          {service.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {service.images.slice(1, 3).map((img, idx) => (
                <div key={idx} className="image-hover-zoom rounded-sm overflow-hidden">
                  <img
                    src={img}
                    alt={`${service.title} ${idx + 2}`}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={reverse ? "lg:order-1" : ""}
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
            {service.title}
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {service.description}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="text-muted-foreground flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contacto"
            className="inline-flex items-center text-accent hover:text-gold-light transition-colors duration-300 text-sm tracking-wider uppercase group"
          >
            Consultar
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Servicios;
