import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white px-6">
      <div className="max-w-[1600px] mx-auto">
        <p className="text-[#FF3300] font-bold uppercase tracking-widest mb-8">Got an Idea?</p>
        
        <a href={`mailto:${PERSONAL_INFO.email}`} className="block group">
          <h2 className="text-[12vw] leading-none font-bold uppercase tracking-tighter group-hover:text-[#FF3300] transition-colors">
            Let's
            <br />
            Talk
            <ArrowRight className="inline-block ml-8 w-[10vw] h-[10vw] group-hover:translate-x-12 transition-transform duration-500" />
          </h2>
        </a>

        <div className="mt-32 grid md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Contact Details</h3>
            <p className="text-2xl font-bold mb-2">{PERSONAL_INFO.email}</p>
            <p className="text-xl text-gray-400">{PERSONAL_INFO.phone}</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Socials</h3>
            <div className="flex flex-col gap-2">
              <a href={`https://${PERSONAL_INFO.linkedin}`} className="text-xl hover:text-[#FF3300]">LinkedIn</a>
              <a href={`https://${PERSONAL_INFO.github}`} className="text-xl hover:text-[#FF3300]">GitHub</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Location</h3>
            <p className="text-xl">{PERSONAL_INFO.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;