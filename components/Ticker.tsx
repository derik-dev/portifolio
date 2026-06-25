'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const items = [
  'NEXT.JS', 'SUPABASE', 'VERCEL', 'GSAP', 'GROQ AI',
  'TYPESCRIPT', 'SAAS', 'AI BUILDER', 'FULLSTACK', 'DEPLOY',
]

const doubled = [...items, ...items]

export default function Ticker() {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(innerRef.current, {
        xPercent: -50,
        duration: 30,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div style={s.track}>
      <div ref={innerRef} style={s.inner}>
        {doubled.map((item, i) => (
          <span key={i} style={s.item}>
            {item}
            <span style={s.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  track: {
    width: '100%',
    padding: '18px 0',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    overflow: 'hidden',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    whiteSpace: 'nowrap',
    willChange: 'transform',
  },
  item: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 24,
    fontFamily: 'var(--font-inter)',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.18)',
  },
  dot: {
    color: 'rgba(255,255,255,0.15)',
  },
}
