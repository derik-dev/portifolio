type BrandLogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export default function BrandLogo({
  className = "",
  tone = "light",
}: BrandLogoProps) {
  return (
    <span className={`brand-lockup ${className}`} data-brand-lockup>
      <img
        className="brand-mark"
        src="/imagens/portfolio/logo-dk.png"
        alt=""
        aria-hidden="true"
        data-brand-mark
        data-tone={tone}
      />
    </span>
  );
}
