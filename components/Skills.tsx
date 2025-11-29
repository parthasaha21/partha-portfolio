import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Combine skills for the rows
  const row1 = [...SKILLS[0].skills, ...SKILLS[3].skills, ...SKILLS[0].skills, ...SKILLS[3].skills];
  const row2 = [...SKILLS[1].skills, ...SKILLS[2].skills, ...SKILLS[1].skills, ...SKILLS[2].skills];
  const row3 = ["Webflow Expert", "Creative Dev", "GSAP Animations", "React Power", "System Design", "Webflow Expert", "Creative Dev"];

  return (
    <section id="arsenal" className="py-32 bg-[#F0F0F0] overflow-hidden relative">
      <div className="px-6 mb-20 relative z-10 max-w-[1600px] mx-auto">
         <h2 className="text-6xl md:text-9xl font-bold uppercase leading-none tracking-tighter text-black mb-4">
            Technical<br />
            <span className="text-[#FF3300]">Arsenal</span>
          </h2>
      </div>

      <div className="flex flex-col gap-0 origin-center">
        {/* Row 1: Black Background */}
        <MarqueeRow 
            items={row1} 
            direction="left" 
            duration={80} 
            bgColor="bg-black" 
            textColor="text-white" 
            separatorColor="text-[#FF3300]" 
        />
        
        {/* Row 2: Orange Background */}
        <MarqueeRow 
            items={row2} 
            direction="right" 
            duration={80} 
            bgColor="bg-[#FF3300]" 
            textColor="text-black" 
            separatorColor="text-white" 
        />
        
        {/* Row 3: White/Gray Background with Outline */}
        <MarqueeRow 
            items={row3} 
            direction="left" 
            duration={80} 
            bgColor="bg-[#E5E5E5]" 
            textColor="text-transparent" 
            separatorColor="text-black"
            outline
        />
      </div>
    </section>
  );
};

interface MarqueeRowProps {
  items: string[];
  direction: "left" | "right";
  duration: number;
  bgColor: string;
  textColor: string;
  separatorColor: string;
  outline?: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction, duration, bgColor, textColor, separatorColor, outline }) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap py-6 md:py-8 ${bgColor}`}>
      <motion.div 
        className="flex gap-12 md:gap-24 flex-shrink-0"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className={`text-6xl md:text-8xl font-bold uppercase tracking-tighter ${textColor}`}
            style={outline ? { WebkitTextStroke: '2px black' } : {}}
          >
            {item}
            <span className={`inline-block mx-8 md:mx-16 ${separatorColor}`}>
              +
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;