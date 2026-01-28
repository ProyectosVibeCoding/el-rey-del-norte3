import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("about-teaser");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 h-px bg-accent mx-auto mb-8"
          />

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-4">
            El Rey del Norte
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-12">
            Mueblería
          </p>

          {/* Tagline */}
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Diseños exclusivos y fabricación a medida. Transformamos espacios 
            con muebles que cuentan historias.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-luxury">
              Hablemos
            </Link>
            <Link to="/servicios" className="btn-outline-luxury">
              Ver Servicios
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300"
          aria-label="Scroll hacia abajo"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
