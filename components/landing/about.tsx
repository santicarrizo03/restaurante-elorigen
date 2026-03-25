"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2574&auto=format&fit=crop"
                alt="Interior del bodegón"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-primary/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Tres generaciones<br />
              <span className="italic text-primary">de pasión</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En 1952, Don Alberto abrió las puertas de lo que sería mucho más que un simple 
                lugar para comer. Con las recetas que su madre trajo desde Italia y el espíritu 
                indomable de la pampa argentina, nació El Origen.
              </p>
              <p>
                Hoy, sus nietos continúan honrando ese legado. Cada milanesa, cada empanada, 
                cada sorrentino que sale de nuestra cocina lleva consigo décadas de tradición 
                y el amor incondicional por lo auténtico.
              </p>
              <p>
                No somos solo un bodegón. Somos el lugar donde los recuerdos se crean, donde 
                las familias se reúnen, donde cada bocado cuenta una historia.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              {[
                { number: "70+", label: "Años de historia" },
                { number: "3", label: "Generaciones" },
                { number: "∞", label: "Recuerdos" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl md:text-4xl text-primary mb-1">{stat.number}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
