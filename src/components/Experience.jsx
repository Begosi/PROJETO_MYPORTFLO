import { motion } from "framer-motion";

const experiences = [
  {
    company: "Rabelonegócios",
    role: "Analista de Suporte / TI",
    period: "Atual",
    description: "Atuação direta com ERPs complexos (SAP HANA), integrações de sistemas, migrações de dados e desenvolvimento de automações e soluções web complementares para otimização de processos internos."
  },
  {
    company: "OKalimentos",
    role: "Analista de Dados / Jovem Aprendiz",
    period: "Anterior",
    description: "Análise aprofundada de dados, criação de dashboards estratégicos em Power BI e implementação de automações que reduziram o tempo de processos manuais, trazendo eficiência operacional para o setor."
  }
];

export default function Experience() {
  return (
    <section className="py-16 md:py-32 px-6 relative z-10" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-16 md:mb-24"
        >
          Experiência.
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[calc(25%-4px)] top-2 w-2 h-2 rounded-full bg-blue-500 hidden md:block" />

                <div className="col-span-1 md:text-right md:pr-12">
                  <span className="text-sm font-bold tracking-widest text-white/60 uppercase block mb-2">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                </div>

                <div className="col-span-1 md:col-span-3 md:pl-12">
                  <h4 className="text-2xl font-medium text-white/90 mb-4">{exp.role}</h4>
                  <p className="text-lg text-white/75 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
