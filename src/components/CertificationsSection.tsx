import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const colorMap = {
  primary: { text: "text-primary", border: "border-primary/30", bg: "bg-primary/5", hoverBg: "group-hover:bg-primary/20", line: "border-l-2" },
  secondary: { text: "text-secondary", border: "border-secondary/30", bg: "bg-secondary/5", hoverBg: "group-hover:bg-secondary/20", line: "border-l-2" },
  tertiary: { text: "text-tertiary", border: "border-tertiary/30", bg: "bg-tertiary/5", hoverBg: "group-hover:bg-tertiary/20", line: "border-l-2" },
  'outline-variant': { text: "text-on-surface-variant", border: "border-outline-variant/30", bg: "bg-surface-container-highest/20", hoverBg: "group-hover:bg-surface-container-highest/40", line: "border-l-2" }
} as const;

export const CertificationsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full relative overflow-hidden bg-transparent">

      <section className="relative px-8 pt-20 pb-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <span className="font-label text-secondary uppercase tracking-[0.3em] text-xs mb-4 block">{t.certifications.path}</span>
          <h1
            className="font-headline text-6xl md:text-8xl font-black text-on-background tracking-tighter uppercase mb-8"
            style={{ textShadow: '0 1px 0 #004772, 0 2px 0 #004772, 0 3px 0 #004772, 0 10px 20px rgba(0,0,0,0.5)' }}
          >
            {t.certifications.titlePre}<span className="text-primary">.</span>
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl text-lg leading-relaxed">
            {t.certifications.desc}
          </p>
        </motion.div>
      </section>

      <section className="px-8 pb-32 z-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {(t.certifications.items || []).map((cert: any, index: number) => {
            const theme = (colorMap as any)[cert.colorName];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="[transform-style:preserve-3d] transition-transform duration-500 ease-out cursor-default group hover:[transform:rotateY(10deg)_rotateX(5deg)_translateY(-10px)] hover:shadow-[0_20px_40px_rgba(137,195,253,0.15)]"
              >
                <div className={`bg-surface-container-high/60 backdrop-blur-xl p-8 rounded-xl ${theme.line} ${theme.border} relative h-full flex flex-col`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${theme.bg} rounded-bl-full -z-10 transition-colors ${theme.hoverBg}`}></div>

                  <div className="mb-6 flex justify-between items-start">
                    <span className={`material-symbols-outlined ${theme.text} text-5xl`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {cert.icon}
                    </span>
                    <span className="font-label text-[10px] text-on-surface-variant bg-surface-container-lowest px-2 py-1 border border-outline-variant/20 rounded uppercase">
                      ID: {cert.id}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl font-bold text-on-background mb-2 leading-tight">{cert.title}</h3>
                  <div className="font-label text-xs text-secondary mb-6 tracking-wider">{t.certifications.issuerLabel} {cert.issuer}</div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-6 font-label">
                      <span className="material-symbols-outlined text-sm">calendar_today</span>
                      {t.certifications.issuedLabel} {cert.date}
                    </div>
                    <motion.a 
                      href="#"
                      initial="initial"
                      whileHover="hover"
                      className={`relative overflow-hidden flex items-center justify-center gap-2 ${theme.text} bg-surface-container-low border ${theme.border} px-4 py-2 rounded-lg font-label text-sm transition-all group/cert-btn`}
                    >
                      <motion.div
                        variants={{
                          initial: { x: "-100%" },
                          hover: { x: "0%" },
                        }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 ${theme.bg} opacity-100 z-0`}
                        style={{ backgroundColor: theme.bg.includes('primary') ? 'rgba(137, 195, 253, 0.1)' : undefined }}
                      />
                      <div className="relative z-10 flex items-center gap-2">
                        {t.certifications.verifyLabel} <span className="material-symbols-outlined text-sm group-hover/cert-btn:translate-x-1 transition-transform">arrow_forward</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="[transform-style:preserve-3d] transition-all duration-500 ease-out cursor-default group"
          >
            <div className="border-2 border-dashed border-outline-variant/20 p-8 rounded-xl relative h-full flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">add_circle</span>
              <div className="font-headline text-lg font-bold text-outline-variant text-center uppercase tracking-widest">{t.certifications.emptyState.title}</div>
              <div className="font-label text-[10px] text-secondary mt-2">{t.certifications.emptyState.queued}</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
