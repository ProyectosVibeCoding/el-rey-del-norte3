import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import carpinteroImg from "@/assets/carpintero-historia.jpg";
import img27 from "@/assets/gallery/img27.png";
import img28 from "@/assets/gallery/img28.png";
import img19 from "@/assets/gallery/img19.png";

const timeline = [
  {
    year: "2003",
    title: "Los Comienzos",
    description: "Con un pequeño taller y grandes sueños, comenzamos a dar forma a nuestros primeros muebles en el corazón de Córdoba.",
  },
  {
    year: "2010",
    title: "Crecimiento y Expansión",
    description: "Ampliamos nuestro taller e incorporamos maquinaria de última generación sin perder la esencia artesanal que nos caracteriza.",
  },
  {
    year: "2018",
    title: "Reconocimiento Regional",
    description: "Nos consolidamos como referentes en mobiliario de calidad en toda la provincia de Córdoba.",
  },
  {
    year: "Hoy",
    title: "Mirando al Futuro",
    description: "Seguimos innovando y perfeccionando nuestro oficio, combinando tradición artesanal con diseños contemporáneos.",
  },
];

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

const NuestraHistoria = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

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
              Desde 2003
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
              Nuestra Historia
            </h1>
            <div className="section-divider mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Story Section with Carpenter Image */}
      <section className="py-16 lg:py-24 bg-charcoal-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="image-hover-zoom rounded-sm overflow-hidden">
                <img
                  src={carpinteroImg}
                  alt="Maestro carpintero trabajando la madera en nuestro taller"
                  className="w-full h-[400px] lg:h-[550px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 rounded-sm -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
                Más de 20 Años de Pasión por la Madera
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Todo comenzó en un pequeño taller de barrio, donde un joven carpintero 
                con las manos llenas de aserrín soñaba con crear muebles que contaran 
                historias. Con dedicación, esfuerzo y un amor profundo por el oficio, 
                <strong className="text-foreground"> El Rey del Norte</strong> nació en Córdoba.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Durante más de dos décadas, hemos transformado maderas nobles en piezas 
                que habitan los hogares cordobeses. Cada mueble que sale de nuestro taller 
                lleva consigo la dedicación de manos expertas que aprendieron el oficio 
                de generación en generación.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hoy, combinamos las técnicas artesanales tradicionales que nos enseñaron 
                nuestros maestros con las tecnologías más modernas. Pero nuestra esencia 
                sigue siendo la misma: <em className="text-accent">crear muebles con alma</em>, 
                piezas únicas que perduran en el tiempo y se convierten en parte de tu historia familiar.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No somos solo una mueblería. Somos artesanos que entienden que cada hogar 
                es único, y por eso cada proyecto que emprendemos es tratado con la misma 
                pasión y dedicación que el primero.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestro Recorrido
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">
              Hitos que Nos Definen
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`lg:flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="card-luxury p-8">
                      <span className="text-accent font-serif text-3xl block mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-xl text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-accent rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2" 
                    style={{ top: `${(index * 25) + 12}%` }} 
                  />
                  
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
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
              Lo Que Nos Guía
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

      {/* Gallery Preview */}
      <section className="py-24 lg:py-32 bg-background">
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

export default NuestraHistoria;
