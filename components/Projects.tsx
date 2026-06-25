'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    tag: 'SAAS · PSICOLOGIA',
    title: 'PsiCoach AI',
    description:
      'Plataforma de supervisão clínica com IA para psicólogos. Análise de casos, memória de pacientes e transcrição automática de sessões.',
    stack: ['Next.js', 'Supabase', 'Groq', 'Whisper'],
  },
  {
    tag: 'E-COMMERCE · TEMPLATE',
    title: 'VERO',
    description:
      'Template de e-commerce fullstack com admin panel, IA para busca natural, recomendações e assistente de atendimento VERA.',
    stack: ['Next.js', 'Supabase', 'Groq'],
  },
  {
    tag: 'LANDING PAGE · CONVERSÃO',
    title: 'Tikura',
    description:
      'Landing page para marca holística com foco em alta conversão. Estética dark, blocos otimizados e copy orientada a sentimento.',
    stack: ['HTML', 'CSS', 'JS'],
    full: true,
  },
]

export default function Projects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 85%' },
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: i * 0.15,
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={s.section} className="res-px">
      <div style={s.inner}>
        <p style={s.label}>TRABALHOS SELECIONADOS</p>

        <div style={s.grid} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              ref={(el) => { cardsRef.current[i] = el }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { forwardRef, useState } from 'react'

type Project = {
  tag: string
  title: string
  description: string
  stack: string[]
  full?: boolean
}

const ProjectCard = forwardRef<HTMLDivElement, { project: Project }>(
  ({ project }, ref) => {
    const [hovered, setHovered] = useState(false)
    const [arrowHovered, setArrowHovered] = useState(false)

    return (
      <div
        ref={ref}
        style={{
          ...s.card,
          gridColumn: project.full ? '1 / -1' : undefined,
          borderColor: hovered ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.06)',
          background: hovered ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.02)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p style={s.tag}>{project.tag}</p>
        <h3 style={s.title}>{project.title}</h3>
        <p style={s.description}>{project.description}</p>

        <div style={s.footer}>
          <div style={s.stack}>
            {project.stack.map((tech) => (
              <span key={tech} style={s.pill}>{tech}</span>
            ))}
          </div>
          <span
            style={{ ...s.arrow, color: arrowHovered ? '#ffffff' : 'rgba(255,255,255,0.2)' }}
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
          >
            ↗
          </span>
        </div>
      </div>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'

const s: Record<string, React.CSSProperties> = {
  section: {
    padding: '140px 48px',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  label: {
    fontFamily: 'var(--font-inter)',
    fontSize: 11,
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.2)',
    marginBottom: 64,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
  card: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 36,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'border-color 0.4s ease, background 0.4s ease, transform 0.4s ease',
  },
  tag: {
    fontFamily: 'var(--font-inter)',
    fontSize: 10,
    letterSpacing: '0.12em',
    color: '#3b82f6',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'var(--font-syne)',
    fontSize: 22,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'var(--font-inter)',
    fontSize: 14,
    color: 'rgba(255,255,255,0.35)',
    lineHeight: 1.7,
    marginBottom: 28,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stack: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
  },
  pill: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 99,
    fontSize: 11,
    color: 'rgba(255,255,255,0.3)',
    padding: '4px 10px',
    fontFamily: 'var(--font-inter)',
  },
  arrow: {
    fontSize: 18,
    transition: 'color 0.2s ease',
    lineHeight: 1,
  },
}
