import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

const colorMap = {
  primary: { text: "text-primary", bg: "bg-primary", ring: "ring-primary/10" },
  secondary: { text: "text-secondary", bg: "bg-secondary", ring: "ring-secondary/10" },
  tertiary: { text: "text-tertiary", bg: "bg-tertiary", ring: "ring-tertiary/10" }
} as const;

type ColorKey = keyof typeof colorMap;

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const colorKeys: ColorKey[] = ['primary', 'secondary', 'tertiary'];
  const icons = ['terminal', 'cloud_queue', 'settings_input_component'];

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="flex flex-col gap-2">
          <span className="font-label text-secondary text-sm tracking-[0.3em] uppercase">{t.experience.path}</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mt-2">
            {t.experience.titlePre} <span className="text-primary italic">{t.experience.titleHighlight}</span>.
          </h2>
          <p className="max-w-2xl mt-6 text-on-surface-variant font-body leading-relaxed text-lg">
            {t.experience.desc}
          </p>
        </div>
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-0"
      >
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-tertiary opacity-20"></div>

        {t.experience.roles.map((role: any, idx: number) => {
          const isEven = idx % 2 === 0;
          const colorKey = colorKeys[idx % 3];
          const icon = icons[idx % 3];
          const color = colorMap[colorKey];

          if (isEven) {
            return (
              <React.Fragment key={idx}>
                <motion.div variants={itemVariants} className="md:pr-16 md:text-right flex flex-col items-start md:items-end z-10 md:mt-12">
                  <div className="group relative bg-surface-container-low p-8 rounded-xl border border-outline-variant/20 hover:bg-surface-container-high transition-all duration-300 transform hover:-translate-y-1">
                    <span className={`font-label ${color.text} text-sm mb-2 flex items-center md:justify-end gap-2`}>
                      <span className="opacity-70">{role.duration}</span>
                      <span className="text-on-surface-variant/50">•</span>
                      <span>{role.period}</span>
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-1">{role.title}</h3>
                    <div className="flex items-center md:justify-end gap-3 mb-6">
                      <span className="text-on-surface-variant font-body">{role.company}</span>
                      <div className="w-8 h-8 rounded bg-surface-bright flex items-center justify-center p-1.5">
                        <span className={`material-symbols-outlined ${color.text} text-lg`}>{icon}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 text-on-surface-variant font-body text-sm md:text-base mb-6">
                      {role.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-start md:flex-row-reverse gap-3">
                          <span className={`material-symbols-outlined ${color.text} text-sm mt-1`}>code</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {role.techStack && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/20 md:justify-end">
                        {role.techStack.map((tech: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-surface-container-highest text-on-surface-variant font-label text-[10px] rounded uppercase border border-outline-variant/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>

                <div className="hidden md:flex justify-center items-start pt-10 z-10 md:mt-12">
                  <motion.div
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + (idx * 0.1) }}
                    className={`w-4 h-4 rounded-full ${color.bg} border-4 border-surface-dim ring-4 ${color.ring}`}
                  ></motion.div>
                </div>

                <div className="hidden md:block"></div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={idx}>
                <div className="hidden md:block"></div>

                <div className="hidden md:flex justify-center items-start pt-10 z-10 md:mt-12">
                  <motion.div
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + (idx * 0.1) }}
                    className={`w-4 h-4 rounded-full ${color.bg} border-4 border-surface-dim ring-4 ${color.ring}`}
                  ></motion.div>
                </div>

                <motion.div variants={itemVariants} className="md:pl-16 flex flex-col items-start z-10 md:mt-12">
                  <div className="group relative bg-surface-container-low p-8 rounded-xl border border-outline-variant/20 hover:bg-surface-container-high transition-all duration-300 transform hover:-translate-y-1">
                    <span className={`font-label ${color.text} text-sm mb-2 flex items-center gap-2`}>
                      <span>{role.period}</span>
                      <span className="text-on-surface-variant/50">•</span>
                      <span className="opacity-70">{role.duration}</span>
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-1">{role.title}</h3>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded bg-surface-bright flex items-center justify-center p-1.5">
                        <span className={`material-symbols-outlined ${color.text} text-lg`}>{icon}</span>
                      </div>
                      <span className="text-on-surface-variant font-body">{role.company}</span>
                    </div>
                    <ul className="space-y-3 text-on-surface-variant font-body text-sm md:text-base mb-6">
                      {role.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`material-symbols-outlined ${color.text} text-sm mt-1`}>code</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {role.techStack && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/20">
                        {role.techStack.map((tech: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-surface-container-highest text-on-surface-variant font-label text-[10px] rounded uppercase border border-outline-variant/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </React.Fragment>
            );
          }
        })}
      </motion.div>
    </section>
  );
};
