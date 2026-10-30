import { useState, type ReactNode } from 'react';
import cv from './cv.json';

type Project = { title: string; period: string; description: string; stack: string };
const link = 'transition-colors hover:text-[#06070B] hover:underline hover:decoration-[#F2BC00] hover:decoration-2 hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2BC00]';

function Heading({ id, children }: { id: string; children: ReactNode }) {
  return <div className="mb-5 flex items-center gap-4 border-b border-[#06070B]/10 pb-3 print:mb-2 print:pb-1"><h2 id={id} className="text-[1.05rem] font-bold tracking-tight text-[#06070B] print:text-[11pt]">{children}</h2><div className="h-0.5 w-8 shrink-0 bg-[#F2BC00] print:hidden" /></div>;
}

function FeaturedProject({ project }: { project: Project }) {
  return <article className="break-inside-avoid min-w-0 rounded-xl border border-[#06070B]/10 bg-white p-4 shadow-sm sm:p-5 print:rounded-none print:border-0 print:border-b print:border-[#06070B]/10 print:p-0 print:pb-2 print:shadow-none">
    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1"><h3 className="font-semibold leading-snug text-[#06070B] print:text-[9.5pt]">{project.title}</h3><span className="shrink-0 text-xs text-[#06070B]/60 print:text-[8pt]">{project.period}</span></div>
    <p className="mt-2 text-sm leading-relaxed text-[#06070B]/75 print:mt-1 print:text-[8.5pt] print:leading-snug">{project.description}</p>
    <p className="mt-3 break-words border-l-2 border-[#F2BC00] pl-2 text-xs font-medium leading-relaxed text-[#06070B] print:mt-1 print:text-[8pt]">{project.stack}</p>
  </article>;
}

function EarlierProject({ project }: { project: Project }) {
  return <article className="break-inside-avoid border-b border-[#06070B]/8 py-4 last:border-0 print:py-1.5">
    <div className="flex flex-wrap items-baseline justify-between gap-2"><h4 className="text-sm font-semibold text-[#06070B] print:text-[9pt]">{project.title}</h4><span className="shrink-0 text-xs text-[#06070B]/60 print:text-[8pt]">{project.period}</span></div>
    <p className="mt-1 text-sm leading-relaxed text-[#06070B]/75 print:text-[8.3pt] print:leading-snug">{project.description}</p>
    <p className="mt-1.5 break-words border-l-2 border-[#F2BC00] pl-2 text-xs font-medium leading-relaxed text-[#06070B] print:mt-0.5 print:text-[8pt]">{project.stack}</p>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return <>
    <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#F2BC00] focus:p-3 focus:text-[#06070B]" href="#main">Skip to content</a>
    <header className="sticky top-0 z-20 border-b border-[#06070B]/10 bg-[#F4F5F8]/95 backdrop-blur print:hidden">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <a className={`flex min-w-0 items-center gap-2.5 text-sm font-semibold text-[#06070B] ${link}`} href="#top" aria-label="Alexander Tukaylo — back to top" onClick={() => setMenuOpen(false)}>
          <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#F2BC00] text-xs font-bold text-[#06070B]">AT</span>
          <span className="truncate">{cv.name}</span>
        </a>
        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#06070B]/10 text-[#06070B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2BC00] md:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {menuOpen ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-[#06070B]/75 md:flex" aria-label="Main navigation">
          {navItems.map(item => <a key={item.href} className={link} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="border-t border-[#06070B]/8 bg-white px-4 pb-3 pt-2 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`rounded-lg bg-[#F4F5F8] px-4 py-3 text-sm font-semibold text-[#06070B]/85 ${link}`}>{item.label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
    <main className="mx-auto w-full min-w-0 max-w-5xl bg-[#F4F5F8] px-0 py-0 sm:px-8 sm:py-12 print:max-w-none print:p-0" id="main">
      <div className="min-w-0 overflow-hidden bg-white sm:rounded-2xl sm:border sm:border-[#06070B]/10 shadow-[0_12px_45px_-20px_rgba(6,7,11,.16)] print:overflow-visible print:rounded-none print:border-0 print:shadow-none" id="top">
        <section className="border-b border-[#06070B]/10 bg-gradient-to-br from-[#F4F5F8] via-white to-[#F2BC00]/15 px-4 pb-8 pt-9 min-[380px]:px-5 sm:px-12 sm:pb-12 sm:pt-14 print:bg-white print:px-0 print:pb-3 print:pt-0" aria-labelledby="name">
          <p className="mb-3 inline-block border-l-4 border-[#F2BC00] pl-3 text-xs font-bold uppercase tracking-[.18em] text-[#06070B] print:mb-1 print:text-[8pt]">{cv.tagline}</p>
          <h1 id="name" className="text-[clamp(2rem,8vw,3rem)] leading-[1.1] font-extrabold tracking-tight text-[#06070B] sm:text-5xl print:text-[22pt]">{cv.name}</h1>
          <p className="mt-2 text-lg font-semibold text-[#06070B]/85 sm:text-xl print:mt-1 print:text-[11pt]">{cv.role}</p>
          <p className="mt-5 max-w-3xl text-sm leading-6 sm:text-[15px] sm:leading-7 text-[#06070B]/75 print:mt-2 print:text-[9pt] print:leading-snug">{cv.summary}</p>
          <div className="mt-5 flex min-w-0 flex-col items-start gap-2 text-sm text-[#06070B]/75 sm:flex-row sm:flex-wrap sm:gap-x-5 print:mt-2 print:gap-x-4 print:text-[8.5pt]" aria-label="Contact details">
            <span>{cv.location}</span><a className={`${link} max-w-full break-all sm:break-normal`} href={`mailto:${cv.email}`}>{cv.email}</a><a className={link} href={cv.telegram} target="_blank" rel="noopener noreferrer">t.me/AlexTukaylo</a>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 sm:flex sm:flex-wrap print:hidden">
            <a className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#F2BC00] px-4 py-2.5 text-center text-sm font-semibold text-[#06070B] transition hover:bg-[#E0AE00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2BC00]" href={`mailto:${cv.email}?subject=Frontend%20Developer%20opportunity`}>Get in touch</a>
            <button className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#06070B]/20 bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#06070B] transition hover:bg-[#F4F5F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2BC00]" type="button" onClick={() => window.print()}>Print / Save as PDF</button>
          </div>
        </section>
        <div className="grid gap-5 border-b border-[#06070B]/10 bg-[#F4F5F8] px-4 py-6 min-[380px]:px-5 sm:grid-cols-3 sm:gap-7 sm:px-12 print:grid-cols-3 print:gap-3 print:bg-white print:px-0 print:py-2" aria-label="Professional strengths">
          {cv.strengths.map(x => <div key={x.title}><strong className="block text-xs font-bold uppercase tracking-wide text-[#06070B] print:text-[8pt]">{x.title}</strong><span className="mt-1 block text-sm leading-snug text-[#06070B]/75 print:text-[8pt]">{x.details}</span></div>)}
        </div>
        <div className="space-y-9 px-4 py-8 min-[380px]:px-5 sm:space-y-12 sm:px-12 sm:py-12 print:space-y-4 print:px-0 print:py-2">
          <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24 md:scroll-mt-20"><Heading id="experience-heading">Professional Experience</Heading>
            <div className="space-y-6 print:space-y-2">{cv.experience.map(x => <article className="break-inside-avoid" key={x.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1"><h3 className="font-semibold text-[#06070B] print:text-[9.5pt]">{x.role} <span className="font-medium text-[#06070B]/75">· {x.company}</span></h3><span className="shrink-0 text-xs text-[#06070B]/60 print:text-[8pt]">{x.period}</span></div>
              <p className="mt-1 text-sm text-[#06070B]/60 print:text-[8pt]">{x.subtitle}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#06070B]/75 marker:text-[#06070B]/45 print:mt-1 print:space-y-0 print:text-[8.3pt] print:leading-snug">{x.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </article>)}</div>
          </section>
          <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 md:scroll-mt-20"><Heading id="projects-heading">Selected Projects</Heading>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 print:grid-cols-2 print:gap-x-4 print:gap-y-2">{cv.featuredProjects.map(p => <FeaturedProject key={p.title} project={p} />)}</div>
            <section className="mt-9 print:mt-3" aria-labelledby="additional-projects-heading">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#06070B]/10 pb-3 print:pb-1"><div><h3 id="additional-projects-heading" className="text-base font-bold text-[#06070B] print:text-[10pt]">Additional project experience</h3><p className="mt-1 text-sm text-[#06070B]/60 print:hidden">Earlier products and client work across marketplaces, insurance, e-commerce, and web applications.</p></div><span className="rounded-full bg-[#F4F5F8] px-3 py-1 text-xs font-semibold text-[#06070B]/75 print:hidden">{cv.additionalProjects.length} projects</span></div>
              <div>{cv.additionalProjects.map(p => <EarlierProject key={p.title} project={p} />)}</div>
            </section>
          </section>
          <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 md:scroll-mt-20"><Heading id="skills-heading">Technical Skills</Heading>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 print:grid-cols-2 print:gap-x-5 print:gap-y-2">{cv.skills.map(s => <div key={s.label}><h3 className="text-sm font-bold text-[#06070B] print:text-[8.5pt]">{s.label}</h3><p className="mt-1 text-sm leading-relaxed text-[#06070B]/75 print:mt-0.5 print:text-[8pt] print:leading-snug">{s.items}</p></div>)}</div>
          </section>
          <section id="education" aria-labelledby="education-heading" className="scroll-mt-24 md:scroll-mt-20"><Heading id="education-heading">Education &amp; Languages</Heading>
            <h3 className="text-sm font-bold text-[#06070B] print:text-[9pt]">{cv.education.university}</h3><p className="mt-1 text-sm text-[#06070B]/75 print:text-[8.5pt]">{cv.education.degree}</p><p className="mt-1 text-sm text-[#06070B]/75 print:text-[8.5pt]">Qualification: {cv.education.qualification}</p>
            <p className="mt-3 text-sm text-[#06070B]/75 print:mt-1 print:text-[8.5pt]"><strong className="text-[#06070B]">Languages:</strong> {cv.languages}</p>
          </section>
          <section id="contact" className="scroll-mt-24 rounded-xl border-t-4 border-[#F2BC00] bg-[#06070B] p-5 text-white sm:p-7 print:hidden" aria-labelledby="contact-heading"><h2 id="contact-heading" className="text-xl font-bold">Let's connect</h2><p className="mt-2 text-sm text-white/75">Interested in discussing a frontend engineering opportunity or a complex web product?</p><div className="mt-4 flex min-w-0 flex-col items-start gap-3 text-sm font-semibold sm:flex-row sm:flex-wrap sm:gap-4"><a className="max-w-full break-all hover:underline" href={`mailto:${cv.email}`}>{cv.email}</a><a className="hover:underline" href={cv.telegram} target="_blank" rel="noopener noreferrer">Telegram</a></div></section>
        </div>
      </div>
    </main>
    <footer className="px-4 pb-9 text-center text-xs leading-relaxed text-[#06070B]/60 print:hidden">{cv.name} · {cv.role} · Built with React, TypeScript &amp; Tailwind CSS.</footer>
  </>;
}
