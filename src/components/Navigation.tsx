import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export const Navigation: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState('home');

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = ['home', 'about', 'projects', 'experience', 'skills', 'certifications', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-dim/60 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_rgba(55,118,171,0.08)] flex justify-between items-center px-6 md:px-8 py-4 max-w-full font-space-grotesk font-medium tracking-tight">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-on-surface hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`transition-all duration-200 px-2 py-1 ${activeSection === link.id
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-bright rounded"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
          className="text-slate-400 hover:text-white font-label font-bold text-sm w-8 cursor-pointer transition-colors"
          title="Toggle Language"
        >
          {lang === 'EN' ? 'ES' : 'EN'}
        </button>

        <button
          onClick={toggleTheme}
          className="text-slate-400 hover:text-white cursor-pointer transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/5"
          title="Toggle Theme"
        >
          <span className="material-symbols-outlined text-xl">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <button className="hidden sm:block bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-label text-sm font-bold active:scale-95 transition-all duration-200 hover:shadow-[0_0_15px_rgba(245,203,49,0.3)] cursor-pointer">
          {t.nav.source}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73.5px] bg-surface-dim/100 backdrop-blur-3xl z-40 md:hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-2xl font-headline font-bold py-4 border-b border-outline-variant/20 flex items-center justify-between ${activeSection === link.id ? "text-primary" : "text-on-surface"
                  }`}
              >
                {link.label}
                <span className="material-symbols-outlined opacity-30">chevron_right</span>
              </a>
            ))}
            <div className="mt-8">
              <button className="w-full bg-primary-container text-on-primary-container px-6 py-4 rounded-xl font-label text-md font-bold active:scale-95 transition-all duration-200">
                {t.nav.source}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
