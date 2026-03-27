import React, { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const terminalRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 10, y: -15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 10, y: -15 });
  };

  return (
    <main className="relative min-h-[90vh] pt-20 overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(137, 195, 253, 0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <section className="max-w-7xl mx-auto px-8 py-12 md:py-24 flex flex-col md:flex-row gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 flex flex-col justify-center"
        >
          <div className="space-y-2">
            <span className="font-label text-secondary text-sm font-bold tracking-[0.2em] uppercase">{t.hero.role}</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background leading-[0.9]">
              {t.hero.titlePre} <span className="text-primary">{t.hero.titleHighlight}</span> <br />{t.hero.titlePost}
            </h1>
          </div>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            {t.hero.descPre} <span className="text-on-surface">{t.hero.descHighlight}</span>{t.hero.descPost}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-md font-label font-bold flex items-center gap-2 hover:bg-primary transition-all active:scale-95 group cursor-pointer shadow-[0_10px_20px_rgba(137,195,253,0.15)] hover:shadow-[0_15px_30px_rgba(137,195,253,0.3)]">
              {t.hero.btnProjects}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <a
              href="/cv.pdf"
              download
              className="border border-outline-variant text-tertiary px-8 py-4 rounded-md font-label font-bold hover:bg-surface-variant transition-all active:scale-95 flex items-center gap-2 cursor-pointer bg-surface-dim/30 backdrop-blur-sm shadow-sm"
            >
              <span className="material-symbols-outlined">download</span>
              {t.hero.btnResume}
            </a>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border-l-4 border-[#092E20] group hover:bg-[#092E20]/20 transition-all duration-300 flex items-center gap-4" style={{ backdropFilter: 'blur(12px)', background: 'rgba(32, 38, 47, 0.4)' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all invert" alt="Django" />
              <div>
                <div className="font-label text-[10px] text-on-surface-variant group-hover:text-primary mb-1 uppercase tracking-widest">{t.hero.framework}</div>
                <div className="font-headline text-md font-bold text-on-surface">Django</div>
              </div>
            </div>
            <div className="p-4 rounded-xl border-l-4 border-[#009688] group hover:bg-[#009688]/20 transition-all duration-300 flex items-center gap-4" style={{ backdropFilter: 'blur(12px)', background: 'rgba(32, 38, 47, 0.4)' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" alt="FastAPI" />
              <div>
                <div className="font-label text-[10px] text-on-surface-variant group-hover:text-primary mb-1 uppercase tracking-widest">{t.hero.fastIO}</div>
                <div className="font-headline text-md font-bold text-on-surface">FastAPI</div>
              </div>
            </div>
            <div className="p-4 rounded-xl border-l-4 border-tertiary group hover:bg-tertiary/10 transition-all duration-300 flex items-center gap-4" style={{ backdropFilter: 'blur(12px)', background: 'rgba(32, 38, 47, 0.4)' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all bg-white/90 rounded p-1 object-cover" alt="AWS" />
              <div>
                <div className="font-label text-[10px] text-on-surface-variant group-hover:text-primary mb-1 uppercase tracking-widest">{t.hero.cloud}</div>
                <div className="font-headline text-md font-bold text-on-surface">AWS</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 hidden md:flex items-center justify-center mt-12 md:mt-0" style={{ perspective: '1200px' }}
        >
          <div
            ref={terminalRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full bg-surface-container-lowest rounded-xl border border-white/5 relative group transition-all duration-200 ease-out z-20"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(40px)`,
              boxShadow: 'rgba(0, 0, 0, 0.4) -30px 30px 60px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="bg-surface-variant px-4 py-3 flex items-center justify-between border-b border-white/5 rounded-t-xl" style={{ transform: 'translateZ(10px)' }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error/70 shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/70 shadow-[0_0_8px_rgba(245,203,49,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(137,195,253,0.5)]"></div>
              </div>
              <div className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase">system_controller.py</div>
              <div className="w-8"></div>
            </div>

            <div className="p-8 font-label text-sm leading-relaxed overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
              <div className="flex gap-4">
                <span className="text-outline text-right w-6 shrink-0 select-none">01</span>
                <span className="text-tertiary">import</span>
                <span className="text-on-surface">asyncio</span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline text-right w-6 shrink-0 select-none">02</span>
                <span className="text-tertiary">from</span>
                <span className="text-on-surface">fastapi</span>
                <span className="text-tertiary">import</span>
                <span className="text-on-surface">FastAPI</span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline text-right w-6 shrink-0 select-none">03</span>
                <span></span>
              </div>
              <div className="flex gap-4">
                <span className="text-outline text-right w-6 shrink-0 select-none">04</span>
                <span className="text-secondary">class</span>
                <span className="text-primary-dim">ScalableArchitecture</span>:
              </div>
              <div className="flex gap-4">
                <span className="text-outline text-right w-6 shrink-0 select-none">05</span>
                <span className="ml-4 text-tertiary">async def</span>
                <span className="text-primary-dim">process_data</span>(self, payload: dict):
              </div>
              <div className="flex gap-4">
                <span className="text-outline text-right w-6 shrink-0 select-none">06</span>
                <span className="ml-8 text-on-surface-variant"># ⚠️ DO NOT TOUCH
                </span>
              </div>

              <div className="flex gap-4">
                <span className="text-outline text-right w-6 shrink-0 select-none">07</span>
                <span className="ml-8 text-secondary">return await</span>
                <span className="text-on-surface">self.cluster.distribute(payload)</span>
              </div>
              <div className="flex gap-4 pt-8">
                <span className="text-outline text-right w-6 shrink-0 select-none">08</span>
                <span className="text-primary-dim"># Real-time System Metrics</span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-on-surface-variant w-24">LATENCY</span>
                  <div className="flex-1 h-1 bg-background rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-secondary w-1/4 shadow-[0_0_10px_rgba(245,203,49,0.8)]"></div>
                  </div>
                  <span className="text-xs text-secondary font-bold">12ms</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-on-surface-variant w-24">UPTIME</span>
                  <div className="flex-1 h-1 bg-background rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-primary w-[99.9%] shadow-[0_0_10px_rgba(137,195,253,0.8)]"></div>
                  </div>
                  <span className="text-xs text-primary font-bold">99.9%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-on-surface-variant w-24">TRAFFIC</span>
                  <div className="flex-1 h-1 bg-background rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-tertiary w-2/3 shadow-[0_0_10px_rgba(193,128,255,0.8)]"></div>
                  </div>
                  <span className="text-xs text-tertiary font-bold">2.4k req/s</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 border border-white/10 p-4 rounded-lg shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-surface-bright/80 backdrop-blur-md" style={{ transform: 'translateZ(30px)' }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(137,195,253,0.8)]"></div>
                <span className="text-[10px] font-label text-primary uppercase font-bold tracking-widest">{t.hero.systemStatus}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-12 bg-surface-container-low border-y border-white/5 py-8 overflow-hidden relative z-0"
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
          {[
            { img: 'postgresql/postgresql-original.svg', label: 'PostgreSQL' },
            { img: 'docker/docker-original.svg', label: 'Docker' },
            { img: 'redis/redis-original.svg', label: 'Redis' },
            { img: 'kubernetes/kubernetes-plain.svg', label: 'Kubernetes' },
            { img: 'graphql/graphql-plain.svg', label: 'GraphQL' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-4 grayscale group-hover:grayscale-0 hover:grayscale-0 transition-all cursor-default group">
              <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${s.img}`} className="w-8 h-8 group-hover:scale-110 transition-transform drop-shadow-md" alt={s.label} />
              <span className="font-headline font-bold text-lg text-on-surface-variant group-hover:text-on-surface transition-colors">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};
