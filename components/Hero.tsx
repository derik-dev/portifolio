'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const services = [
  'Landing Pages',
  'Plataformas SaaS',
  'E-commerce Fullstack',
  'Integrações com IA',
  'Deploy na Vercel',
  'Design de produto',
]

const tech = ['Next.js', 'Supabase', 'Vercel', 'Groq AI', 'TypeScript']

export default function Hero() {
  const [active, setActive] = useState(3)
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % services.length)
    }, 2400)

    // Animate only transforms — never start at opacity:0 so content
    // is always visible even if the ticker has a timing conflict with Lenis RAF.
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current,  { x: -48, duration: 1,   ease: 'power3.out', delay: 0.25 })
      gsap.from(rightRef.current, { x:  48, duration: 1,   ease: 'power3.out', delay: 0.45 })
      gsap.from(photoRef.current, { y:  72, duration: 1.3, ease: 'power3.out', delay: 0.35 })
      gsap.from(trustRef.current, { y:  20, duration: 0.9, ease: 'power3.out', delay: 0.9  })
    })

    return () => {
      clearInterval(interval)
      ctx.revert()
    }
  }, [])

  return (
    <section style={s.section}>

      {/* ── Glow layers ─────────────────────────────────────── */}
      <div style={{ ...s.glow,
        width: 1000, height: 660,
        background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(20,60,180,0.30) 0%, transparent 70%)',
      }} />
      <div style={{ ...s.glow,
        width: 420, height: 520,
        background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(50,120,255,0.40) 0%, transparent 65%)',
      }} />
      <div style={{ ...s.glow,
        width: 110, height: 460,
        background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(160,210,255,0.88) 0%, rgba(80,150,255,0.48) 35%, transparent 65%)',
      }} />

      {/* ── Two-column grid ─────────────────────────────────── */}
      <div style={s.grid}>

        {/* LEFT */}
        <div ref={leftRef} style={s.left}>
          <span style={s.badge}>✦ Disponível para novos projetos</span>

          <h1 style={s.heading}>
            Construo<br />
            produtos digitais<br />
            que vendem.
          </h1>

          <p style={s.subtitle}>
            Next.js, Supabase e IA integrada.<br />
            Do briefing ao deploy.
          </p>

          <div style={s.ctaRow}>
            <Btn
              base={{ ...s.btn, ...s.btnPrimary }}
              hoverStyle={{ background: 'rgba(255,255,255,0.88)', transform: 'scale(0.98)' }}
            >
              Ver projetos
            </Btn>
            <Btn
              base={{ ...s.btn, ...s.btnSecondary }}
              hoverStyle={{ color: '#fff', borderColor: 'rgba(255,255,255,0.30)' }}
            >
              ▶&nbsp;Como funciona
            </Btn>
          </div>
        </div>

        {/* RIGHT — cycling service list */}
        <div ref={rightRef} style={s.right}>
          {services.map((svc, i) => (
            <div
              key={svc}
              style={{
                ...s.svcItem,
                color: i === active ? '#ffffff' : 'rgba(255,255,255,0.16)',
              }}
            >
              <span style={{ ...s.indicator, opacity: i === active ? 1 : 0 }}>▶</span>
              {svc}
            </div>
          ))}
        </div>
      </div>

      {/* ── Center photo ────────────────────────────────────── */}
      <div ref={photoRef} style={s.photoWrap}>
        <img
          src="/imagens/WhatsApp%20Image%202026-06-25%20at%2012.20.21.jpeg"
          alt="Derik Gomes"
          style={s.photo}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
        <div style={{ ...s.fade,
          bottom: 0, left: 0, right: 0, height: '48%',
          background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.55) 55%, transparent 100%)',
        }} />
        <div style={{ ...s.fade,
          top: 0, bottom: 0, left: 0, width: '28%',
          background: 'linear-gradient(to right, #080808 0%, transparent 100%)',
        }} />
        <div style={{ ...s.fade,
          top: 0, bottom: 0, right: 0, width: '28%',
          background: 'linear-gradient(to left, #080808 0%, transparent 100%)',
        }} />
        <div style={{ ...s.fade,
          top: 0, left: 0, right: 0, height: '20%',
          background: 'linear-gradient(to bottom, #080808 0%, transparent 100%)',
        }} />
      </div>

      {/* ── Trust bar ───────────────────────────────────────── */}
      <div ref={trustRef} style={s.trust}>
        <p style={s.trustLabel}>3 produtos lançados e no ar</p>
        <div style={s.techRow}>
          {tech.map((t) => (
            <span key={t} style={s.techItem}>{t}</span>
          ))}
        </div>
      </div>

    </section>
  )
}

/* ── Generic hover button ──────────────────────────────────── */
function Btn({
  children,
  base,
  hoverStyle,
}: {
  children: React.ReactNode
  base: React.CSSProperties
  hoverStyle: React.CSSProperties
}) {
  const [h, setH] = useState(false)
  return (
    <button
      style={{ ...base, ...(h ? hoverStyle : {}) }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {children}
    </button>
  )
}

/* ── Style object ──────────────────────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  section: {
    position: 'relative',
    height: '100vh',
    background: '#080808',
    overflow: 'hidden',
  },

  glow: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    pointerEvents: 'none',
    zIndex: 0,
  },

  grid: {
    position: 'relative',
    zIndex: 10,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100%',
    paddingTop: 120,
    paddingRight: 64,
    paddingBottom: 120,
    paddingLeft: 64,
    alignItems: 'center',
    boxSizing: 'border-box',
  },

  /* Left column */
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: 99,
    padding: '6px 14px',
    fontFamily: 'var(--font-inter)',
    fontSize: 12,
    color: 'rgba(255,255,255,0.38)',
    letterSpacing: '0.06em',
    marginBottom: 28,
  },

  heading: {
    fontFamily: 'var(--font-syne)',
    fontWeight: 800,
    fontSize: 'clamp(42px, 5.2vw, 70px)',
    lineHeight: 1.04,
    letterSpacing: '-0.03em',
    color: '#fff',
    margin: '0 0 20px',
  },

  subtitle: {
    fontFamily: 'var(--font-inter)',
    fontSize: 15,
    color: 'rgba(255,255,255,0.32)',
    lineHeight: 1.75,
    margin: '0 0 36px',
  },

  ctaRow: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
  },

  btn: {
    fontFamily: 'var(--font-inter)',
    fontSize: 14,
    borderRadius: 8,
    paddingTop: 12,
    paddingRight: 26,
    paddingBottom: 12,
    paddingLeft: 26,
    cursor: 'pointer',
    transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
    border: 'none',
    outline: 'none',
  },

  btnPrimary: {
    fontWeight: 600,
    color: '#000',
    background: '#fff',
  },

  btnSecondary: {
    fontWeight: 400,
    color: 'rgba(255,255,255,0.42)',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.14)',
  },

  /* Right column */
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingLeft: 48,
  },

  svcItem: {
    fontFamily: 'var(--font-syne)',
    fontSize: 'clamp(20px, 2.1vw, 30px)',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    transition: 'color 0.5s ease',
    userSelect: 'none',
  },

  indicator: {
    fontSize: 11,
    color: '#3b82f6',
    minWidth: 16,
    transition: 'opacity 0.5s ease',
  },

  /* Photo */
  photoWrap: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
    pointerEvents: 'none',
    userSelect: 'none',
  },

  photo: {
    height: '72vh',
    width: 'auto',
    maxWidth: '38vw',
    display: 'block',
    objectFit: 'contain',
  },

  fade: {
    position: 'absolute',
    pointerEvents: 'none',
  },

  /* Trust bar */
  trust: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 14,
    paddingBottom: 32,
    paddingTop: 16,
  },

  trustLabel: {
    fontFamily: 'var(--font-inter)',
    fontSize: 12,
    color: 'rgba(255,255,255,0.18)',
    letterSpacing: '0.07em',
    margin: 0,
  },

  techRow: {
    display: 'flex',
    gap: 32,
    alignItems: 'center',
  },

  techItem: {
    fontFamily: 'var(--font-inter)',
    fontSize: 12,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.10)',
    letterSpacing: '0.05em',
  },
}
