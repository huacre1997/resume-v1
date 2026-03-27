import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0a0e14] w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 font-space-grotesk text-xs uppercase tracking-widest bg-surface-container-low">
      <div className="text-slate-500">
        {t.footer.copy}
      </div>
      <div className="flex gap-8">
        <a className="text-slate-500 hover:text-[#89c3fd] transition-colors opacity-80 hover:opacity-100" href="https://github.com/huacre1997" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="text-slate-500 hover:text-[#89c3fd] transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/joel-huacre-enciso-060486199/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="text-[#f5cb31] font-bold">
        {t.footer.status}
      </div>
    </footer>
  );
};
