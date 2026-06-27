import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import LiquidCard from "./ui/LiquidCard";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden" id="home">


      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Transformando Lógica e <span className="text-gradient">Dados</span> em Soluções Web.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed"
          >
            Sou Desenvolvedor e Analista de Sistemas apaixonado por tecnologia, com vasta experiência em ecossistemas SAP, desenvolvimento Web de alto nível e Design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Ver meus Projetos
            </MagneticButton>
            <MagneticButton 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="liquid-glass text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Fale Comigo
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Content / Card */}
        <div className="col-span-1 lg:col-span-4 relative">
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
          >
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative p-8 aspect-[4/5] flex flex-col justify-between group overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 liquid-glass cursor-pointer"
            >
              {/* Imagem Fixa (Colorida) */}
              <img 
                src="img/WhatsApp Image 2026-06-26 at 15.52.30.jpeg" 
                alt="Portrait Color" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 pointer-events-none"></div>
              
              <div className="relative z-20 mt-auto" style={{ transform: "translateZ(50px)" }}>
                <p className="text-white/90 font-medium text-lg leading-snug">
                  "Olá, sou André. Transformo ecossistemas complexos em soluções de alto nível."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
