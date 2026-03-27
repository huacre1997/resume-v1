import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'motion/react';

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="font-label text-secondary text-sm tracking-[0.3em] mb-4 uppercase">{t.tech.path}</p>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
          {t.tech.titlePre} <span className="text-primary italic">{t.tech.titleHighlight}</span>.
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-8"></div>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          {t.tech.desc}
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group border border-outline-variant/20 hover:border-primary/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-64 h-64 -rotate-12 blur-[2px]" alt="" />
          </div>
          <h3 className="font-headline text-2xl font-bold text-primary mb-8 flex items-center gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-8 h-8 drop-shadow-lg" alt="Python" />
            {t.tech.corePython}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-6">
              <div className="group/skill">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="w-5 h-5 bg-white/90 rounded-sm p-0.5 shadow-sm" alt="Django" />
                    <span className="font-label text-on-surface">Django</span>
                  </div>
                  <span className="font-label text-secondary text-xs font-bold">100%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: "95%" }} viewport={{ }} transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-container w-[95%]"
                  ></motion.div>
                </div>
              </div>
              <div className="group/skill">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className="w-5 h-5 drop-shadow-sm" alt="FastAPI" />
                    <span className="font-label text-on-surface">FastAPI</span>
                  </div>
                  <span className="font-label text-secondary text-xs font-bold">60%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: "60%" }} viewport={{ }} transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-container w-[95%]"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 content-start">
              {[
                { name: 'Asynchronous IO', color: 'primary' },
                { name: 'Type Hinting', color: 'secondary' },
                { name: 'PyTest', color: 'tertiary' },
                { name: 'Celery', color: 'outline' },
                { name: 'Django Channels', color: 'primary' },
                { name: 'SimpleJWT', color: 'secondary' },
                { name: 'Microservices', color: 'tertiary' },
                { name: 'SQLAlchemy', color: 'primary' }
              ].map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ }} transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 bg-surface-container-highest border border-${skill.color}/20 text-${skill.color} font-label font-bold text-xs rounded-lg hover:bg-${skill.color} hover:text-surface-lowest transition-all cursor-default shadow-sm`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-4 bg-surface-container-high rounded-xl p-8 relative flex flex-col justify-between border border-outline-variant/20 hover:border-tertiary/50 transition-colors"
        >
          <div>
            <h3 className="font-headline text-2xl font-bold text-tertiary mb-6 flex items-center gap-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-12 h-10 object-contain bg-white/90 rounded px-1" alt="AWS" />
              {t.tech.infraCloud}
            </h3>
            <ul className="space-y-5 font-label text-on-surface-variant mt-8">
              <li className="flex items-center gap-4 group/li">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-7 h-7 bg-white/90 rounded p-1 shadow-sm group-hover/li:scale-110 transition-transform" />
                <span className="group-hover/li:text-on-surface transition-colors">AWS (EC2, Lambda, RDS)</span>
              </li>
              <li className="flex items-center gap-4 group/li">
                <div className="flex -space-x-2 group-hover/li:scale-110 transition-transform">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-7 h-7 relative z-10 drop-shadow-md" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" className="w-7 h-7 relative z-0 opacity-90 drop-shadow-md" />
                </div>
                <span className="group-hover/li:text-on-surface transition-colors">Docker / Kubernetes</span>
              </li>
              <li className="flex items-center gap-4 group/li text-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" className="w-7 h-7 group-hover/li:scale-110 transition-transform" />
                <span className="group-hover/li:text-on-surface transition-colors">GCP</span>
              </li>
              <li className="flex items-center gap-4 group/li text-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" className="w-7 h-7 group-hover/li:scale-110 transition-transform" />
                <span className="group-hover/li:text-on-surface transition-colors">Azure (Role Based Access Control)</span>
              </li>
            </ul>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-5 bg-surface-container-low rounded-xl p-8 border border-outline-variant/20 hover:border-secondary/50 transition-colors"
        >
          <h3 className="font-headline text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">database</span>
            {t.tech.databases}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-highest rounded-lg border-l-4 border-[#336791] hover:bg-surface-variant transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <p className="font-headline font-bold text-on-surface text-sm">PostgreSQL</p>
              </div>
              <p className="text-xs font-label text-on-surface-variant">{t.tech.relational}</p>
            </div>
            <div className="p-4 bg-surface-container-highest rounded-lg border-l-4 border-[#47A248] hover:bg-surface-variant transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <p className="font-headline font-bold text-on-surface text-sm">Mysql</p>
              </div>
              <p className="text-xs font-label text-on-surface-variant">{t.tech.relational}</p>
            </div>
            <div className="p-4 bg-surface-container-highest rounded-lg border-l-4 border-[#47A248] hover:bg-surface-variant transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <p className="font-headline font-bold text-on-surface text-sm">DynamoDB</p>
              </div>
              <p className="text-xs font-label text-on-surface-variant">{t.tech.nosql}</p>
            </div>
            <div className="p-4 bg-surface-container-highest rounded-lg border-l-4 border-[#DC382D] hover:bg-surface-variant transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <p className="font-headline font-bold text-on-surface text-sm">Redis</p>
              </div>
              <p className="text-xs font-label text-on-surface-variant">{t.tech.caching}</p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-7 rounded-xl p-8 border border-outline-variant/20 hover:border-primary/30 transition-colors"
          style={{ backdropFilter: 'blur(12px)', background: isDark ? 'rgba(32, 38, 47, 0.4)' : 'rgba(255, 255, 255, 0.4)' }}
        >
          <div className="flex justify-between items-start mb-8">
            <h3 className="font-headline text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">settings_suggest</span>
              {t.tech.tools}
            </h3>
            <div className="px-3 py-1 bg-secondary-container text-secondary rounded text-[10px] font-bold uppercase tracking-widest border border-secondary/20">
              Standardized
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex-1 min-w-[200px]">
              <p className="font-label text-xs text-primary mb-4 uppercase tracking-widest font-bold">// CONTINUOUS DELIVERY</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all shadow-sm">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className={`w-7 h-7 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all ${isDark ? 'invert' : ''}`} alt="GitHub" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface group-hover:text-primary transition-colors text-sm">GitHub Actions</p>
                    <p className="text-xs text-on-surface-variant font-label">Automated Workflows</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <p className="font-label text-xs text-secondary mb-4 uppercase tracking-widest font-bold">// METHODOLOGY</p>
              <div className="space-y-5 mt-6">
                <div className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors cursor-default group">
                  <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">check_circle</span>
                  <span className="font-label font-medium text-sm">Agile / Scrum Mastery</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors cursor-default group">
                  <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">check_circle</span>
                  <span className="font-label font-medium text-sm">Git Flow </span>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-12 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group border border-outline-variant/20 hover:border-secondary/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-64 h-64 -rotate-12 blur-[2px]" alt="" />
          </div>
          <h3 className="font-headline text-2xl font-bold text-secondary mb-8 flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-3xl">terminal</span>
            {t.tech.frontendEcosystem}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 group/skill border border-outline-variant/20 bg-surface-container-highest/20 p-6 rounded-xl hover:bg-surface-container-highest/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-8 h-8 drop-shadow-md" alt="ReactJS" />
                  <span className="font-label text-on-surface font-bold text-lg">ReactJS</span>
                </div>
                <span className="font-label text-[#61DAFB] text-sm font-bold">80%</span>
              </div>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: "80%" }} viewport={{ }} transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-secondary to-[#61DAFB] w-[80%] rounded-full shadow-[0_0_10px_rgba(97,218,251,0.3)]"
                ></motion.div>
              </div>
            </div>

            <div className="space-y-4 group/skill border border-outline-variant/20 bg-surface-container-highest/20 p-6 rounded-xl hover:bg-surface-container-highest/40 transition-colors relative overflow-hidden">
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-primary/20 text-primary rounded text-[9px] font-bold uppercase tracking-widest border border-primary/20">
                {t.tech.learningStatus}
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" className="w-8 h-8 drop-shadow-md" alt="NestJS" />
                  <span className="font-label text-on-surface font-bold text-lg">NestJS</span>
                </div>
                <span className="font-label text-[#E0234E] text-sm font-bold">25%</span>
              </div>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: "25%" }} viewport={{ }} transition={{ duration: 1, delay: 0.4 }}
                  className="h-full bg-gradient-to-r from-primary to-[#E0234E] w-[25%] rounded-full shadow-[0_0_10px_rgba(224,35,78,0.3)]"
                ></motion.div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 relative z-10">
            {[
              { name: 'Redux Toolkit', color: 'secondary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
              { name: 'React Query', color: 'primary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
              { name: 'React Router', color: 'tertiary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
              { name: 'Tailwind CSS', color: 'primary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
              { name: 'Framer Motion', color: 'secondary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg' },
              { name: 'Material UI', color: 'tertiary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
              { name: 'Bootstrap', color: 'secondary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' }
            ].map((chip, idx) => (
              <motion.div
                key={chip.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                className={`flex items-center gap-2 px-4 py-2 bg-surface-container-highest/60 border border-${chip.color}/20 rounded-lg hover:border-${chip.color}/50 hover:bg-surface-container-highest transition-all group cursor-default`}
              >
                <img src={chip.icon} className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" alt={chip.name} />
                <span className={`font-label font-bold text-xs text-${chip.color} group-hover:text-on-surface transition-colors`}>{chip.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
