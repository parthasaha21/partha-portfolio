import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/30 py-6 px-6 text-center text-xs font-mono uppercase tracking-widest">
      <p>Partha Saha © {new Date().getFullYear()} • Brutalist Edition</p>
    </footer>
  );
};

export default Footer;