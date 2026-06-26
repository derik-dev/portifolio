'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '3+', label: 'Produtos lançados' },
  { value: '100%', label: 'Deploy na Vercel' },
  { value: 'IA', label: 'Em cada projeto' },
]

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: { trigger: leftRef.current, start: 'top 80%' },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from(rightRef.current, {
        scrollTrigger: { trigger: rightRef.current, start: 'top 80%' },
        x: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={s.section} className="res-px">
      <div style={s.inner} className="about-grid">
        {/* Left column */}
        <div ref={leftRef} style={s.left}>
          <p style={s.label}>SOBRE</p>
          <h2 style={s.heading}>
            Desenvolvo produtos que funcionam — e que os clientes orgulham de mostrar.
          </h2>
          <div style={s.divider} />
          <div style={s.stats}>
            {stats.map((stat) => (
              <div key={stat.value} style={s.stat}>
                <span style={s.statValue}>{stat.value}</span>
                <span style={s.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div ref={rightRef} style={s.right}>
          <p style={s.paragraph}>
            Sou Derik, desenvolvedor fullstack de Três Rios, RJ.
            Trabalho na interseção entre produto, design e engenharia —
            construindo sistemas com Next.js, Supabase e IA que realmente entregam resultado.
          </p>
          <p style={s.paragraph}>
            Meu processo é direto: do briefing ao deploy,
            com foco em performance, conversão e código que escala.
          </p>
        </div>
      </div>
    </section>
  )
}

const s: Record<string, React.CSSProperties> = {
  section: {
    padding: '140px 48px',
  },
  inner: {
    maxWidth: 1000,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    gap: 80,
  },
  left: {},
  label: {
    fontFamily: 'var(--font-inter)',
    fontSize: 11,
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.2)',
    marginBottom: 24,
  },
  heading: {
    fontFamily: 'var(--font-syne)',
    fontSize: 40,
    fontWeight: 700,
    color: '#ffffff',
    lineHeight: 1.2,
    margin: 0,
  },
  divider: {
    height: 1,
    background: 'rgba(255,255,255,0.06)',
    margin: '32px 0',
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statValue: {
    fontFamily: 'var(--font-syne)',
    fontSize: 36,
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: 'var(--font-inter)',
    fontSize: 12,
    color: 'rgba(255,255,255,0.3)',
    letterSpacing: '0.05em',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
  },
  paragraph: {
    fontFamily: 'var(--font-inter)',
    fontSize: 15,
    color: 'rgba(255,255,255,0.45)',
    lineHeight: 1.85,
    margin: 0,
  },
}
