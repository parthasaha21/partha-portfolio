import React from "react";

const projects = [
  {
    title: "Partha Portfolio",
    tag: "React • Framer Motion • Tailwind",
    link: "https://effervescent-cheesecake-bde671.netlify.app",
  },
  {
    title: "Krypta (Coming Soon)",
    tag: "Webflow • Landing Page",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-10">
        Featured Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target={project.link === "#" ? "_self" : "_blank"}
            className="group border border-black/10 rounded-3xl p-6 bg-white/60 hover:bg-white transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-black/50">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
            </div>
            <p className="text-sm text-black/70 mb-4">{project.tag}</p>
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF3300]">
              View project →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
