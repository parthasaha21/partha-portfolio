import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
          Let’s work
          <br />
          <span className="text-[#FF3300]">together</span>
        </h2>
        <p className="text-sm text-black/70 mb-6">
          Available for freelance projects, Webflow builds and creative front-end
          collaborations.
        </p>

        <a
          href="mailto:parthasaha@example.com"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-xs uppercase tracking-[0.25em]"
        >
          Email me
        </a>
      </div>
    </section>
  );
};

export default Contact;
