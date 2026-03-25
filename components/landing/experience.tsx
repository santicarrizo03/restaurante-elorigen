"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Heart, Clock, Users } from "lucide-react";

const experiences = [
  {
    icon: Flame,
    title: "Fuego y Tradición",
    description: "Nuestros cortes se sellan en parrilla a leña, respetando los tiempos y técnicas de nuestros abuelos. El fuego es nuestro primer ingrediente.",
  },
  {
    icon: Heart,
    title: "Recetas con Alma",
    description: "Cada plato es preparado con ingredientes frescos del día y recetas transmitidas de generación en generación, cocinadas con el mismo amor de siempre.",
  },
  {
    icon: Clock,
    title: "El Tiempo Justo",
    description: "Aquí no hay prisa. Creemos en los tiempos de cocción perfectos, en las sobremesas largas y en las conversaciones que nutren el alma.",
  },
  {
    icon: Users,
    title: "Mesa Compartida",
    description: "Más que clientes, buscamos comensales. Personas que valoren sentarse a la mesa como un ritual, como una celebración de la vida.",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            La Experiencia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
            Más que una comida,{" "}
            <span className="italic text-primary">un momento</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            En El Origen, cada detalle está pensado para transportarte a una época 
            donde la mesa era el centro de todo. Donde comer era un acto de amor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
