import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface PersonalData {
  label: string;
  value: string;
  colorName: 'secondary' | 'primary' | 'tertiary';
}

interface ContactLink {
  href: string;
  icon: string;
  isImage?: boolean;
  label: string;
  value: string;
  hoverName: 'secondary' | 'primary' | 'tertiary' | 'on-surface';
}

interface TechStat {
  label: string;
  value: string;
  percentage: number;
  colorName: 'primary' | 'secondary' | 'tertiary';
}

const colorMap = {
  primary: { text: "text-primary", border: "border-primary/30", bg: "bg-primary", bgSoft: "bg-primary/20", glow: "border-primary/40" },
  secondary: { text: "text-secondary", border: "border-secondary/30", bg: "bg-secondary", bgSoft: "bg-secondary/20", glow: "border-secondary/40" },
  tertiary: { text: "text-tertiary", border: "border-tertiary/30", bg: "bg-tertiary", bgSoft: "bg-tertiary/20", glow: "border-tertiary/40" },
  'on-surface': { text: "text-on-surface", border: "border-on-surface/30", bg: "bg-on-surface", bgSoft: "bg-on-surface/20", glow: "border-on-surface/40" }
} as const;

export const AboutContactSection: React.FC = () => {
  const { t } = useLanguage();

  const personalData: PersonalData[] = [
    { label: t.about.personal.ageLabel, value: t.about.personal.ageValue, colorName: 'secondary' },
    { label: t.about.personal.geoLabel, value: t.about.personal.geoValue, colorName: 'primary' },
    { label: t.about.personal.roleLabel, value: t.about.personal.roleValue, colorName: 'tertiary' },
    { label: t.about.personal.eduLabel, value: t.about.personal.eduValue, colorName: 'primary' }
  ];

  const contactLinks: ContactLink[] = [
    { href: 'https://github.com/huacre1997', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', isImage: true, label: t.about.contact.githubLabel, value: '/huacre1997', hoverName: 'on-surface' },
    { href: 'https://www.linkedin.com/in/joel-huacre-enciso-060486199/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg', isImage: true, label: t.about.contact.linkedinLabel, value: '/joel-huacre-enciso-060486199', hoverName: 'tertiary' },
    { href: 'mailto:huacreenciso97@gmail.com', icon: 'mail', label: t.about.contact.mailLabel, value: 'huacreenciso97@gmail.com', hoverName: 'primary' },
    { href: 'https://wa.me/934039437', icon: 'forum', label: t.about.contact.whatsappLabel, value: '+51 934039437', hoverName: 'secondary' },
  ];

  const techStats: TechStat[] = [
    { label: t.about.stats.availabilityLabel, value: t.about.stats.availabilityValue, percentage: 80, colorName: 'primary' },
    { label: t.about.stats.latencyLabel, value: t.about.stats.latencyValue, percentage: 100, colorName: 'secondary' },
    { label: t.about.stats.loadLabel, value: t.about.stats.loadValue, percentage: 66, colorName: 'tertiary' }
  ];

  return (
    <section className="w-full relative px-6 md:px-12 lg:px-24 py-24 min-h-screen bg-transparent">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-7xl mx-auto"
      >
        <span className="font-label text-secondary tracking-[0.4em] text-xs uppercase block mb-2">{t.about.path}</span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mt-2">{t.about.title}</h1>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-8 rounded-xl relative overflow-hidden group bg-surface-container-high/60 backdrop-blur-xl border border-outline-variant/30 shadow-lg shadow-primary/5">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-50"></div>
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,39,67,0.02)_50%)] dark:bg-[linear-gradient(to_bottom,transparent_50%,rgba(137,195,253,0.02)_50%)] [background-size:100%_4px]"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="font-label text-[10px] text-primary/60 tracking-widest">{t.about.bio.label}</span>
                <span className="material-symbols-outlined text-primary/40">data_object</span>
              </div>

              <p className="font-body text-lg md:text-xl text-on-surface leading-relaxed mb-6 relative z-10">
                {t.about.bio.textPre}<span className="text-primary font-medium">{t.about.bio.textHighlight}</span>{t.about.bio.textPost}
              </p>

              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-4">
                  <span className="text-secondary font-headline text-sm pt-1">01</span>
                  <p className="text-on-surface-variant font-body">{t.about.bio.points[0]}</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-secondary font-headline text-sm pt-1">02</span>
                  <p className="text-on-surface-variant font-body">{t.about.bio.points[1]}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalData.map((data, idx) => (
                <div key={idx} className={`bg-surface-container-high p-6 rounded-lg border-l ${colorMap[data.colorName].border}`}>
                  <div className="font-label text-[10px] text-on-surface-variant uppercase mb-2 tracking-widest">{data.label}</div>
                  <div className={`font-headline ${data.label === 'Active_Role' ? 'text-lg' : 'text-2xl'} leading-tight ${colorMap[data.colorName].text}`}>{data.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden group bg-surface-container-high/60 backdrop-blur-xl border border-outline-variant/30 shadow-lg shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10"></div>
              <img
                alt="Joel Gilbert Portrait"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="/profile.jpg"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-end">
                  <div className="bg-surface-bright/80 backdrop-blur px-3 py-1 rounded border border-outline-variant/30 font-label text-[10px] text-primary">
                    {t.about.profile.status}
                  </div>
                </div>
                <div>
                  <div className="font-headline text-3xl text-on-surface mb-1">{t.about.profile.name}</div>
                  <div className="font-label text-xs text-secondary tracking-widest">{t.about.profile.role}</div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/40 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-secondary/40 rounded-bl-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-12 mt-6 lg:mt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-outline-variant/20 rounded-xl overflow-hidden bg-surface-container-high/60 backdrop-blur-xl border border-outline-variant/10 shadow-lg shadow-primary/5">
              {contactLinks.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="bg-surface-container-low hover:bg-surface-container-high p-6 flex flex-col items-center justify-center gap-4 transition-all group lg:min-h-[160px]">
                  {link.isImage ? (
                    <img src={link.icon} className={`w-8 h-8 group-hover:scale-110 transition-transform ${link.hoverName === 'on-surface' ? 'dark:invert opacity-80' : ''}`} alt={link.label} />
                  ) : (
                    <span className={`material-symbols-outlined ${colorMap[link.hoverName].text} text-3xl group-hover:scale-110 transition-transform`}>
                      {link.icon}
                    </span>
                  )}
                  <div className="text-center">
                    <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{link.label}</div>
                    <div className="font-headline text-[11px] lg:text-sm text-on-surface break-all">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-between items-center gap-8 py-6 border-y border-outline-variant/10"
        >
          {techStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className={`w-12 h-1 ${colorMap[stat.colorName].bgSoft} rounded-full overflow-hidden`}>
                <div className={`h-full ${colorMap[stat.colorName].bg}`} style={{ width: `${stat.percentage}%` }}></div>
              </div>
              <div>
                <div className="font-label text-[10px] text-on-surface-variant tracking-widest">{stat.label}</div>
                <div className="font-headline text-xs text-on-surface">{stat.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
