"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Desarrollador/Diseñador Web",
    company: "Clasalut SL - clasalutservicios.com",
    period: "Abr 2024 - Actualmente",
    description:
      "Desarrollo de una web enfocada en la oferta de servicios médicos privados. Me ocupé de estructurar el sitio para facilitar la reserva de citas, presentar al equipo profesional, integrar la información de contacto y transmitir los valores de la empresa, incluyendo la disponibilidad de urgencias 24 horas.",
  },
  {
    title: "Desarrollador Web",
    company: "Hola Martech SL - holamarketing.online",
    period: "Jun 2025 - Jul 2025",
    description:
      "Prácticas donde establecí una base sólida en desarrollo frontend y en estrategias de posicionamiento SEO, tanto local como general. Participe en la creación y optimización de sitios web",
  },
  {
    title: "Desarrollador/Diseñador Web",
    company: "Clasalut SL - clasalut.es",
    period: "Oct 2024 - Dic 2024",
    description:
      "Desarrollo y gestión de una tienda online de productos sanitarios. Me encargué del diseño web, la optimización SEO, la implementación de contenido informativo, y la coordinación de estrategias digitales y sociales para aumentar la visibilidad y credibilidad de la marca. Esté fue mi primer proyecto profesional, donde aprendí a aplicar mis conocimientos en un entorno real.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
