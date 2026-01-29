import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, MessageCircle, Send, Loader2, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const WHATSAPP_NUMBER = "5493512346427";
const WHATSAPP_MESSAGE = "Hola, me gustaría solicitar información sobre sus muebles.";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  telefono: z.string().min(8, "Ingresá un teléfono válido").max(20),
  direccion: z.string().max(200).optional(),
  articulo: z.string().max(100).optional(),
  mensaje: z.string().max(1000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacto = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nombre: data.nombre,
        telefono: data.telefono,
        direccion: data.direccion || null,
        articulo: data.articulo || null,
        mensaje: data.mensaje || null,
      });

      if (error) throw error;

      setIsSuccess(true);
      reset();
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "No pudimos enviar tu mensaje. Por favor, intentá de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
              Hablemos
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6">
              Contacto
            </h1>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estamos listos para ayudarte con tu próximo proyecto. 
              Completá el formulario o contactanos directamente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-charcoal-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Información de Contacto
              </h2>
              
              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <a
                  href="tel:+5493512346427"
                  className="flex items-start gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Llámanos</p>
                    <p>3512 34-6427</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-muted-foreground hover:text-[#25D366] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center group-hover:border-[#25D366] transition-colors duration-300">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">WhatsApp</p>
                    <p>+54 9 3512 34-6427</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Av.+Hipólito+Yrigoyen+456,+Córdoba,+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Visítanos</p>
                    <p>Av. Hipólito Yrigoyen 456, X5000<br />Córdoba, Argentina</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Horario</p>
                    <p>Lun - Vie: 10:00 - 19:00</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0!2d-64.18!3d-31.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29f11a3d0f3%3A0x0!2sAv.%20Hip%C3%B3lito%20Yrigoyen%20456%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación El Rey del Norte"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card-luxury p-8 lg:p-10">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 border-2 border-accent rounded-full flex items-center justify-center">
                      <Send className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-4">
                      ¡Gracias por contactarnos!
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Te responderemos a la brevedad.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn-outline-luxury"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl text-foreground mb-6">
                      Envianos tu consulta
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-sm text-muted-foreground mb-2"
                        >
                          Nombre *
                        </label>
                        <input
                          {...register("nombre")}
                          type="text"
                          id="nombre"
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                          placeholder="Tu nombre"
                        />
                        {errors.nombre && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.nombre.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-sm text-muted-foreground mb-2"
                        >
                          Teléfono *
                        </label>
                        <input
                          {...register("telefono")}
                          type="tel"
                          id="telefono"
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                          placeholder="Tu número de teléfono"
                        />
                        {errors.telefono && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.telefono.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="direccion"
                          className="block text-sm text-muted-foreground mb-2"
                        >
                          Dirección
                        </label>
                        <input
                          {...register("direccion")}
                          type="text"
                          id="direccion"
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                          placeholder="Tu dirección (opcional)"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="articulo"
                          className="block text-sm text-muted-foreground mb-2"
                        >
                          Artículo de Interés
                        </label>
                        <input
                          {...register("articulo")}
                          type="text"
                          id="articulo"
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                          placeholder="Ej: Muebles de cocina, placar, etc."
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block text-sm text-muted-foreground mb-2"
                        >
                          Mensaje
                        </label>
                        <textarea
                          {...register("mensaje")}
                          id="mensaje"
                          rows={4}
                          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Contanos sobre tu proyecto..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Enviar Mensaje
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
