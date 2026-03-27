import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="inline-block mb-4 px-3 py-1 bg-surface-container-highest rounded text-secondary font-label text-xs tracking-widest uppercase">
          {t.projects.path}
        </div>
        <h2 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter max-w-4xl">
          {t.projects.titlePre} <span className="text-primary italic">{t.projects.titleHighlight}</span>.
        </h2>
        <p className="mt-6 text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          {t.projects.desc}
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {t.projects.items.map((project: any, index: number) => {
          const isFullWidth = project.colSpan === 'md:col-span-8';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${project.colSpan} group relative overflow-hidden bg-surface-container-low rounded-xl border border-outline-variant/20 transition-all duration-300 hover:bg-surface-container-high hover:border-primary/50 hover:shadow-[0_0_30px_rgba(137,195,253,0.15)] flex flex-col`}
            >
              <div className={`${isFullWidth && project.split ? 'md:h-full' : 'h-48 md:h-64'} bg-surface-container-lowest relative overflow-hidden flex-shrink-0`}>
                {project.img ? (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-tertiary/5 flex items-center justify-center p-0">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 group-hover:mix-blend-normal" />
                  </div>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient}`}></div>
                    <div className="p-6 h-full flex items-end">
                      <span className={`material-symbols-outlined text-6xl opacity-30 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 ${project.iconColor}`}>
                        {project.icon}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant font-label text-[10px] rounded uppercase border border-outline-variant/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={`${isFullWidth ? 'text-3xl' : 'text-xl'} font-headline font-bold text-on-surface mb-3`}>
                  {project.title}
                </h3>

                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial="initial"
                      whileHover="hover"
                      className="relative overflow-hidden inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg font-label text-xs font-bold tracking-tight transition-all cursor-pointer shadow-sm group/btn"
                    >
                      <motion.div
                        variants={{
                          initial: { x: "-100%" },
                          hover: { x: "0%" },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-primary/20 z-0"
                      />
                      <div className="relative z-10 flex items-center gap-2">
                        {t.projects.btnVisit} <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-0.5 transition-transform">open_in_new</span>
                      </div>
                    </motion.a>
                  {isFullWidth ? (
                    <div className="flex gap-4">
                      <motion.button 
                        initial="initial"
                        whileHover="hover"
                        className="relative overflow-hidden px-3 py-1 bg-surface-container-highest/30 rounded text-on-surface-variant hover:text-primary font-label text-xs flex items-center gap-1 transition-colors cursor-pointer capitalize"
                      >
                         <motion.div
                          variants={{
                            initial: { x: "-100%" },
                            hover: { x: "0%" },
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-primary/10 z-0"
                        />
                        <div className="relative z-10 flex items-center gap-1">
                          {t.projects.btnGithub} <span className="material-symbols-outlined text-xs">terminal</span>
                        </div>
                      </motion.button>
                    </div>
                  ) : (
                    <motion.button 
                      initial="initial"
                      whileHover="hover"
                      className="relative overflow-hidden px-3 py-1 bg-surface-container-highest/30 rounded text-on-surface-variant hover:text-primary font-label text-xs flex items-center gap-1 transition-colors cursor-pointer capitalize"
                    >
                      <motion.div
                        variants={{
                          initial: { x: "-100%" },
                          hover: { x: "0%" },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-primary/10 z-0"
                      />
                      <div className="relative z-10 flex items-center gap-1">
                        {t.projects.btnLogic} <span className="material-symbols-outlined text-xs">code</span>
                      </div>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mt-24 py-16 px-12 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 border-l-4 border-l-secondary relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8">
          <span className="material-symbols-outlined text-9xl text-white/[0.03]">terminal</span>
        </div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-6 italic">{t.projects.lookingFor}</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            {t.projects.footerPitch}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://wa.me/51934039437"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
              className="relative overflow-hidden bg-primary text-on-primary px-8 py-3 rounded font-label font-bold tracking-tight transition-all cursor-pointer inline-flex items-center justify-center gap-2 group/cta"
            >
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/20 z-0"
              />
              <div className="relative z-10 flex items-center gap-2">
                {t.projects.btnContact}
                <span className="material-symbols-outlined text-sm group-hover/cta:rotate-12 transition-transform">forum</span>
              </div>
            </motion.a>
            <motion.a 
              href="/cv.pdf"
              download
              initial="initial"
              whileHover="hover"
              className="relative overflow-hidden bg-transparent border border-outline-variant text-on-surface px-8 py-3 rounded font-label font-bold tracking-tight transition-all cursor-pointer inline-flex items-center justify-center"
            >
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/5 z-0"
              />
              <div className="relative z-10">
                {t.projects.btnCv}
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
