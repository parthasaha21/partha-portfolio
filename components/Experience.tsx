import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="journey" className="bg-[#F0F0F0] py-32 px-4 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 border-b border-black pb-8">
          <h2 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-black leading-none">
            The <span className="text-transparent text-stroke stroke-black">Journey</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceItem key={exp.id} item={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative border-b border-black/20 transition-all duration-500 cursor-pointer overflow-hidden ${isHovered ? 'bg-black text-white' : 'bg-transparent text-black'}`}
    >
      <div className="py-12 md:py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Year */}
        <div className="md:col-span-3">
          <h3 className={`text-4xl md:text-5xl font-bold uppercase tracking-tighter ${isHovered ? 'text-[#FF3300]' : 'text-transparent text-stroke stroke-black'}`}>
            {item.period.split('–')[0]}
          </h3>
          <p className="text-sm uppercase tracking-widest opacity-60 mt-2">{item.period}</p>
        </div>

        {/* Role & Company */}
        <div className="md:col-span-5">
          <h4 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-2">
            {item.role}
          </h4>
          <p className={`text-lg md:text-xl ${isHovered ? 'text-gray-400' : 'text-[#FF3300] font-bold'}`}>
            {item.company}
          </p>
        </div>

        {/* Action Icon */}
        <div className="md:col-span-4 flex md:justify-end items-start">
             <div className={`p-3 rounded-full border transition-all duration-300 ${isHovered ? 'bg-[#FF3300] border-[#FF3300] rotate-45' : 'border-black'}`}>
                 <ArrowUpRight size={24} className={isHovered ? 'text-black' : 'text-black'} />
             </div>
        </div>
        
        {/* Expandable Details */}
        <div className="md:col-span-12">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <ul className="pt-8 md:pl-[25%] space-y-2">
                             {item.description.map((desc: string, i: number) => (
                                 <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-gray-300">
                                     <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF3300] flex-shrink-0" />
                                     {desc}
                                 </li>
                             ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;