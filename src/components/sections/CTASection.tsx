import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5493512346427";
const WHATSAPP_MESSAGE = "Hola, me gustaría solicitar un presupuesto para un proyecto de muebles.";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-24 lg:py-32 bg-charcoal-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            ¿Listo para empezar?
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
            Transformemos Tu Espacio
          </h2>
          <div className="section-divider mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Contanos tu proyecto y te asesoramos sin compromiso. 
            Creamos muebles que se adaptan a tu estilo de vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contacto" className="btn-luxury flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Hablemos
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-luxury flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
