export default function Footer() {
  return (
    <footer style={s.footer} className="res-px">
      <span style={s.left}>© 2026 Derik Gomes — derikdev.com.br</span>
      <span style={s.right}>Feito com Next.js + GSAP</span>
    </footer>
  )
}

const s: Record<string, React.CSSProperties> = {
  footer: {
    padding: '32px 48px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    fontFamily: 'var(--font-inter)',
    fontSize: 12,
    color: 'rgba(255,255,255,0.15)',
  },
  right: {
    fontFamily: 'var(--font-inter)',
    fontSize: 12,
    color: 'rgba(255,255,255,0.1)',
  },
}
