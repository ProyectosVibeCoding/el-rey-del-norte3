import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import img27 from "@/assets/gallery/img27.jpg";
import img28 from "@/assets/gallery/img28.jpg";
import img19 from "@/assets/gallery/img19.jpg";

const values = [
  {
    title: "Calidad Artesanal",
    description: "Cada pieza es elaborada con atención al detalle y materiales seleccionados cuidadosamente.",
  },
  {
    title: "Diseño Personalizado",
    description: "Creamos muebles únicos que se adaptan a tus espacios y reflejan tu estilo personal.",
  },
  {
    title: "Compromiso",
    description: "Cumplimos con los plazos acordados y mantenemos comunicación constante durante todo el proceso.",
  },
  {
    title: "Garantía",
    description: "Respaldamos nuestro trabajo con garantía extendida y servicio post-venta.",
  },
];

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Nos reunimos para conocer tus ideas, necesidades y el espacio disponible.",
  },
  {
    number: "02",
    title: "Diseño y Presupuesto",
    description: "Elaboramos el diseño detallado y un presupuesto transparente sin costos ocultos.",
  },
  {
    number: "03",
    title: "Fabricación e Instalación",
    description: "Fabricamos tu mueble con los mejores materiales y lo instalamos profesionalmente.",
  },
];

const QuienesSomos = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const stepsRef = useRef(null);
  const isStepsInView = useInView(stepsRef, { once: true, margin: "-100px" });

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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestra Historia
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
              Quiénes Somos
            </h1>
            <div className="section-divider mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="image-hover-zoom rounded-sm overflow-hidden">
                <img
                  src={img27}
                  alt="Mueble artesanal de El Rey del Norte"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 rounded-sm -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
                Tradición y Modernidad
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Somos una mueblería cordobesa con más de 20 años de experiencia 
                en la fabricación de muebles de alta calidad. Combinamos técnicas 
                artesanales tradicionales con diseños contemporáneos para crear 
                piezas únicas que perduran en el tiempo.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Trabajamos con maderas seleccionadas y materiales de primera 
                calidad, siempre adaptándonos a las necesidades específicas de 
                cada cliente. Ya sea que busques un diseño propio o prefieras 
                que creemos algo especial para vos, estamos aquí para ayudarte.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro compromiso es transformar tus ideas en realidad, 
                brindando un servicio personalizado desde la primera consulta 
                hasta la instalación final.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-charcoal-light">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestros Valores
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Lo Que Nos Define
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-accent/30 rounded-full flex items-center justify-center">
                  <span className="text-accent font-serif text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={stepsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Proceso
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Cómo Trabajamos
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isStepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <span className="text-8xl font-serif text-accent/10 absolute -top-8 left-0">
                  {step.number}
                </span>
                <div className="pt-12">
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 lg:py-32 bg-charcoal-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-4">
            {[img28, img19, img27].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="image-hover-zoom aspect-[4/5] rounded-sm overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Trabajo de El Rey del Norte ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contacto" className="btn-luxury">
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuienesSomos;
