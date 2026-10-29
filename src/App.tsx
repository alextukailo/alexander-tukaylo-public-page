import type { ReactNode } from 'react';
import cv from './cv.json';

type Project = { title: string; period: string; description: string; stack: string };
const link = 'transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600';

function Heading({ id, children }: { id: string; children: ReactNode }) {
  return <div className="mb-5 flex items-center gap-4 border-b border-slate-200 pb-3 print:mb-2 print:pb-1"><h2 id={id} className="text-[1.05rem] font-bold tracking-tight text-slate-950 print:text-[11pt]">{children}</h2><div className="h-px flex-1 bg-slate-100 print:hidden" /></div>;
}

function FeaturedProject({ project }: { project: Project }) {
  return <article className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-5 shadow-sm print:rounded-none print:border-0 print:border-b print:border-slate-200 print:p-0 print:pb-2 print:shadow-none">
    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1"><h3 className="font-semibold leading-snug text-slate-950 print:text-[9.5pt]">{project.title}</h3><span className="text-xs text-slate-500 print:text-[8pt]">{project.period}</span></div>
    <p className="mt-2 text-sm leading-relaxed text-slate-600 print:mt-1 print:text-[8.5pt] print:leading-snug">{project.description}</p>
    <p className="mt-3 text-xs font-medium leading-relaxed text-blue-800 print:mt-1 print:text-[8pt]">{project.stack}</p>
  </article>;
}

function EarlierProject({ project }: { project: Project }) {
  return <article className="break-inside-avoid border-b border-slate-100 py-4 last:border-0 print:py-1.5">
    <div className="flex flex-wrap items-baseline justify-between gap-2"><h4 className="text-sm font-semibold text-slate-950 print:text-[9pt]">{project.title}</h4><span className="text-xs text-slate-500 print:text-[8pt]">{project.period}</span></div>
    <p className="mt-1 text-sm leading-relaxed text-slate-600 print:text-[8.3pt] print:leading-snug">{project.description}</p>
    <p className="mt-1.5 text-xs font-medium leading-relaxed text-blue-800 print:mt-0.5 print:text-[8pt]">{project.stack}</p>
  </article>;
}

export default function App() {
  return <>
    <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:p-3 focus:text-blue-800" href="#main">Skip to content</a>
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a className={`flex items-center gap-2.5 text-sm font-semibold text-slate-900 ${link}`} href="#top" aria-label="Alexander Tukaylo — back to top"><span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-slate-900 text-xs font-bold text-white">AT</span>{cv.name}</a>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 sm:text-sm" aria-label="Main navigation">
          <a className={link} href="#experience">Experience</a><a className={link} href="#projects">Projects</a><a className={link} href="#skills">Skills</a><a className={link} href="#contact">Contact</a>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-5xl px-3 py-7 sm:px-8 sm:py-12 print:max-w-none print:p-0" id="main">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_45px_-20px_rgba(15,23,42,.16)] print:overflow-visible print:rounded-none print:border-0 print:shadow-none" id="top">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 pb-9 pt-10 sm:px-12 sm:pb-12 sm:pt-14 print:bg-white print:px-0 print:pb-3 print:pt-0" aria-labelledby="name">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-blue-700 print:mb-1 print:text-[8pt]">{cv.tagline}</p>
          <h1 id="name" className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl print:text-[22pt]">{cv.name}</h1>
          <p className="mt-2 text-lg font-semibold text-slate-700 sm:text-xl print:mt-1 print:text-[11pt]">{cv.role}</p>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-slate-600 print:mt-2 print:text-[9pt] print:leading-snug">{cv.summary}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600 print:mt-2 print:gap-x-4 print:text-[8.5pt]" aria-label="Contact details">
            <span>{cv.location}</span><a className={link} href={`mailto:${cv.email}`}>{cv.email}</a><a className={link} href={cv.telegram} target="_blank" rel="noopener noreferrer">t.me/AlexTukaylo</a>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 print:hidden">
            <a className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" href={`mailto:${cv.email}?subject=Frontend%20Developer%20opportunity`}>Get in touch</a>
            <button className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" type="button" onClick={() => window.print()}>Print / Save as PDF</button>
          </div>
        </section>
        <div className="grid gap-4 border-b border-slate-200 bg-slate-50 px-6 py-6 sm:grid-cols-3 sm:gap-7 sm:px-12 print:grid-cols-3 print:gap-3 print:bg-white print:px-0 print:py-2" aria-label="Professional strengths">
          {cv.strengths.map(x => <div key={x.title}><strong className="block text-xs font-bold uppercase tracking-wide text-slate-900 print:text-[8pt]">{x.title}</strong><span className="mt-1 block text-sm leading-snug text-slate-600 print:text-[8pt]">{x.details}</span></div>)}
        </div>
        <div className="space-y-10 px-6 py-9 sm:space-y-12 sm:px-12 sm:py-12 print:space-y-4 print:px-0 print:py-2">
          <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24"><Heading id="experience-heading">Professional Experience</Heading>
            <div className="space-y-6 print:space-y-2">{cv.experience.map(x => <article className="break-inside-avoid" key={x.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1"><h3 className="font-semibold text-slate-950 print:text-[9.5pt]">{x.role} <span className="font-medium text-slate-600">· {x.company}</span></h3><span className="text-xs text-slate-500 print:text-[8pt]">{x.period}</span></div>
              <p className="mt-1 text-sm text-slate-500 print:text-[8pt]">{x.subtitle}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 marker:text-slate-400 print:mt-1 print:space-y-0 print:text-[8.3pt] print:leading-snug">{x.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </article>)}</div>
          </section>
          <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24"><Heading id="projects-heading">Selected Projects</Heading>
            <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2 print:gap-x-4 print:gap-y-2">{cv.featuredProjects.map(p => <FeaturedProject key={p.title} project={p} />)}</div>
            <section className="mt-9 print:mt-3" aria-labelledby="additional-projects-heading">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-3 print:pb-1"><div><h3 id="additional-projects-heading" className="text-base font-bold text-slate-900 print:text-[10pt]">Additional project experience</h3><p className="mt-1 text-sm text-slate-500 print:hidden">Earlier products and client work across marketplaces, insurance, e-commerce, and web applications.</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 print:hidden">{cv.additionalProjects.length} projects</span></div>
              <div>{cv.additionalProjects.map(p => <EarlierProject key={p.title} project={p} />)}</div>
            </section>
          </section>
          <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24"><Heading id="skills-heading">Technical Skills</Heading>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 print:grid-cols-2 print:gap-x-5 print:gap-y-2">{cv.skills.map(s => <div key={s.label}><h3 className="text-sm font-bold text-slate-900 print:text-[8.5pt]">{s.label}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600 print:mt-0.5 print:text-[8pt] print:leading-snug">{s.items}</p></div>)}</div>
          </section>
          <section id="education" aria-labelledby="education-heading" className="scroll-mt-24"><Heading id="education-heading">Education &amp; Languages</Heading>
            <h3 className="text-sm font-bold text-slate-900 print:text-[9pt]">{cv.education.university}</h3><p className="mt-1 text-sm text-slate-600 print:text-[8.5pt]">{cv.education.degree}</p><p className="mt-1 text-sm text-slate-600 print:text-[8.5pt]">Qualification: {cv.education.qualification}</p>
            <p className="mt-3 text-sm text-slate-600 print:mt-1 print:text-[8.5pt]"><strong className="text-slate-900">Languages:</strong> {cv.languages}</p>
          </section>
          <section id="contact" className="scroll-mt-24 rounded-xl bg-slate-900 p-7 text-white print:hidden" aria-labelledby="contact-heading"><h2 id="contact-heading" className="text-xl font-bold">Let's connect</h2><p className="mt-2 text-sm text-slate-300">Interested in discussing a frontend engineering opportunity or a complex web product?</p><div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold"><a className="hover:underline" href={`mailto:${cv.email}`}>{cv.email}</a><a className="hover:underline" href={cv.telegram} target="_blank" rel="noopener noreferrer">Telegram</a></div></section>
        </div>
      </div>
    </main>
    <footer className="pb-9 text-center text-xs text-slate-500 print:hidden">{cv.name} · {cv.role} · Built with React, TypeScript &amp; Tailwind CSS.</footer>
  </>;
}
