import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import LiquidCard from "./ui/LiquidCard";

const projects = [
  {
    id: 1,
    title: "Órbita IPTV",
    description: "Aplicativo multiplataforma para streaming IPTV, com suporte a Windows (Electron) e Mobile (Capacitor), garantindo alta performance e sincronização offline.",
    tech: ["React", "Electron", "Capacitor", "Vite"],
    image: "img/portal_iptv.png",
    link: "https://projeto-iptv-nine.vercel.app/",
    github: "https://github.com/Begosi/PROJETO_IPTV"
  },
  {
    id: 2,
    title: "Agência ALT",
    description: "Agência de marcketing e audiovisual, com foco em marketing digital, desenvolvimento de sites e criação de conteúdo para redes sociais.",
    tech: ["Next.js", "Supabase", "TailwindCSS", "GSAP"],
    image: "img/Alt_Agência .png",
    link: "https://projeto-alt-ag-ncia.vercel.app/",
    github: "https://github.com/Begosi/Projeto_ALT_ag-ncia"
  },
  {
    id: 3,
    title: "Collective Runners",
    description: "Projeto de corrida para criar uma comunidade de corredores e promover eventos de corrida.",
    tech: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    image: "img/collective_runners.png",
    link: "https://collective-runners.vercel.app/",
    github: "https://github.com/Begosi/Collective_Runners_"
  },
  {
    id: 4,
    title: "Infinity Academias",
    description: "Projeto de academia, com foco em marketing digital, desenvolvimento de sites e criação de conteúdo para redes sociais.",
    tech: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    image: "img/infinit_page.png",
    link: "https://infinity-academias.vercel.app/",
    github: "https://github.com/Begosi/Collective_Runners_"
  },
  {
    id: 5,
    title: "Rabelo Negócios",
    description: "Site institucional de empresa de TI voltada para desenvolvimnto e implementação de sistemas SAP.",
    tech: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    image: "img/rabelo_negocios.png",
    link: "https://rabelonegocios-oficial.vercel.app/",
    github: "https://github.com/Begosi/RABELONEGOCIOS_OFICIAL"
  },

];

export default function Projects() {
  return (
    <section className="py-16 md:py-32 px-6 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Trabalhos <br /> <span className="text-white/60">Recentes.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] mb-4 bg-white/5 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Liquid Glass Overlay on Hover (Desktop) */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                    <Code className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-full bg-white/5 text-white/80 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/75 text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Mobile Action Buttons (Visible only on mobile/tablet) */}
                <div className="mt-4 flex md:hidden gap-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white text-black text-center font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                  >
                    Acessar <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 text-white text-center font-semibold text-xs border border-white/10 flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                  >
                    GitHub <Code className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
