import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="works" className="bg-[#F0F0F0] py-32 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-6">
            Selected<br />
            <span className="text-[#FF3300]">Works</span>
          </h2>
          <div className="h-1 w-24 bg-black" />
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const gradients = [
    "from-orange-400 to-red-500",
    "from-blue-400 to-indigo-500",
    "from-green-400 to-emerald-500",
    "from-purple-400 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-teal-400 to-cyan-500",
  ];

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative flex flex-col md:flex-row items-center gap-12 md:gap-24"
    >
      {/* Image / Abstract Visual (Desktop: Alternating sides could be cool, but sticking to consistent layout for stability) */}
      <div className={`w-full md:w-3/5 h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
        
        {/* Overlay Details */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
             <span className="text-[10rem] md:text-[15rem] font-bold text-white/10 mix-blend-overlay select-none">
                 0{index + 1}
             </span>
        </div>
        
        {/* Hover Reveal Image/Texture */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className={`w-full md:w-2/5 flex flex-col justify-center order-2 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
         <div className={`flex items-center gap-4 mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
            <span className="px-4 py-2 border border-black rounded-full text-xs uppercase font-bold tracking-widest bg-white">
                {project.category}
            </span>
         </div>
         
         <h3 className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-none group-hover:text-[#FF3300] transition-colors duration-300">
           {project.name}
         </h3>
         
         <p className="text-xl text-gray-600 leading-relaxed mb-8">
           {project.description}
         </p>

         <div className={`flex ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
            <button className="flex items-center gap-2 text-lg font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-[#FF3300] hover:border-[#FF3300] transition-all group/btn">
                View Project
                <ArrowUpRight className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
            </button>
         </div>
      </div>
    </motion.div>
  );
};

export default Projects;