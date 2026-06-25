'use client'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const [btnHovered, setBtnHovered] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([labelRef.current, headingRef.current, subtitleRef.current, btnRef.current], {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={s.section} className="res-px">
      <p ref={labelRef} style={s.label}>VAMOS TRABALHAR JUNTOS</p>

      <h2 ref={headingRef} style={s.heading}>Tem um projeto em mente?</h2>

      <p ref={subtitleRef} style={s.subtitle}>
        Me manda uma mensagem. Respondo em menos de 24h.
      </p>

      <button
        ref={btnRef}
        style={{
          ...s.btn,
          background: btnHovered ? '#2563eb' : '#3b82f6',
          transform: btnHovered ? 'scale(1.02)' : 'scale(1)',
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        onClick={() => { window.location.href = 'mailto:derikgomesfilho@gmail.com' }}
      >
        Entrar em contato →
      </button>

      <div style={s.socials}>
        <SocialLink href="https://github.com/derikgomesfilho" label="GitHub" />
        <SocialLink href="https://linkedin.com/in/derikgomes" label="LinkedIn" />
      </div>
    </section>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...s.social,
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.25)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

const s: Record<string, React.CSSProperties> = {
  section: {
    padding: '140px 48px',
    textAlign: 'center',
  },
  label: {
    fontFamily: 'var(--font-inter)',
    fontSize: 11,
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.2)',
    marginBottom: 24,
  },
  heading: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(40px, 5vw, 64px)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    margin: 0,
  },
  subtitle: {
    fontFamily: 'var(--font-inter)',
    fontSize: 16,
    color: 'rgba(255,255,255,0.3)',
    marginTop: 16,
  },
  btn: {
    display: 'inline-block',
    marginTop: 48,
    color: '#ffffff',
    fontFamily: 'var(--font-inter)',
    fontWeight: 600,
    fontSize: 16,
    padding: '16px 40px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s ease, transform 0.2s ease',
  },
  socials: {
    marginTop: 32,
    display: 'flex',
    gap: 24,
    justifyContent: 'center',
  },
  social: {
    fontFamily: 'var(--font-inter)',
    fontSize: 13,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
}
