import React from "react";

const Experience: React.FC = () => {
  const items = [
    {
      time: "2024 – Now",
      title: "Freelance Web Designer & Developer",
      desc: "Building portfolio sites, landing pages and Webflow/React experiences.",
    },
    {
      time: "2023 – 2024",
      title: "Frontend Web Designer",
      desc: "1+ year working with HTML, CSS, JS, jQuery and Bootstrap.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-10">
        Experience
      </h2>

      <div className="space-y-8 border-l border-black/10 pl-6">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-[#FF3300]" />
            <p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-1">
              {item.time}
            </p>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-black/70 max-w-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
