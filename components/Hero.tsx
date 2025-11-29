import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // Preloader Counter Logic
  useEffect(() => {
    const duration = 2000; // 2 seconds loading
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); // Wait a bit at 100%
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-[#F0F0F0] overflow-hidden cursor-default">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="flex items-end gap-2">
              <span className="text-9xl font-bold tracking-tighter tabular-nums leading-none">
                {count}
              </span>
              <span className="text-2xl font-bold mb-4">%</span>
            </div>
            <p className="text-xs uppercase tracking-widest mt-4 animate-pulse">
              Loading Experience
            </p>
          </motion.div>
        ) : (
          <HeroContent />
        )}
      </AnimatePresence>
    </section>
  );
};

const HeroContent: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the radial orb
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-4 relative z-0">
      
      {/* 1. The Radial Gradient (Mouse Follower) */}
      <motion.div 
        style={{ 
          left: springX, 
          top: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF3300] to-orange-400 opacity-20 blur-[100px] pointer-events-none z-0 mix-blend-multiply"
      />

      {/* 2. Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* 3. Typography Content */}
      <div className="flex flex-col items-center z-10 relative">
        <OverflowText delay={0.8} className="text-[13vw] md:text-[15vw] font-bold uppercase leading-[0.8] tracking-tighter text-black mix-blend-overlay">
          Partha
        </OverflowText>
        
        <div className="flex items-center gap-4 md:gap-8 w-full justify-center my-4 md:my-6">
           <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1, delay: 1.2, ease: "circOut" }}
             className="h-[2px] w-12 md:w-32 bg-black origin-left"
           />
           <OverflowText delay={1} className="text-sm md:text-xl font-mono uppercase tracking-[0.25em] text-[#FF3300] font-bold bg-black/5 px-4 py-1 rounded-full backdrop-blur-sm border border-black/10">
             Creative Developer
           </OverflowText>
           <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1, delay: 1.2, ease: "circOut" }}
             className="h-[2px] w-12 md:w-32 bg-black origin-right"
           />
        </div>

        <OverflowText delay={0.9} className="text-[13vw] md:text-[15vw] font-bold uppercase leading-[0.8] tracking-tighter text-transparent text-stroke stroke-black hover:text-black transition-colors duration-500 cursor-none">
          Saha
        </OverflowText>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-8 bg-black/20 rounded-full overflow-hidden"
        >
          <div className="w-full h-1/2 bg-[#FF3300]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const OverflowText: React.FC<{ children: React.ReactNode; delay: number; className?: string }> = ({ children, delay, className }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%", skewY: 10 }}
        animate={{ y: 0, skewY: 0 }}
        transition={{ duration: 1.2, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Hero;