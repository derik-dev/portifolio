'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = ['Projetos', 'Sobre', 'Contato']

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = navRef.current
    if (!el) return

    gsap.from(el, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3,
    })

    ScrollTrigger.create({
      start: '80px top',
      onEnter: () => el.classList.add('scrolled'),
      onLeaveBack: () => el.classList.remove('scrolled'),
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <nav ref={navRef} className="navbar">
      {/* Logo */}
      <span className="logo">DK</span>

      {/* Links pill */}
      <div className="pill">
        {links.map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`} className="pill-link">
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#contato" className="cta">
        Contratar
      </a>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          box-sizing: border-box;
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            backdrop-filter 0.35s ease;
          border-bottom: 0.5px solid transparent;
        }

        .navbar.scrolled {
          background: rgba(8, 8, 8, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: rgba(255, 255, 255, 0.06);
        }

        .logo {
          font-family: var(--font-syne);
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          user-select: none;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 4px;
          border: 0.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 99px;
          padding: 4px;
        }

        .pill-link {
          font-family: var(--font-inter);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          padding: 7px 16px;
          border-radius: 99px;
          text-decoration: none;
          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .pill-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .cta {
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 600;
          color: #000000;
          background: #ffffff;
          border-radius: 8px;
          padding: 9px 20px;
          text-decoration: none;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
          display: inline-block;
        }

        .cta:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(0.98);
        }

        @media (max-width: 767px) {
          .navbar {
            padding: 16px 20px;
          }
          .pill {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
