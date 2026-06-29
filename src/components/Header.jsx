import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="liquid-glass rounded-full flex items-center justify-between w-full max-w-5xl px-2 py-2">
          <div className="flex items-center gap-6 pl-4">
            <span className="font-bold tracking-tight text-white/90 text-lg z-50">
              André Luis.
            </span>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
              <a href="#about" className="hover:text-white transition-colors">Sobre</a>
              <a href="#experience" className="hover:text-white transition-colors">Experiência</a>
              <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <MagneticButton 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/curriculo.pdf';
                link.download = 'Curriculo_Andre_Luis.pdf';
                link.click();
              }}
              className="hidden md:flex bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm items-center gap-2 hover:bg-white/90 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Baixar Currículo
            </MagneticButton>
            <button 
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-full hover:bg-white/5 transition-colors z-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white/80" />
              ) : (
                <Menu className="w-5 h-5 text-white/80" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl font-medium text-white/90">
              <a href="#about" onClick={closeMenu} className="hover:text-white transition-colors">Sobre</a>
              <a href="#experience" onClick={closeMenu} className="hover:text-white transition-colors">Experiência</a>
              <a href="#projects" onClick={closeMenu} className="hover:text-white transition-colors">Projetos</a>
              <a href="#contact" onClick={closeMenu} className="hover:text-white transition-colors mt-4">Contato</a>
              
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/curriculo.pdf';
                  link.download = 'Curriculo_Andre_Luis.pdf';
                  link.click();
                }}
                className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Baixar Currículo
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
