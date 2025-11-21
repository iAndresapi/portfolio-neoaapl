import Link from "next/link"
import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />
      {/* klk */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Desarrollo Web Frontend Junior</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hola! Soy</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Andrés Arturo Patiño
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Creo experiencias digitales excepcionales combinando tecnología, creatividad y una pasión por la innovación.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#proyectos-destacados" passHref>
                <Button className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-emerald-500 border-0">
                  <span className="relative z-10 flex items-center">
                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
                <Button
                className="border-zinc-700 text-green-500 hover:text-green-700 hover:border-zinc-500 bg-transparent"
                >
                  <Link href="tel:+34635383506" className="flex items-center">
                    Contacto
                  </Link>
                </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/iAndresapi" target="_blank" rel="noopener noreferrer">
                <Button
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/neoaapl/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:pandresarturo@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Sobre mi" subtitle="Mi trayectoria y experiencia" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/AndresArturoPatino.webp?height=600&width=600"
                  alt="Andrés Arturo Patiño"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Disponible para trabajar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  Soy un desarrollador web enfocado en el frontend, con experiencia en la creación de sitios web corporativos y tiendas online. Utilizo tecnologías como HTML, CSS, JavaScript y WordPress, y actualmente amplío mis conocimientos en frameworks modernos como React. Mi objetivo es crear interfaces funcionales, atractivas y centradas en la experiencia del usuario.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Mi trayectoria en tecnología comenzó con una sólida base en desarrollo de software. He trabajado con
                  varias empresas para crear experiencias digitales intuitivas, eficientes y accesibles.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos
                  de código abierto y manteniéndome al día con las últimas tendencias de la industria.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Nombre</div>
                    <div className="font-medium">Andrés Arturo Patiño</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">pandresarturo@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Localización</div>
                    <div className="font-medium">Sant Vicenç de Montalt</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Disponibilidad</div>
                    <div className="font-medium text-green-500">Abierto a oportunidades</div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/AndresArturoPatiño-DevCV.pdf"
                    download
                    target="_blank"
                  rel="noopener noreferrer"
                  >
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    Descargar CV
                  </Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Mis Habilidades" subtitle="Tecnologías con las que trabajo" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="VS Code" level={65} title="Intermedio" />
            <SkillBadge name="HTML/CSS" level={85} title="Avanzado" />
            <SkillBadge name="Bootstrap" level={75} title="Avanzado" />
            <SkillBadge name="Tailwind CSS" level={50} title="Intermedio" />
            <SkillBadge name="JavaScript" level={50} title="Intermedio" />
            <SkillBadge name="React" level={35} title="Básico" />
            <SkillBadge name="GitHub" level={55} title="Intermedio" />
            <SkillBadge name="Shell" level={25} title="Básico" />
            <SkillBadge name="XAMPP" level={15} title="Básico" />
            <SkillBadge name="Figma" level={60} title="Intermedio" />
            <SkillBadge name="Shopify" level={50} title="Intermedio" />
            <SkillBadge name="WordPress" level={80} title="Avanzado" />
            <SkillBadge name="Trello" level={95} title="Experto" />
            <SkillBadge name="NotebookLM" level={75} title="Intermedio" />
            <SkillBadge name="Firebase" level={45} title="Intermedio" />
            <SkillBadge name="Google AI Studio" level={55} title="Intermedio" />
            <SkillBadge name="TypeScript" level={30} title="Básico" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10" id="proyectos-destacados">
          <SectionHeading title="Proyectos Destacados" subtitle="Algunos de mis trabajos recientes" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="E-commerce Material Sanitarios - Clasalut"
              description="Una tienda en línea para productos de material sanitario con integración de pagos."
              tags={["WordPress", "WooCommerce", "PHP", "Stripe", "JavaScript"]}
              image="/clasalut.png?height=500&width=500"
              demoUrl="https://clasalut.es/"
            />
            <ProjectCard
              title="Gestión de citas pacientes - Clasalut Servicios"
              description="Una sitio web con gestión de citas para pacientes con recordatorios y notificaciones, e integración de API de Google Maps. Instalación y formación para programa de historial clínico."
              tags={["WordPress", "Amelia", "JavaScript", "Google Maps API", "Zoom", "OpenEMR"]}
              image="/clasalut-servicios.png?height=400&width=600"
              demoUrl="https://clasalutservicios.com"
            />
            <ProjectCard
              title="Hola Marketing - Desarrollo y Mantenimiento de Sitios Web Corporativos"
              description="Colaboración en el desarrollo y mantenimiento de sitios web para distintas empresas. Implementación de estrategias básicas de SEO y marketing digital utilizando WordPress y Google Analytics, asegurando coherencia visual y comunicativa junto al equipo de diseño y contenidos."
              tags={["WordPress", "PageSpeed Insight", "HTML", "CSS", "JavaScript", "SEO", "Elementor", "Responsive Design"]}
              image="/holamarketing.webp?height=400&width=600"
              demoUrl="https://holamarketing.online"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Experiencia Laboral" subtitle="Mi trayectoria profesional" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Contacto" subtitle="Trabajemos juntos" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-top mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">pandresarturo@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      <Link href="https://www.linkedin.com/in/neoaapl/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/neoaapl/
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Estado Actual</h4>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponible para trabajos freelance y oportunidades a tiempo completo</span>
                </div>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Redes Sociales</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-green-400" />
                    </div>
                  <div>
                    <Link href="https://www.instagram.com/neoaapl/" target="_blank" rel="noopener noreferrer">
                    <div className="text-sm text-zinc-500">Instagram</div>
                    <div className="font-medium">instagram.com/neoaapl</div>
                    </Link>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Neo
              </span>
              <span className="text-white">AAPL</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Andrés Arturo Patiño. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/neoaapl/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:pandresarturo@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
