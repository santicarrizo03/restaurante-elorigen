"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Galería" },
  { href: "#reservar", label: "Reservar" },
];

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl mb-4">El Origen</h3>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Tres generaciones de pasión por la cocina argentina. Un lugar
              donde cada plato cuenta una historia.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="uppercase tracking-wider text-sm font-sans mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="uppercase tracking-wider text-sm font-sans mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span className="text-background/60 text-sm">
                  Av. Corrientes 1234
                  <br />
                  Buenos Aires, Argentina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="https://wa.me/549+351+5143087?text=Hola,%20quiero%20hacer%20una%20reserva%20en%20El%20Origen.%20Personas:%20__%20Día:%20__%20Hora:%20__"
                  target="_blank"
                >
                  Reservar por WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <Link
                  href="mailto:reservas@elorigen.com.ar"
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  reservas@elorigen.com.ar
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="uppercase tracking-wider text-sm font-sans mb-6">
              Horarios
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary" />
                <div className="text-sm">
                  <p className="text-background/80 font-medium">
                    Martes a Viernes
                  </p>
                  <p className="text-background/60">
                    12:00 - 15:30 / 20:00 - 00:00
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary" />
                <div className="text-sm">
                  <p className="text-background/80 font-medium">
                    Sábados y Domingos
                  </p>
                  <p className="text-background/60">
                    12:00 - 16:00 / 20:00 - 01:00
                  </p>
                </div>
              </li>
              <li className="text-background/40 text-sm mt-4">Lunes cerrado</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} El Origen. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <Link href="#" className="hover:text-background transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
