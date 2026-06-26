import BrandLogo from "../components/BrandLogo";
import PageMotion from "../components/PageMotion";

const projects = [
  {
    name: "Agenda Garantida",
    type: "SaaS",
    description: "Agenda com confirmação automática de pagamentos.",
    image: "/imagens/ims-sites/img-site (2).png",
    className: "project-featured",
  },
  {
    name: "OrçaFácil",
    type: "Produto digital",
    description: "Orçamentos profissionais que vendem pelo cliente.",
    image: "/imagens/ims-sites/img-site (1).png",
  },
  {
    name: "Aura Clinic",
    type: "Experiência de marca",
    description: "Biotecnologia e design em uma presença premium.",
    image: "/imagens/ims-sites/img-site (5).png",
  },
  {
    name: "Rei do Martelete",
    type: "E-commerce",
    description: "Catálogo e conversão para locação de equipamentos.",
    image: "/imagens/ims-sites/img-site.png",
  },
  {
    name: "OrçaSolar",
    type: "Plataforma SaaS",
    description: "Propostas solares completas em poucos minutos.",
    image: "/imagens/ims-sites/img-site (7).png",
  },
  {
    name: "Imparis Solutions",
    type: "Site institucional",
    description: "Posicionamento digital para escalar negócios.",
    image: "/imagens/ims-sites/img-site (6).png",
  },
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
          <BrandLogo />
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
        <img className="hero-image" data-hero-image src="/imagens/portfolio/hero-derik.png" alt="" />
        <div className="hero-shade" data-hero-shade />
        <div className="hero-content shell">
          <div className="availability" data-hero-badge>
            <i /> Disponível para novos projetos
          </div>
          <p className="eyebrow" data-reveal>
            Fullstack developer · Product builder
          </p>
          <h1 data-hero-title>
            Produtos digitais
            <br />
            com presença,
            <br />
            clareza e código.
          </h1>
          <p className="hero-copy" data-hero-copy>
            Eu transformo ideias em experiências que parecem simples,
            funcionam rápido e ajudam negócios a crescer.
          </p>
          <div className="hero-actions" data-hero-actions>
            <a className="button button-light" href="#projetos">
              Ver projetos <Arrow />
            </a>
            <a className="button button-ghost" href="#processo">
              Como eu trabalho <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-services" aria-label="Especialidades" data-hero-services>
          <span>Landing pages</span>
          <span>Produtos SaaS</span>
          <span>E-commerce</span>
          <span className="active">Experiências web</span>
          <span>Integrações com IA</span>
        </div>
        <div className="hero-bottom" data-hero-bottom>
          <span>Três Rios · RJ · Brasil</span>
          <span>Projetando e construindo de ponta a ponta</span>
        </div>
      </section>

      <section className="intro section-light" data-showcase>
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

      <section className="projects section-light" id="projetos">
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
            <article className={`project-card ${project.className || ""}`} key={project.name} data-project-card>
              <div className="project-image">
                <img src={project.image} alt={`Página inicial do projeto ${project.name}`} />
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
            </article>
          ))}
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

      <section className="about section-light" id="sobre">
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

      <section className="faq section-light">
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
        <img src="/imagens/portfolio/cta-derik.png" alt="" data-cta-image />
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
          <a className="brand brand-dark" href="#inicio">
            <BrandLogo tone="dark" />
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
