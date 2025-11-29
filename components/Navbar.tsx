import React from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#arsenal" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#F0F0F0]/80 backdrop-blur border-b border-black/5">
      <nav className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold tracking-tight text-lg">
          Partha <span className="text-[#FF3300]">Saha</span>
        </span>

        <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em]">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-[#FF3300] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile just simple button, you can improve later */}
        <a
          href="#contact"
          className="md:hidden text-xs uppercase tracking-[0.25em] border px-3 py-1 rounded-full border-black/20"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
