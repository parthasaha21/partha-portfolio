import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { motion } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // Removed 'md:cursor-none' so the default cursor is always visible.
    <div className="bg-[#F0F0F0] min-h-screen text-black selection:bg-[#FF3300] selection:text-white relative overflow-x-hidden">
      
      {/* Custom Cursor Follower - Purely Aesthetic */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 bg-black/20 rounded-full pointer-events-none z-[100] hidden md:block backdrop-blur-sm border border-black/10"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      />
      
      <div className="relative z-10 w-full overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;