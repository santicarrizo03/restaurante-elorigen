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

  const generateGoogleCalendarUrl = () => {
    const [year, month, day] = form.fecha.split("-");
    const [hour, minute] = form.hora.split(":");
    
    // Formato: YYYYMMDDTHHMMSS
    const startDate = `${year}${month}${day}T${hour}${minute}00`;
    
    // Duración de 2 horas para la reserva
    const endHour = String(parseInt(hour) + 2).padStart(2, "0");
    const endDate = `${year}${month}${day}T${endHour}${minute}00`;
    
    const title = encodeURIComponent(`Reserva El Origen - ${form.nombre}`);
    const details = encodeURIComponent(`Reserva para ${form.personas} personas\nNombre: ${form.nombre}`);
    const location = encodeURIComponent("El Origen Bodegón Argentino");
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensaje = `Hola, quiero hacer una reserva en El Origen.
Nombre: ${form.nombre}
Personas: ${form.personas}
Fecha: ${form.fecha}
Hora: ${form.hora}`;

    const whatsappUrl = `https://wa.me/5493515143087?text=${encodeURIComponent(mensaje)}`;
    const calendarUrl = generateGoogleCalendarUrl();

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Abrir Google Calendar en otra pestaña después de un pequeño delay
    setTimeout(() => {
      window.open(calendarUrl, "_blank");
    }, 500);
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

        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="w-full p-4 rounded-sm bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-primary focus:outline-none transition-colors"
          required
        />

        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
          className="w-full p-4 rounded-sm bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-primary focus:outline-none transition-colors"
          required
        />

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 text-base font-medium tracking-wide transition-colors"
        >
          Confirmar Reserva
        </Button>
        <p className="text-white/50 text-xs text-center mt-3">
          Se abrirá WhatsApp y se agendará en tu calendario
        </p>
      </form>
    </div>
  );
}