"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const menuItems = [
  {
    name: "Empanadas de la Casa",
    description: "Crujientes por fuera, jugosas por dentro. Rellenas con carne cortada a cuchillo, huevo, aceituna y el secreto de la abuela.",
    price: "$ 4.500",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Bife de Chorizo",
    description: "400 gramos de puro sabor pampeano. Sellado a la perfección en nuestra parrilla centenaria. Acompañado de papas doradas.",
    price: "$ 18.900",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Milanesa Napolitana",
    description: "La reina de la mesa argentina. Carne tierna, empanado crujiente, salsa de tomate casera, jamón y muzarella gratinada.",
    price: "$ 14.500",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Sorrentinos de Ricota",
    description: "Pasta fresca del día, rellena de ricota y nuez moscada. Bañados en salsa bolognesa de cocción lenta.",
    price: "$ 12.800",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Provoleta",
    description: "Queso provolone a la parrilla con orégano y aceite de oliva. El preludio perfecto para cualquier asado.",
    price: "$ 7.200",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Flan Casero",
    description: "El dulce final que la abuela siempre preparaba. Con dulce de leche, crema o ambos. Porque la vida es corta.",
    price: "$ 5.800",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=500&auto=format&fit=crop",
  },
];

export function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="carta" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Nuestra Carta
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
            Platos que cuentan{" "}
            <span className="italic text-primary">historias</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada receta ha pasado de generación en generación, conservando el sabor 
            auténtico que nos define. Estos son algunos de nuestros imprescindibles.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-primary font-sans font-medium">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
