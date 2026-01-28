import { Link } from "react-router-dom";
import { Facebook, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img
                src={logo}
                alt="El Rey del Norte"
                className="h-16 w-auto mb-6"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mueblería con más de 20 años de experiencia en Córdoba. Diseños propios, 
              personalizados y fabricación a medida.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Navegación</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Quiénes Somos", path: "/quienes-somos" },
                { name: "Servicios", path: "/servicios" },
                { name: "Nuestros Clientes", path: "/clientes" },
                { name: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5493512346427"
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+54 9 351 234-6427</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@elreydelnorte.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@elreydelnorte.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Córdoba, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Seguinos</h4>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.facebook.com/profile.php?id=100057781384704"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <Link to="/contacto" className="btn-outline-luxury text-xs">
              Solicitar Presupuesto
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} El Rey del Norte. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Mueblería en Córdoba, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
