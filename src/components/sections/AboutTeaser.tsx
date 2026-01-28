import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import img28 from "@/assets/gallery/img28.jpg";

const AboutTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-teaser" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="image-hover-zoom rounded-sm overflow-hidden">
              <img
                src={img28}
                alt="Mueble artesanal de El Rey del Norte"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Artesanía que Trasciende
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desde Córdoba, creamos muebles que combinan diseño contemporáneo 
              con técnicas artesanales tradicionales. Cada pieza es única, 
              pensada para perdurar en el tiempo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Trabajamos con maderas seleccionadas y materiales de primera calidad, 
              adaptándonos a tus necesidades y espacios. Tu visión, nuestra pasión.
            </p>
            <Link
              to="/quienes-somos"
              className="inline-flex items-center text-accent hover:text-gold-light transition-colors duration-300 text-sm tracking-wider uppercase group"
            >
              Conocer más
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
