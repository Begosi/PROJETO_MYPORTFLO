import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import LiquidCard from "./ui/LiquidCard";
import MagneticButton from "./ui/MagneticButton";

const Github = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Contact() {
  return (
    <section className="py-32 px-6 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                Let's build <br /> <span className="text-white/30">together.</span>
              </h2>
              <p className="text-xl text-white/50 max-w-md font-light">
                Pronto para criarmos a próxima solução juntos? Vamos conversar sobre o seu projeto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-24 flex flex-wrap gap-4"
            >
              <a href="https://www.instagram.com/andreluis.gym/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/40 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/andr%C3%A9-luis-fonseca-035015305/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/40 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Begosi" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/40 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:andrefonsecaempr@gmail.com" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 hover:border-white/40 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <LiquidCard className="p-8 md:p-12">
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/60">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/60">Seu E-mail</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/60">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Conte-me sobre o seu projeto..." 
                    className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <MagneticButton className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/90 transition-colors">
                    Enviar Mensagem <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </form>
            </LiquidCard>
          </motion.div>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} André Luis Fonseca Da Cruz.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a href="https://www.instagram.com/andreluis.gym/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm">
            <Instagram className="w-4 h-4" /> @andreluis.gym
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-luis-fonseca-035015305/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://github.com/Begosi" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="mailto:andrefonsecaempr@gmail.com" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" /> E-mail
          </a>
        </div>

        <p className="text-white/40 text-sm flex items-center gap-2">
          Designed with <span className="text-blue-500">♥</span> in Brazil
        </p>
      </div>
    </section>
  );
}
