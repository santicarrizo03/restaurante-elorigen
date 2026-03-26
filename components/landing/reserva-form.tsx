"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ReservaForm() {
  const [form, setForm] = useState({
    nombre: "",
    personas: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensaje = `Hola, quiero hacer una reserva en El Origen.
Nombre: ${form.nombre}
Personas: ${form.personas}
Fecha: ${form.fecha}
Hora: ${form.hora}`;

    const whatsappUrl = `https://wa.me/5493515143087?text=${encodeURIComponent(mensaje)}`;
    

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");
    
    
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-black/60 backdrop-blur-sm border border-white/10 rounded-sm shadow-xl">
      <h3 className="font-serif text-2xl text-white mb-6 text-center">
        Reservar mesa
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-4 rounded-sm bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-primary focus:outline-none transition-colors"
          required
        />

        <input
          type="number"
          name="personas"
          placeholder="Cantidad de personas"
          value={form.personas}
          onChange={handleChange}
          className="w-full p-4 rounded-sm bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-primary focus:outline-none transition-colors"
          required
        />

        <div className="relative">
          <label className="absolute left-4 top-1 text-white/50 text-xs pointer-events-none">
            Fecha
          </label>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            className="w-full pt-6 pb-3 px-4 rounded-sm bg-white/10 text-white border border-white/20 focus:border-primary focus:outline-none transition-colors [color-scheme:dark]"
            required
          />
        </div>

        <div className="relative">
          <label className="absolute left-4 top-1 text-white/50 text-xs pointer-events-none">
            Hora
          </label>
          <input
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
            className="w-full pt-6 pb-3 px-4 rounded-sm bg-white/10 text-white border border-white/20 focus:border-primary focus:outline-none transition-colors [color-scheme:dark]"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 text-base font-medium tracking-wide transition-colors"
        >
          Reservar por WhatsApp
        </Button>
        
      </form>
    </div>
  );
}