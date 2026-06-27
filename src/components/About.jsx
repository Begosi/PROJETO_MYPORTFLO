import { motion } from "framer-motion";
import { Code2, Database, LayoutTemplate, Server, Settings, MonitorPlay } from "lucide-react";
import LiquidCard from "./ui/LiquidCard";

const skills = [
  { name: "React / Next.js", icon: <LayoutTemplate className="w-5 h-5" /> },
  { name: "Node.js", icon: <Server className="w-5 h-5" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
  { name: "SAP HANA", icon: <Settings className="w-5 h-5" /> },
  { name: "Java", icon: <Code2 className="w-5 h-5" /> },
  { name: "UI/UX & Power BI", icon: <MonitorPlay className="w-5 h-5" /> },
];

export default function About() {
  return (
    <section className="py-32 px-6 relative z-10" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Left Column: Metadata & Skills */}
        <div className="md:col-span-4 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm font-bold tracking-widest text-white/40 uppercase mb-6">Formação</h3>
            <ul className="space-y-4">
              <li className="text-white/80 font-medium">Mecatrônica <span className="text-white/40 ml-2">SENAI CIMATEC</span></li>
              <li className="text-white/80 font-medium">Análise e Desenv. de Sistemas <span className="text-white/40 ml-2">UCSAL</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold tracking-widest text-white/40 uppercase mb-6">Tecnologias</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-white/70 bg-white/5 border border-white/10 rounded-lg p-3">
                  <span className="text-blue-400">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Manifesto */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white mb-8 tracking-tight">
              Da automação industrial ao ecossistema <span className="text-blue-400">SAP</span> e desenvolvimento <span className="text-gradient">Full-Stack</span> — construo sistemas que resolvem problemas reais de negócios com design impecável e arquitetura sólida.
            </h2>
            
            <p className="text-lg text-white/50 leading-relaxed max-w-3xl">
              Minha jornada começou com uma forte base técnica em automação, passando pela análise de dados e chegando à criação de soluções corporativas complexas. Acredito que a verdadeira inovação acontece na intersecção entre lógica rigorosa e um design centrado no usuário.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <LiquidCard className="p-8 flex items-center gap-8 inline-flex">
              <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">100<span className="text-blue-500">%</span></span>
              <span className="text-lg text-white/60 max-w-[150px] leading-tight font-medium">Focado em performance e qualidade.</span>
            </LiquidCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
