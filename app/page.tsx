import BrandLogo from "../components/BrandLogo";
import PageMotion from "../components/PageMotion";

const projects = [
  {
    name: "NetPubli",
    type: "Landing page",
    description: "Estrutura de conversão para tráfego pago e captação.",
    image: "/imagens/ims-sites/img-site (11).png",
    href: "https://codexz.com.br/netpubli",
  },
  {
    name: "Centro CPAP",
    type: "Saúde",
    description: "Página especializada para jornada de diagnóstico e agendamento.",
    image: "/imagens/ims-sites/img-site (12).png",
    href: "https://netpubli.com.br/meu-cpap",
  },
  {
    name: "Imparis Solutions",
    type: "Site institucional",
    description: "Posicionamento digital para escalar negócios.",
    image: "/imagens/ims-sites/img-site (6).png",
    href: "https://codexz.com.br/imparis",
  },
  {
    name: "E4D Consultoria",
    type: "Site institucional",
    description: "Gestão estratégica para clínicas e hospitais.",
    image: "/imagens/ims-sites/img-site (14).png",
    href: "https://e4dconsultoria.com.br/",
  },
  {
    name: "Editora Aslan",
    type: "Site institucional",
    description: "Presença digital para editora com catálogo e identidade de marca.",
    image: "/imagens/ims-sites/imgsite.png",
    href: "https://editoraaslan.com",
  },
  {
    name: "Hipnose & Nutrição",
    type: "Saúde",
    description: "Página especializada para captação de pacientes e agendamento.",
    image: "/imagens/ims-sites/imgsite (1).png",
    href: "https://clinicadehipnoseenutricao.com",
    objectPosition: "left top",
  },
  {
    name: "Vero",
    type: "E-commerce",
    description: "Moda funcional com estética premium.",
    image: "/imagens/ims-sites/img-site (13).png",
    href: "https://loja-virtual-navy-eta.vercel.app/",
    className: "project-featured",
  },
];

const clients = [
  { name: "Vero", logo: "/cases/logo.png", description: "E-commerce de moda funcional com estética premium e foco em conversão.", href: "https://loja-virtual-navy-eta.vercel.app/" },
  { name: "NetPubli", logo: "/cases/logo (1).png", description: "Landing page estruturada para tráfego pago, captação e autoridade digital.", href: "https://codexz.com.br/netpubli" },
  { name: "Centro CPAP", logo: "/cases/logo (2).png", description: "Página especializada para jornada de diagnóstico e agendamento de consultas.", href: "https://netpubli.com.br/meu-cpap" },
  { name: "Imparis Solutions", logo: "/cases/logo (3).png", description: "Posicionamento digital completo para escalar negócios com estratégia.", href: "https://codexz.com.br/imparis" },
  { name: "E4D Consultoria", logo: "/cases/logo (4).png", description: "Site institucional para gestão estratégica de clínicas e hospitais.", href: "https://e4dconsultoria.com.br/" },
  { name: "Editora Aslan", logo: "/cases/logo (5).png", description: "Presença digital para editora com catálogo, identidade e autoridade de marca.", href: "https://editoraaslan.com" },
  { name: "Hipnose & Nutrição", logo: "/cases/logo (6).png", description: "Página especializada em captação de pacientes e agendamento online.", href: "https://clinicadehipnoseenutricao.com" },
];

const capabilities = [
  ["01", "Descoberta", "Entendo o negócio, o público e a ação que a página precisa provocar."],
  ["02", "Design", "Transformo estratégia em uma interface clara, autoral e pronta para converter."],
  ["03", "Desenvolvimento", "Construo o produto completo com performance, integrações e atenção aos detalhes."],
  ["04", "Lançamento", "Publico, testo e deixo tudo preparado para evoluir depois do primeiro deploy."],
];

const tools = ["Next.js", "React", "TypeScript", "Supabase", "Node.js", "GSAP", "Vercel", "IA generativa"];

const suiteCapabilities = [
  { title: "Estratégia", description: "Objetivo, público e mensagem central definidos antes do layout.", active: true },
  { title: "Design", description: "Direção visual, hierarquia e experiência alinhadas à marca.", active: false },
  { title: "Código", description: "Desenvolvimento responsivo, rápido e pronto para escalar.", active: false },
  { title: "Integrações", description: "Formulários, automações, pagamentos e ferramentas do negócio.", active: false },
  { title: "Lançamento", description: "Deploy, ajustes finais e base preparada para evoluir.", active: false },
];

const suiteSites = [
  { name: "CodeXZ", image: "/imagens/ims-sites/img-site (10).png" },
  { name: "NetPubli", image: "/imagens/ims-sites/img-site (11).png" },
  { name: "Centro CPAP", image: "/imagens/ims-sites/img-site (12).png" },
  { name: "Imparis Solutions", image: "/imagens/ims-sites/img-site (6).png" },
  { name: "Vero", image: "/imagens/ims-sites/img-site (13).png" },
];

const faqs = [
  ["Que tipo de projeto você desenvolve?", "Landing pages, sites institucionais, e-commerces e produtos SaaS - do design ao deploy."],
  ["Você também cuida do design?", "Sim. A interface e a experiência fazem parte do projeto, com direção visual adaptada ao posicionamento de cada marca."],
  ["Quanto tempo leva um projeto?", "Depende do escopo. Uma landing page costuma levar de 1 a 3 semanas; produtos maiores são planejados em etapas."],
  ["Trabalha com projetos já iniciados?", "Sim. Posso redesenhar, corrigir, acelerar ou continuar produtos existentes depois de uma análise técnica."],
  ["Como começamos?", "Você me conta o objetivo, eu organizo o escopo e devolvo uma proposta clara com etapas, prazo e investimento."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <PageMotion />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Derik Dev, início">
          <img src="/imagens/portfolio/logo-dg.png" alt="DG logo" style={{ height: "48px", width: "auto", filter: "brightness(0) invert(1)" }} />
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="button button-light button-small" href="#contato">
          Fale comigo <Arrow />
        </a>
      </header>

      <section className="hero" id="inicio" data-hero>
        <img className="hero-image" data-hero-image src="/imagens/portfolio/new-hero.png" alt="" />
        <div className="hero-shade" data-hero-shade />
        <div className="hero-content shell">


          <h1 data-hero-title>
            Criamos sites que
            <br />
            geram resultados.
          </h1>

          <div className="hero-actions" data-hero-actions>
            <a className="button button-light" href="#projetos">
              Ver projetos <Arrow />
            </a>
            <a className="button button-ghost" href="#processo">
              Como eu trabalho <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-bottom" data-hero-bottom>
          <span>Três Rios · RJ · Brasil</span>
          <span>Projetando e construindo de ponta a ponta</span>
        </div>
      </section>

      <section className="intro" data-showcase>
        <div className="shell intro-suite" data-showcase-card>
          <div className="suite-copy">
            <h2>Sites completos, do briefing ao lançamento</h2>
            <p>
              Eu transformo a ideia em uma presença digital clara, bonita e
              funcional: estratégia, interface, desenvolvimento e publicação
              trabalhando como uma entrega só.
            </p>
            <a href="#processo">
              Ver processo <span aria-hidden="true">→</span>
            </a>

            <div className="suite-capability-list">
              {suiteCapabilities.map((item) => (
                <article className={item.active ? "active" : ""} key={item.title}>
                  <span aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    {item.active && <p>{item.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="suite-stage" aria-label="Sites desenvolvidos por Derik Dev">
            <div className="suite-carousel">
              <div className="suite-track">
                {suiteSites.map((site) => (
                  <figure className="suite-site-card" key={site.name}>
                    <img src={site.image} alt={`Página inicial do projeto ${site.name}`} />
                    <figcaption>{site.name}</figcaption>
                  </figure>
                ))}
                {suiteSites.map((site) => (
                  <figure className="suite-site-card" key={`${site.name}-repeat`} aria-hidden="true">
                    <img src={site.image} alt="" />
                    <figcaption>{site.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projetos">
        <div className="shell section-heading row-heading">
          <div data-reveal>
            <p className="section-kicker">Trabalhos selecionados</p>
            <h2>
              Sites feitos para
              <br />
              serem lembrados.
            </h2>
          </div>
          <p data-reveal>
            Uma seleção de produtos, experiências e marcas digitais que saíram
            do conceito para o navegador.
          </p>
        </div>
        <div className="project-grid shell" data-project-grid>
          {projects.map((project) => (
            <a
              className={`project-card ${project.className || ""}`}
              href={project.href}
              key={project.name}
              tabIndex={0}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir site do projeto ${project.name}`}
              data-project-card
            >
              <div className="project-image">
                <img src={project.image} alt={`Página inicial do projeto ${project.name}`} style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined} />
                <div className="project-info" aria-hidden="true">
                  <span>{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <strong>Mais detalhes</strong>
                </div>
                <span className="project-open">
                  <Arrow />
                </span>
              </div>
              <div className="project-meta">
                <div>
                  <span>{project.type}</span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="logos-section">
        <div className="shell logos-header">
          <p className="logos-heading">Clientes que confiam no trabalho</p>
          <div className="logos-arrows">
            <button className="logos-arrow" id="logos-prev" aria-label="Anterior">←</button>
            <button className="logos-arrow" id="logos-next" aria-label="Próximo">→</button>
          </div>
        </div>
        <div className="logos-scroll-wrap" id="logos-scroll">
          <div className="logos-grid">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="logo-card">
                <img src={client.logo} alt={client.name} className="logo-img" />
                <p className="logo-desc">{client.description}</p>
                <a href={client.href} target="_blank" rel="noreferrer" className="logo-link">Ver projeto</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process" id="processo">
        <div className="shell">
          <div className="process-heading" data-reveal>
            <p className="section-kicker">Do simples ao ambicioso</p>
            <h2>
              Um processo direto.
              <br />
              Um resultado que escala.
            </h2>
            <p>
              Sem caixas-pretas. Cada etapa tem uma intenção clara e termina
              com algo concreto para validar.
            </p>
            <a className="button button-light" href="#contato">
              Iniciar um projeto <Arrow />
            </a>
          </div>
          <div className="process-grid" data-reveal>
            {capabilities.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="tech-panel" data-reveal>
            <div>
              <p className="section-kicker">Stack selecionada</p>
              <h3>
                Ferramentas modernas.
                <br />
                Decisões pragmáticas.
              </h3>
            </div>
            <div className="tech-list" data-tech-list>
              {tools.map((tool) => (
                <span key={tool} data-tech-pill>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="shell about-grid">
          <div className="about-title" data-reveal>
            <p className="section-kicker">Sobre o Derik</p>
            <h2>
              Design sensível.
              <br />
              Engenharia sólida.
            </h2>
          </div>
          <div className="about-copy" data-reveal>
            <p className="about-lead">
              Eu sou Derik, desenvolvedor fullstack focado em criar produtos
              digitais que unem estética, clareza e resultado.
            </p>
            <p>
              Gosto de interfaces com personalidade, código bem resolvido e da
              sensação de ver uma ideia ganhar forma - bonita por fora,
              confiável por dentro.
            </p>
            <div className="stats">
              <div>
                <strong>15+</strong>
                <span>interfaces criadas</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>foco em produto</span>
              </div>
              <div>
                <strong>1:1</strong>
                <span>contato direto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="shell faq-grid">
          <div data-reveal>
            <p className="section-kicker">Perguntas frequentes</p>
            <h2>
              Antes de
              <br />
              começarmos.
            </h2>
            <a className="button button-outline" href="mailto:derikgomesfilho@gmail.com">
              Enviar uma pergunta <Arrow />
            </a>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contato" data-cta>
        <img src="/imagens/portfolio/hero-black-hole.png" alt="" data-cta-image />
        <div className="cta-shade" />
        <div className="cta-content" data-cta-content>
          <p className="section-kicker">Seu próximo projeto pode começar aqui</p>
          <h2>
            Vamos construir
            <br />
            algo marcante.
          </h2>
          <a className="button button-dark" href="mailto:derikgomesfilho@gmail.com">
            Entrar em contato <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a href="#inicio" aria-label="Derik Dev, início">
            <img src="/imagens/portfolio/logo-dg.png" alt="DG logo" style={{ height: "48px", width: "auto", filter: "brightness(0) invert(1)" }} />
          </a>
          <p>Produto, design e desenvolvimento para a web.</p>
          <div>
            <a href="https://github.com/derik-dev" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:derikgomesfilho@gmail.com">E-mail</a>
          </div>
          <span>© 2026 Derik Gomes</span>
        </div>
      </footer>
    </main>
  );
}
