import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
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
              
              <div className="space-y-6 mb-12">
                <a
                  href="tel:+5493512346427"
                  className="flex items-start gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Teléfono</p>
                    <p>+54 9 351 234-6427</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-muted-foreground hover:text-[#25D366] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-[#25D366] transition-colors duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">WhatsApp</p>
                    <p>Escribinos directamente</p>
                  </div>
                </a>

                <a
                  href="mailto:info@elreydelnorte.com"
                  className="flex items-start gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <p>info@elreydelnorte.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-muted-foreground">
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">Ubicación</p>
                    <p>Córdoba, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-background rounded-sm border border-border">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span>8:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sábados:</span>
                    <span>9:00 - 13:00</span>
                  </p>
                </div>
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
