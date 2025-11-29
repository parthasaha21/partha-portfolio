import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: { x: "100%" },
    open: { 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0, 
      opacity: 1,
      transition: { delay: 0.1 * i + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const navLinks = ['Arsenal', 'Works', 'Journey', 'Contact'];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-40 hidden md:flex justify-between items-center px-12 py-8 transition-all duration-300 mix-blend-difference text-white ${scrolled ? 'py-4' : 'py-8'}`}>
        <a href="#" className="text-2xl font-bold tracking-tighter z-50">
          PS©25
        </a>

        <div className="flex items-center gap-12">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-bold uppercase tracking-widest hover:text-[#FF3300] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF3300] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Header (Logo Only) */}
      <div className="fixed top-0 left-0 w-full z-40 md:hidden flex justify-between items-center px-6 py-6 pointer-events-none mix-blend-difference text-white">
        <a href="#" className="pointer-events-auto text-2xl font-bold tracking-tighter">
          PS©25
        </a>
      </div>

      {/* Mobile Toggle Button (Floating) */}
      <button 
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 md:hidden w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  custom={i}
                  variants={linkVariants}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold text-white uppercase tracking-tighter hover:text-[#FF3300] transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              variants={linkVariants} 
              custom={4}
              className="mt-12 text-white/50"
            >
              <p className="text-sm uppercase tracking-widest mb-2">Based In</p>
              <p className="text-xl text-white">Kolkata, India</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;