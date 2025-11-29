import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 mt-10">
      <div className="max-w-[1600px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-black/60">
        <span>© {new Date().getFullYear()} Partha Saha. All rights reserved.</span>
        <span className="uppercase tracking-[0.25em]">
          Built with React • Framer Motion • Tailwind
        </span>
      </div>
    </footer>
  );
};

export default Footer;
