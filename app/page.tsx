"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// ─── Nav ──────────────────────────────────────────────────────────────────────

function NavSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#diagnostico", label: "Diagnóstico" },
    { href: "#estrategia", label: "Estratégia" },
    { href: "#entregaveis", label: "Entregáveis" },
    { href: "#conteudo", label: "Conteúdo" },
    { href: "#anuncios", label: "Tráfego" },
    { href: "#investimento", label: "Investimento" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "rgba(8,8,8,0.97)" : "rgba(8,8,8,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(245,200,0,0.08)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          className="nav-brand"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: 20,
            color: "#F5C800",
            letterSpacing: "0.05em",
          }}
        >
          YURI CORREIA × FRAGA PNEUS
        </span>
        <div
          className="hidden md:flex"
          style={{ gap: 32, alignItems: "center" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 13,
                fontWeight: 500,
                color: "#888",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#F5C800")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#888")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5554999999999"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: 13,
              fontWeight: 600,
              color: "#000",
              backgroundColor: "#F5C800",
              padding: "8px 20px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Fechar proposta
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
        padding: "0 32px 80px",
        maxWidth: "100%",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "70%",
          background:
            "radial-gradient(ellipse at top right, rgba(245,200,0,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: 13,
            fontWeight: 500,
            color: "#F5C800",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Estratégia + Proposta Comercial · Fraga Pneus · 2025
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(72px, 13vw, 160px)",
            lineHeight: 0.88,
            margin: 0,
            marginBottom: 48,
          }}
        >
          <span style={{ color: "#ffffff", display: "block" }}>
            30 anos de estrada.
          </span>
          <span style={{ color: "#F5C800", display: "block" }}>
            Agora no digital.
          </span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <p
            className="hero-desc"
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 16,
              color: "#888",
              maxWidth: 500,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            A Fraga Pneus tem 30 anos de história, expertise técnica reconhecida
            e atendimento que fideliza. O que falta é um ecossistema digital à
            altura do negócio — para que novos clientes te encontrem, confiem e
            convertam antes de pegar o telefone.
          </p>
          <div className="hero-badge" style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(48px, 8vw, 80px)",
                color: "#F5C800",
                lineHeight: 1,
              }}
            >
              R$16k
            </div>
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 13,
                color: "#666",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              investimento total · 12 meses
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-barlow)",
        fontSize: 12,
        fontWeight: 600,
        color: "#F5C800",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        marginBottom: 20,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-bebas)",
        fontSize: "clamp(36px, 5vw, 72px)",
        color: dark ? "#000" : "#fff",
        lineHeight: 1,
        margin: 0,
        marginBottom: 48,
      }}
    >
      {children}
    </h2>
  );
}

// ─── Diagnostico ──────────────────────────────────────────────────────────────

function DiagnosticoSection() {
  const cards = [
    {
      emoji: "📍",
      title: "Google Meu Negócio",
      desc: "Perfil incompleto, sem fotos atualizadas, sem resposta a avaliações. O concorrente que aparece antes de você está capturando o cliente que deveria ser seu.",
      status: "Crítico",
      bad: true,
    },
    {
      emoji: "🌐",
      title: "Site / Landing Page",
      desc: "Sem site ou com presença desatualizada que não converte. Caminhoneiros e gestores de frota pesquisam antes de ligar — e o que encontram hoje não transmite confiança.",
      status: "Ausente",
      bad: true,
    },
    {
      emoji: "📸",
      title: "Instagram",
      desc: "Presença existe, mas sem estratégia editorial. Posts esporádicos, sem pauta definida, sem conteúdo que gere alcance orgânico ou prova social consistente.",
      status: "Oportunidade",
      bad: false,
    },
    {
      emoji: "💬",
      title: "WhatsApp Business",
      desc: "Usado como número pessoal, sem catálogo de serviços, sem mensagens automáticas, sem separação de atendimento. Canal principal mal aproveitado.",
      status: "Precário",
      bad: true,
    },
  ];

  return (
    <section
      id="diagnostico"
      className="resp-section"
      style={{ padding: "100px 32px", maxWidth: 1280, margin: "0 auto" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <SectionLabel>01 — Diagnóstico</SectionLabel>
        <SectionTitle>Onde você está perdendo cliente hoje</SectionTitle>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 2 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            whileHover={{ backgroundColor: "#111" }}
            style={{
              position: "relative",
              backgroundColor: "#0d0d0d",
              padding: 32,
              transition: "background-color 0.3s",
              overflow: "hidden",
            }}
          >
            {/* Status bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: card.bad ? "#FF3B1F" : "#1FD97A",
              }}
            />
            <div style={{ fontSize: 28, marginBottom: 16 }}>{card.emoji}</div>
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 20,
                fontWeight: 600,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 12,
              }}
            >
              {card.title}
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                color: "#888",
                lineHeight: 1.6,
                margin: 0,
                marginBottom: 24,
              }}
            >
              {card.desc}
            </p>
            <div
              style={{
                display: "inline-block",
                fontFamily: "var(--font-barlow)",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: card.bad ? "#FF3B1F" : "#1FD97A",
                border: `1px solid ${card.bad ? "rgba(255,59,31,0.3)" : "rgba(31,217,122,0.3)"}`,
                padding: "4px 12px",
              }}
            >
              {card.status}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Estratégia ───────────────────────────────────────────────────────────────

function EstrategiaSection() {
  const pilares = [
    {
      num: "01",
      emoji: "🗺️",
      name: "Encontrar",
      desc: "Google Meu Negócio completo + site indexado + SEO local. Quando alguém busca pneu em Biguaçu e região, você aparece.",
    },
    {
      num: "02",
      emoji: "🎯",
      name: "Converter",
      desc: "Landing page de catálogo premium + WhatsApp estruturado. Visita vira orçamento, orçamento vira venda.",
    },
    {
      num: "03",
      emoji: "📣",
      name: "Alcançar",
      desc: "Instagram estratégico + Meta e Google Ads segmentados. Você aparece pra quem você quer, onde ele está.",
    },
    {
      num: "04",
      emoji: "🔁",
      name: "Reter",
      desc: "Conteúdo que educa e mantém contato. Cliente satisfeito volta e indica — com prova social que cresce mês a mês.",
    },
  ];

  return (
    <section
      id="estrategia"
      className="resp-section"
      style={{ backgroundColor: "#101010", padding: "100px 32px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionLabel>02 — Estratégia</SectionLabel>
          <SectionTitle>Os 4 pilares do ecossistema digital</SectionTitle>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 2 }}
        >
          {pilares.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -4, backgroundColor: "#0d0d0d" }}
              style={{
                position: "relative",
                backgroundColor: "#0a0a0a",
                padding: 32,
                overflow: "hidden",
                transition: "background-color 0.3s",
              }}
            >
              {/* Decorative number */}
              <div
                style={{
                  position: "absolute",
                  bottom: -20,
                  right: -10,
                  fontFamily: "var(--font-bebas)",
                  fontSize: 120,
                  color: "rgba(245,200,0,0.05)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {p.num}
              </div>
              <div style={{ fontSize: 36, marginBottom: 20 }}>{p.emoji}</div>
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 32,
                  color: "#F5C800",
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                {p.name}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 14,
                  color: "#888",
                  lineHeight: 1.6,
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Entregáveis ──────────────────────────────────────────────────────────────

function EntregaveisSection() {
  const items = [
    {
      n: "01",
      title: "Site Institucional Completo",
      desc: "Apresentação profissional da empresa, serviços, estrutura, história e canais de contato. Responsivo, rápido e otimizado para SEO local.",
      tag: "Setup",
    },
    {
      n: "02",
      title: "LP Catálogo Premium",
      desc: "Landing page focada em conversão com catálogo de pneus e serviços, tabela de aplicações e CTA direto para orçamento via WhatsApp.",
      tag: "Setup",
    },
    {
      n: "03",
      title: "Google Meu Negócio Completo",
      desc: "Configuração completa do perfil: fotos, categorias, horários, serviços, área de atendimento, posts e gestão de avaliações mensalmente.",
      tag: "Setup + Mensal",
    },
    {
      n: "04",
      title: "WhatsApp Business Estruturado",
      desc: "Perfil comercial configurado, catálogo de serviços, mensagem de boas-vindas, mensagem de ausência e etiquetas de atendimento.",
      tag: "Setup",
    },
    {
      n: "05",
      title: "Estratégia e Presença no Instagram",
      desc: "Estratégia editorial contínua, orientação de pauta, apoio na produção de conteúdo, criação de peças estáticas para o público ideal e acompanhamento do que funciona nesse nicho. Sem fórmula engessada — presença que cresce com o negócio.",
      tag: "Mensal",
    },
    {
      n: "06",
      title: "Gestão de Tráfego Pago Meta + Google",
      desc: "Campanhas de performance no Meta Ads (Facebook/Instagram) e Google Ads, segmentadas por público, região e intenção de busca. Otimização semanal.",
      tag: "Mensal",
    },
    {
      n: "07",
      title: "Relatório Mensal de Resultados",
      desc: "Dashboard com métricas de alcance, cliques, leads gerados, performance dos anúncios e insights para o próximo mês.",
      tag: "Mensal",
    },
  ];

  return (
    <section
      id="entregaveis"
      className="resp-section"
      style={{ padding: "100px 32px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionLabel>03 — Entregáveis</SectionLabel>
          <SectionTitle>O que você vai receber</SectionTitle>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {items.map((item) => (
            <motion.div
              key={item.n}
              variants={fadeUp}
              whileHover={{ backgroundColor: "#0d0d0d" }}
              className="entregavel-item"
              style={{
                backgroundColor: "#090909",
                padding: "28px 32px",
                transition: "background-color 0.3s",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 40,
                  color: "rgba(245,200,0,0.15)",
                  lineHeight: 1,
                }}
              >
                {item.n}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
                    color: "#888",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
              <div
                className="entregavel-tag"
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#F5C800",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  border: "1px solid rgba(245,200,0,0.2)",
                  padding: "6px 14px",
                  whiteSpace: "nowrap",
                }}
              >
                {item.tag}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Calendário Editorial ─────────────────────────────────────────────────────

function CalendarioSection() {
  const dotColors: Record<string, string> = {
    Reels: "#C840E9",
    Carrossel: "#1B9CF4",
    "Vídeo": "#FF6B35",
    Story: "#F5C800",
    "Antes/Depois": "#1FD97A",
  };

  const weeks = [
    {
      label: "Semana 1 — Autoridade",
      posts: [
        {
          tipo: "Reels",
          texto:
            "Pneu de carreta durar 3x mais — o erro que todo motorista comete",
        },
        {
          tipo: "Carrossel",
          texto:
            "Pneu novo vs recapado: custo por km rodado com números reais",
        },
        {
          tipo: "Story",
          texto: "Enquete você sabe quando trocar? + CTA WhatsApp",
        },
      ],
    },
    {
      label: "Semana 2 — Prova Social",
      posts: [
        {
          tipo: "Antes/Depois",
          texto: "Roda de alumínio suja → polida. Visual impactante",
        },
        {
          tipo: "Vídeo",
          texto: "Borracharia móvel em ação — atendimento na BR-101",
        },
        {
          tipo: "Carrossel",
          texto: "30 anos de Fraga: o que construímos e onde chegamos",
        },
      ],
    },
    {
      label: "Semana 3 — Alcance",
      posts: [
        {
          tipo: "Reels",
          texto:
            "Em quanto tempo a gente troca um pneu de carreta? — cronometrado",
        },
        {
          tipo: "Carrossel",
          texto: "5 sinais que o pneu vai furar nos próximos 500km",
        },
        {
          tipo: "Story",
          texto: "Bastidores: balanceamento e geometria em caminhão pesado",
        },
      ],
    },
    {
      label: "Semana 4 — Conversão",
      posts: [
        {
          tipo: "Vídeo",
          texto: "Depoimento de cliente frota — economia real em 6 meses",
        },
        {
          tipo: "Reels",
          texto:
            "Recapagem Truck, Agro e OTR: qual é o ideal pro seu veículo?",
        },
        {
          tipo: "Story",
          texto: "Oferta da semana + link direto WhatsApp com urgência",
        },
      ],
    },
  ];

  return (
    <section
      id="conteudo"
      className="resp-section"
      style={{ backgroundColor: "#101010", padding: "100px 32px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionLabel>04 — Conteúdo</SectionLabel>
          <SectionTitle>
            Exemplo de calendário editorial — mês 1
          </SectionTitle>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 14,
              color: "#666",
              fontStyle: "italic",
              marginBottom: 48,
              marginTop: -32,
            }}
          >
            Veja como pensamos o conteúdo — isso é exemplo do método, não uma
            promessa de entrega engessada.
          </p>
        </motion.div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {Object.entries(dotColors).map(([tipo, cor]) => (
            <div
              key={tipo}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-barlow)",
                fontSize: 12,
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: cor,
                  flexShrink: 0,
                }}
              />
              {tipo}
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 2 }}
        >
          {weeks.map((week) => (
            <motion.div
              key={week.label}
              variants={fadeUp}
              style={{
                backgroundColor: "#0a0a0a",
                padding: "24px 20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#F5C800",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(245,200,0,0.1)",
                  marginBottom: 20,
                }}
              >
                {week.label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {week.posts.map((post, i) => (
                  <div key={i} style={{ display: "flex", gap: 10 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: dotColors[post.tipo] || "#888",
                        flexShrink: 0,
                        marginTop: 5,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-barlow)",
                          fontSize: 10,
                          textTransform: "uppercase",
                          color: "#555",
                          letterSpacing: "0.1em",
                          marginBottom: 2,
                        }}
                      >
                        {post.tipo}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm)",
                          fontSize: 13,
                          color: "#bbb",
                          lineHeight: 1.5,
                        }}
                      >
                        {post.texto}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Roteiros ─────────────────────────────────────────────────────────────────

function RoteirosSection() {
  const roteiros = [
    {
      label: "REELS 01",
      title: "O erro que destrói o pneu antes da hora",
      hook: "Se você roda mais de 5.000 km sem fazer isso, tá jogando pneu fora.",
      corpo:
        "Mostra o rodízio na câmera, explica o desgaste irregular com imagens reais, apresenta os dados de km a mais que o pneu dura quando mantido corretamente. Fecha com CTA direto pro WhatsApp pra quem quer agendar o rodízio.",
      tags: ["Reels 30s", "Alto alcance", "Celular"],
    },
    {
      label: "CARROSSEL 01",
      title: "Pneu novo vs recapado: a conta que todo caminhoneiro precisa fazer",
      hook: "R$2.800 vs R$900 — qual a diferença real no bolso em 12 meses?",
      corpo:
        "Slide 1: impacto com o título e os dois preços. Slides 2-5: comparativo lado a lado — custo por km rodado, durabilidade média, aplicações ideais, segurança. Slide 6: quando cada um vale a pena. Slide final: condições da Fraga + CTA orçamento.",
      tags: ["Carrossel 7 slides", "Salva muito", "B2B frota"],
    },
    {
      label: "REELS 02",
      title: "Borracharia móvel: do chamado ao atendimento em menos de 40 min",
      hook: "Pneu furou na BR às 22h. Veja o que acontece quando você chama a Fraga.",
      corpo:
        "Vídeo real com cronômetro na tela — chamada recebida, equipe acionada, deslocamento, chegada, serviço executado. Texto na tela marcando cada etapa. Encerra com: salva esse vídeo — você vai precisar dele na hora errada.",
      tags: ["Reels 45s", "Emergência", "Alta conversão"],
    },
    {
      label: "ANTES E DEPOIS",
      title: "Roda de alumínio — 20 minutos de trabalho",
      hook: "Essa roda chegou assim. Saiu assim. Olha a diferença.",
      corpo:
        "Time-lapse do processo completo de polição — do estado sujo e oxidado até o brilho final. Música pesada e industrial. Sem narração — o visual vende sozinho. Dois frames finais: antes e depois lado a lado.",
      tags: ["Reels 20s", "Visual forte", "Time-lapse"],
    },
  ];

  return (
    <section id="roteiros" className="resp-section" style={{ padding: "100px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionLabel>05 — Roteiros</SectionLabel>
          <SectionTitle>Conteúdo que o caminhoneiro para pra ver</SectionTitle>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 2 }}
        >
          {roteiros.map((r) => (
            <motion.div
              key={r.label}
              variants={fadeUp}
              whileHover={{ borderLeftColor: "#F5C800" }}
              style={{
                backgroundColor: "#0d0d0d",
                padding: 32,
                borderLeft: "3px solid transparent",
                transition: "border-left-color 0.3s",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 12,
                  color: "#F5C800",
                  letterSpacing: "0.3em",
                  marginBottom: 12,
                }}
              >
                {r.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 20,
                  lineHeight: 1.2,
                }}
              >
                {r.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 14,
                  color: "#888",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  borderLeft: "2px solid rgba(245,200,0,0.25)",
                  paddingLeft: 14,
                  marginBottom: 20,
                }}
              >
                &ldquo;{r.hook}&rdquo;
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.65,
                  margin: 0,
                  marginBottom: 24,
                }}
              >
                {r.corpo}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-barlow)",
                      fontSize: 11,
                      color: "#666",
                      border: "1px solid #222",
                      padding: "3px 10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Anúncios ─────────────────────────────────────────────────────────────────

function AnunciosSection() {
  return (
    <section
      id="anuncios"
      className="resp-section"
      style={{ backgroundColor: "#101010", padding: "100px 32px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionLabel>06 — Tráfego Pago</SectionLabel>
          <SectionTitle>Como vamos rodar os anúncios</SectionTitle>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 2, marginBottom: 2 }}
        >
          {/* Meta Ads */}
          <motion.div
            variants={fadeUp}
            style={{ backgroundColor: "#0a0a0a", padding: 40 }}
          >
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 12,
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 8,
              }}
            >
              Plataforma
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 40,
                color: "#fff",
                marginBottom: 4,
                lineHeight: 1,
              }}
            >
              Meta Ads
            </div>
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 28,
                color: "#F5C800",
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              R$600/mês de verba
            </div>
            <div
              style={{
                backgroundColor: "rgba(245,200,0,0.08)",
                border: "1px solid rgba(245,200,0,0.15)",
                padding: "10px 16px",
                marginBottom: 24,
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                color: "#F5C800",
              }}
            >
              ⚡ Melhor horário: 18h–22h
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Segmentação: transporte + agro, raio 100km de Biguaçu",
                "Campanha de alcance: posicionamento e autoridade de marca",
                "Campanha de conversão: pneus para frota + orçamento",
                "Retargeting: quem visitou o site ou interagiu com perfil",
                "Campanha de promoção: ofertas sazonais e urgência",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
                    color: "#888",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "#F5C800", flexShrink: 0 }}>—</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Google Ads */}
          <motion.div
            variants={fadeUp}
            style={{ backgroundColor: "#0a0a0a", padding: 40 }}
          >
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 12,
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: 8,
              }}
            >
              Plataforma
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 40,
                color: "#fff",
                marginBottom: 4,
                lineHeight: 1,
              }}
            >
              Google Ads
            </div>
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 28,
                color: "#F5C800",
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              R$600/mês de verba
            </div>
            <div
              style={{
                backgroundColor: "rgba(245,200,0,0.08)",
                border: "1px solid rgba(245,200,0,0.15)",
                padding: "10px 16px",
                marginBottom: 24,
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                color: "#F5C800",
              }}
            >
              🔥 Intenção máxima — o cara já quer resolver
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Palavras-chave locais: pneu caminhão Biguaçu, borracharia SC, recapagem SC",
                "Google Search: captura quem já está buscando o serviço",
                "Google Maps: aparecer no topo quando buscam perto",
                "Extensão de chamada: click-to-call direto no anúncio",
                "Display retargeting: reforça marca pra quem já visitou",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
                    color: "#888",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "#F5C800", flexShrink: 0 }}>—</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Verba box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          style={{
            backgroundColor: "rgba(245,200,0,0.06)",
            border: "1px solid rgba(245,200,0,0.15)",
            padding: "32px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 15,
              color: "#888",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 600,
            }}
          >
            Os R$1.200/mês de verba são pagos diretamente às plataformas pela
            Fraga. Esse valor não entra no meu honorário — vai 100% pra
            mídia. Eu gerencio onde e como é investido pra ter o máximo de
            retorno.
          </p>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(36px, 5vw, 52px)",
                color: "#F5C800",
                lineHeight: 1,
              }}
            >
              R$1.200 /mês
            </div>
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 12,
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: 4,
              }}
            >
              pago direto nas plataformas
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Cronograma ───────────────────────────────────────────────────────────────

function CronogramaSection() {
  const fases = [
    {
      mes: "Mês 1",
      label: "Fundação",
      active: true,
      items: [
        "Site + LP no ar",
        "GMN verificado e completo",
        "WhatsApp Business configurado",
        "Meta Ads rodando",
        "Instagram com pauta definida",
      ],
    },
    {
      mes: "Mês 2",
      label: "Aceleração",
      active: false,
      items: [
        "Google Ads ativado",
        "Leads orgânicos via Maps",
        "Campanha de avaliações",
        "Retargeting ativo",
        "Primeiros resultados mensuráveis",
      ],
    },
    {
      mes: "Mês 3",
      label: "Tração",
      active: false,
      items: [
        "20+ avaliações no Google",
        "SEO ranqueando local",
        "Retargeting otimizado",
        "1° relatório completo",
        "Ajustes de rota",
      ],
    },
    {
      mes: "Mês 6+",
      label: "Escala",
      active: false,
      items: [
        "Autoridade consolidada",
        "Leads previsíveis",
        "Escala nos canais",
        "Expansão de campanha",
        "Marca referência na região",
      ],
    },
  ];

  return (
    <section
      id="timeline"
      className="resp-section"
      style={{ padding: "100px 32px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionLabel>07 — Cronograma</SectionLabel>
          <SectionTitle>O que acontece em cada fase</SectionTitle>
        </motion.div>

        {/* Swipe hint — visível só no mobile via CSS */}
        <div className="cronograma-hint">
          <span style={{ color: "#F5C800" }}>→</span>
          Arraste para ver as fases
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="cronograma-scroll"
        >
          {fases.map((fase) => (
            <motion.div
              key={fase.mes}
              variants={fadeUp}
              className="cronograma-card"
              style={{
                backgroundColor: fase.active ? "#F5C800" : "#0d0d0d",
                color: fase.active ? "#000" : "#fff",
                padding: 32,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: fase.active ? "rgba(0,0,0,0.5)" : "#666",
                  marginBottom: 8,
                }}
              >
                {fase.mes}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: 36,
                  lineHeight: 1,
                  marginBottom: 24,
                  color: fase.active ? "#000" : "#fff",
                }}
              >
                {fase.label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {fase.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: fase.active ? "#000" : "#888",
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: fase.active ? "#000" : "#F5C800",
                        flexShrink: 0,
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              {fase.active && (
                <div
                  style={{
                    marginTop: 24,
                    fontFamily: "var(--font-barlow)",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#000",
                    backgroundColor: "rgba(0,0,0,0.1)",
                    padding: "6px 12px",
                    display: "inline-block",
                  }}
                >
                  ● ATIVO — INÍCIO DO PROJETO
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Investimento ─────────────────────────────────────────────────────────────

function InvestimentoSection() {
  return (
    <section
      id="investimento"
      className="resp-section"
      style={{ backgroundColor: "#101010", padding: "100px 32px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionLabel>08 — Investimento</SectionLabel>
          <SectionTitle>Estrutura de pagamento</SectionTitle>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 2, marginBottom: 2 }}
        >
          {/* Setup card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            style={{
              backgroundColor: "#F5C800",
              padding: 48,
              color: "#000",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(0,0,0,0.5)",
                marginBottom: 8,
              }}
            >
              Pagamento único
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 40,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              Setup Completo
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(48px, 6vw, 72px)",
                lineHeight: 1,
                marginBottom: 32,
              }}
            >
              R$6.000
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Site institucional completo",
                "LP catálogo premium",
                "Google Meu Negócio configurado",
                "WhatsApp Business estruturado",
                "Hospedagem do 1° ano inclusa",
                "Entrega em até 15 dias úteis",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
                    color: "#000",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mensal card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            style={{
              backgroundColor: "#0a0a0a",
              padding: 48,
              border: "1px solid #1a1a1a",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#666",
                marginBottom: 8,
              }}
            >
              Recorrente mensal
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 40,
                lineHeight: 1,
                color: "#fff",
                marginBottom: 8,
              }}
            >
              Gestão Mensal
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(48px, 6vw, 72px)",
                lineHeight: 1,
                color: "#F5C800",
                marginBottom: 4,
              }}
            >
              R$1.000
            </div>
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 14,
                color: "#666",
                marginBottom: 32,
              }}
            >
              × 10 meses
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Estratégia e presença no Instagram",
                "Produção de peças estáticas",
                "Gestão Meta + Google Ads",
                "SEO e Google Meu Negócio",
                "Atualizações no site",
                "Relatório mensal de resultados",
                "Suporte WhatsApp 24h",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
                    color: "#888",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#F5C800" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Verba box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          style={{
            backgroundColor: "rgba(245,200,0,0.06)",
            border: "1px solid rgba(245,200,0,0.15)",
            padding: "32px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 15,
              color: "#888",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 600,
            }}
          >
            Além dos honorários acima, é necessária uma verba de R$1.200/mês
            investida diretamente nas plataformas de anúncio (Meta + Google).
            Esse valor é pago pela Fraga direto nas plataformas e não passa pela
            minha gestão — 100% vai pra mídia.
          </p>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(32px, 4vw, 48px)",
                color: "#F5C800",
                lineHeight: 1,
              }}
            >
              + R$1.200 /mês
            </div>
            <div
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: 12,
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: 4,
              }}
            >
              verba de mídia · separado
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Resumo Final ─────────────────────────────────────────────────────────────

function ResumoSection() {
  const linhas = [
    { label: "Setup completo", valor: "R$6.000", sub: "pagamento único" },
    {
      label: "Gestão mensal × 10",
      valor: "R$10.000",
      sub: "R$1.000/mês",
    },
    {
      label: "Verba de tráfego",
      valor: "R$1.200/mês",
      sub: "pago direto às plataformas",
    },
    { label: "Total de honorários", valor: "R$16.000", sub: "12 meses", bold: true },
  ];

  return (
    <section className="resp-section" style={{ backgroundColor: "#F5C800", padding: "100px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(0,0,0,0.4)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            09 — Resumo
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(36px, 5vw, 72px)",
              color: "#000",
              lineHeight: 1,
              margin: 0,
              marginBottom: 56,
            }}
          >
            Números na mesa
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="resumo-grid grid"
        >
          {/* Left: breakdown */}
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {linhas.map((l) => (
                <div
                  key={l.label}
                  style={{
                    backgroundColor: l.bold
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(0,0,0,0.04)",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-barlow)",
                        fontSize: l.bold ? 18 : 16,
                        fontWeight: l.bold ? 700 : 500,
                        color: "#000",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {l.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: 12,
                        color: "rgba(0,0,0,0.5)",
                      }}
                    >
                      {l.sub}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: l.bold ? 32 : 24,
                      color: "#000",
                    }}
                  >
                    {l.valor}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: big number + text */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(64px, 10vw, 120px)",
                color: "#000",
                lineHeight: 1,
                marginBottom: 24,
              }}
            >
              R$16k
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 18,
                color: "#000",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Em 12 meses de parceria completa. 1 contrato de frota fechado
              paga os honorários de 3 meses inteiros.{" "}
              <strong>
                Quantos você está perdendo agora porque não aparece no Google?
              </strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      className="resp-section"
      style={{ padding: "120px 32px", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-bebas)",
          fontSize: "clamp(120px, 22vw, 280px)",
          color: "rgba(245,200,0,0.025)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        FECHAR
      </div>

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>10 — Próximo passo</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(48px, 9vw, 100px)",
              color: "#fff",
              lineHeight: 1,
              margin: 0,
              marginBottom: 24,
            }}
          >
            Vamos começar?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 16,
              color: "#888",
              marginBottom: 48,
            }}
          >
            Proposta válida por 7 dias. Início em até 48h após confirmação.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="https://wa.me/5554999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-block",
              backgroundColor: "#F5C800",
              color: "#000",
              fontFamily: "var(--font-bebas)",
              fontSize: 24,
              letterSpacing: "0.08em",
              padding: "20px 48px",
              textDecoration: "none",
              transition: "transform 0.2s",
            }}
          >
            Falar com Yuri no WhatsApp →
          </motion.a>
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: 40,
              fontFamily: "var(--font-barlow)",
              fontSize: 12,
              color: "#555",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Proposta preparada exclusivamente para Fraga Pneus · Biguaçu SC
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function FooterSection() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: 22,
          color: "#F5C800",
          letterSpacing: "0.05em",
        }}
      >
        YURI CORREIA
      </span>
      <span
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: 12,
          color: "#555",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          textAlign: "right",
        }}
      >
        Yuri Correia · Lagoa Vermelha RS / Estratégia + Proposta ·
        Fraga Pneus · 2025
      </span>
    </motion.footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main>
      <NavSection />
      <HeroSection />
      <DiagnosticoSection />
      <EstrategiaSection />
      <EntregaveisSection />
      <CalendarioSection />
      <RoteirosSection />
      <AnunciosSection />
      <CronogramaSection />
      <InvestimentoSection />
      <ResumoSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
