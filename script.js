// ===== Translations =====
// English mirrors the HTML (it is the no-JS fallback); Hungarian is written for Hungarian readers, not translated word for word.
const translations = {
  en: {
    "a11y.skip": "Skip to content",
    "name": "Attila Hartmann",
    "hero.alt": "Portrait of Attila Hartmann",
    "nav.projects": "Projects",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.role": "AI Engineer · Agentic systems & Angular",
    "hero.lede":
      "I build AI systems that hold up in <strong>regulated enterprise workflows</strong>: agents with human approval, fine-tuned models that beat frontier APIs on cost, and the evals, guardrails and cloud plumbing that make them safe to ship.",
    "hero.cta.projects": "See the projects",
    "hero.cta.cv": "Download CV",
    "hero.cta.contact": "Get in touch",
    "hero.meta": "Budapest · open to AI engineering roles, hybrid or remote (EU)",
    "proof.1": "fields correct: my fine-tuned 4B model vs 98.4% for Claude Haiku",
    "proof.2": "lower cost per document, on a single GPU",
    "proof.3": "right decisions by my complaint agent, gated in CI",
    "proof.4": "lessons captured by my team's agentic toolkit in 3 weeks",

    "projects.title": "Two production-grade AI systems, live and open source",
    "projects.subtitle":
      "Built end to end: data, models, evals, guardrails, UI and cloud. Each one comes with a demo, the code and the numbers.",
    "media.claimdesk": "1:22 demo with captions, recorded on the live site",
    "media.clearline": "2:07 demo with captions, including a live prompt-injection attempt",
    "links.live": "Live demo ↗",
    "links.code": "Code ↗",
    "claimdesk.tag": "Insurance · document AI · MLOps",
    "claimdesk.pitch":
      "Claims intake where a fine-tuned 4B open-weight model beats frontier APIs on accuracy, at about 46× lower cost per document, with the MLOps to prove it and roll it back.",
    "claimdesk.m1": "documents fully correct",
    "claimdesk.m2": "cost per 1,000 documents",
    "claimdesk.m3": "input tokens per document",
    "claimdesk.b1": "OCR (Tesseract, Hungarian), a TF-IDF classifier and XGBoost fraud scoring with SHAP reasons",
    "claimdesk.b2": "LoRA fine-tuning of Qwen3-4B, MLflow registry, vLLM serving with versions side by side",
    "claimdesk.b3": "Canary rollout: reviewer feedback and a z-test promoted the new model automatically",
    "claimdesk.b4": "Serverless AWS with Terraform: Lambda, SQS, S3, CloudFront, Bedrock in the EU, OIDC deploys",
    "clearline.tag": "Banking · agents · RAG",
    "clearline.pitch":
      "Agentic complaint resolution for a regulated bank: a customer email goes in, an approved, cited, audit-ready reply comes out, and a person decides before anything is sent.",
    "clearline.m1": "right decisions",
    "clearline.m2": "injection attempts caught",
    "clearline.m3": "model cost per case",
    "clearline.b1": "LangGraph agent with a human-approval interrupt and a full audit trail",
    "clearline.b2": "Hybrid RAG in Postgres (pgvector + full-text) over policy and Hungarian regulation",
    "clearline.b3": "Read-only core-banking tools on an MCP server; PII redaction and injection guardrails",
    "clearline.b4": "Evals as a CI gate, OpenTelemetry traces, EU data-residency rules",

    "work.title": "AI engineering in a real delivery team",
    "work.subtitle": "At Fornax ICT I built and run fornax-fe, the agentic delivery toolkit our frontend group uses every day.",
    "pipe.1": "work item",
    "pipe.2": "analysis",
    "pipe.3": "plan",
    "pipe.4": "implementation",
    "pipe.5": "CI-parity checks",
    "pipe.6": "reviewer sub-agent",
    "pipe.7": "browser QA via MCP",
    "pipe.8": "merge request",
    "work.s1": "developers across 5 enterprise repositories",
    "work.s2": "lessons captured in the first 3 weeks",
    "work.s3": "CI-validated, auto-merged improvement MRs",
    "work.s4": "lessons promoted to team rules",
    "work.c1.title": "A toolkit that learns",
    "work.c1.body":
      "Corrections and failed quality gates become lessons that CI validates and merges on its own, so the agents get better with every task the team ships.",
    "work.c2.title": "Guardrails and cost by design",
    "work.c2.body":
      "Human approval gates, protected paths and git guard hooks; bulk work routed to cheaper OpenAI-compatible models; about 1,600 lines of Python tooling for Azure DevOps and GitLab.",

    "skills.title": "What I work with",
    "skills.subtitle": "Everything listed here is in a repository, a live demo or production work.",

    "exp.title": "Experience",
    "exp.j1.title": "AI Engineer",
    "exp.j1.when": "Feb 2026 – present",
    "exp.j1.li1": "Built and own fornax-fe, an agentic delivery toolkit on Claude Code used by 4–6 developers across 5 enterprise repos.",
    "exp.j1.li2": "Self-improving learning loop: 127 lessons, 39 auto-merged MRs and 9 team rules in the first 3 weeks.",
    "exp.j1.li3": "Rolled out AI-assisted development to the team; AI features from PoC and presales to production, including a design-to-code pipeline.",
    "exp.j2.title": "Frontend Developer",
    "exp.j2.when": "Mar 2023 – present",
    "exp.j2.li1": "Angular UIs and a shared component library for workflow, records-management and GIS platforms.",
    "exp.j2.li2": "End to end: PostgreSQL/Liquibase migrations, jBPM processes and forms, Keycloak/OAuth2, a Node.js GitLab ↔ Azure DevOps webhook service.",
    "exp.j2.li3": "Quality: a Java Selenium UI-test framework; Playwright, Vitest and SonarQube quality gates.",
    "exp.j3.title": "Frontend Developer / IT Business Analyst",
    "exp.j3.when": "Jan 2022 – Mar 2023",
    "exp.j3.li1": "Angular development and business analysis for digital-government projects: requirement specs, procurement templates, service-design workshops.",
    "exp.j4.title": "Business and project roles",
    "exp.j4.body":
      "Real-estate business analyst (financial models, feasibility studies), then project coordinator and manager in international programmes (USA, UK, CEE partners), then public-education procurement and EU grants. It is why I start from the process, the risk and the ROI.",
    "edu.title": "Education",
    "edu.1.what": "MSc, Business Development",
    "edu.2.what": "BSc, Business Administration & Management",
    "cert.title": "Training",
    "cert.1.what": "Junior Frontend Developer",
    "cert.2.what": "e-Administration Expert",

    "contact.title": "Building AI into a regulated business process? Let's talk.",
    "contact.body":
      "I'm open to AI Engineer and Applied AI roles in Budapest or remote in the EU, especially in banking, insurance, telco and the public sector.",
    "contact.cv": "CV (PDF):",
    "footer.note": "Hand-written HTML, CSS and JavaScript. No framework, no tracking.",

    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.toggle.title": "Toggle theme",
  },

  hu: {
    "a11y.skip": "Ugrás a tartalomra",
    "name": "Hartmann Attila",
    "hero.alt": "Hartmann Attila portréja",
    "nav.projects": "Projektek",
    "nav.work": "Munka",
    "nav.skills": "Készségek",
    "nav.experience": "Tapasztalat",
    "nav.contact": "Kapcsolat",

    "hero.role": "AI Engineer · Agentikus rendszerek & Angular",
    "hero.lede":
      "Olyan AI-rendszereket építek, amelyek <strong>szabályozott vállalati folyamatokban</strong> is megállják a helyüket: emberi jóváhagyással dolgozó agenteket, a frontier API-knál olcsóbb finomhangolt modelleket, és mindazt az evalt, korlátot és felhős infrastruktúrát, amitől ezek biztonságosan élesíthetők.",
    "hero.cta.projects": "Projektek",
    "hero.cta.cv": "Önéletrajz letöltése",
    "hero.cta.contact": "Kapcsolat",
    "hero.meta": "Budapest · AI engineer pozíciók érdekelnek, hibrid vagy remote (EU)",
    "proof.1": "helyes mező: a finomhangolt 4B modellem, szemben a Claude Haiku 98,4%-ával",
    "proof.2": "alacsonyabb költség dokumentumonként, egyetlen GPU-n",
    "proof.3": "helyes döntés a panaszkezelő agentemnél, CI-kapuval",
    "proof.4": "lesson, amit a csapatom agentikus toolkitje 3 hét alatt rögzített",

    "projects.title": "Két éles minőségű AI-rendszer, élő demóval és nyílt forráskóddal",
    "projects.subtitle":
      "Teljes egészében megépítve: adat, modell, eval, korlátok, felület és felhő. Mindkettőhöz van demó, kód és mérhető eredmény.",
    "media.claimdesk": "1:22-es demó felirattal, az élő oldalon rögzítve",
    "media.clearline": "2:07-es demó felirattal, egy élő prompt-injection kísérlettel",
    "links.live": "Élő demó ↗",
    "links.code": "Kód ↗",
    "claimdesk.tag": "Biztosítás · dokumentum-AI · MLOps",
    "claimdesk.pitch":
      "Kárbejelentés-feldolgozás, ahol egy finomhangolt, 4 milliárd paraméteres nyílt modell pontosabb a frontier API-knál, dokumentumonként kb. 46-szor olcsóbban, és ehhez megvan az MLOps is, ami ezt bizonyítja és szükség esetén visszaállít.",
    "claimdesk.m1": "hibátlanul feldolgozott dokumentum",
    "claimdesk.m2": "költség 1000 dokumentumra",
    "claimdesk.m3": "bemeneti token dokumentumonként",
    "claimdesk.b1": "OCR (Tesseract, magyar), TF-IDF osztályozó és XGBoost csalásszűrés SHAP-magyarázattal",
    "claimdesk.b2": "Qwen3-4B LoRA-finomhangolása, MLflow-regisztráció, vLLM-kiszolgálás több verzióval egyszerre",
    "claimdesk.b3": "Canary rollout: az ügyintézői visszajelzés és egy z-próba automatikusan élesítette az új modellt",
    "claimdesk.b4": "Szerver nélküli AWS Terraformmal: Lambda, SQS, S3, CloudFront, Bedrock az EU-ban, OIDC-s telepítés",
    "clearline.tag": "Bank · agentek · RAG",
    "clearline.pitch":
      "Agentikus panaszkezelés egy szabályozott bankban: bejön az ügyfél e-mailje, kijön egy jóváhagyott, hivatkozásokkal alátámasztott, auditálható válasz, és mielőtt bármi kimegy, egy ember dönt.",
    "clearline.m1": "helyes döntés",
    "clearline.m2": "kiszűrt injection-kísérlet",
    "clearline.m3": "modellköltség esetenként",
    "clearline.b1": "LangGraph agent emberi jóváhagyási ponttal és teljes audit trail-lel",
    "clearline.b2": "Hibrid RAG Postgresben (pgvector + teljes szöveges keresés) a belső szabályzatokra és a magyar jogszabályokra",
    "clearline.b3": "Csak olvasó core-banking eszközök MCP-szerveren; PII-maszkolás és injection elleni védelem",
    "clearline.b4": "Evalok CI-kapuként, OpenTelemetry tracing, EU-s adattárolási szabályok",

    "work.title": "AI engineering egy valódi fejlesztőcsapatban",
    "work.subtitle": "A Fornax ICT-nél én építettem és gondozom a fornax-fe-t, azt az agentikus toolkitet, amellyel a frontend csapat nap mint nap dolgozik.",
    "pipe.1": "work item",
    "pipe.2": "elemzés",
    "pipe.3": "terv",
    "pipe.4": "implementáció",
    "pipe.5": "CI-ellenőrzések",
    "pipe.6": "reviewer subagent",
    "pipe.7": "böngészős QA (MCP)",
    "pipe.8": "merge request",
    "work.s1": "fejlesztő 5 vállalati repóban",
    "work.s2": "lesson az első 3 hétben",
    "work.s3": "CI által validált, automatikusan merge-elt fejlesztés",
    "work.s4": "lesson, amiből csapatszabály lett",
    "work.c1.title": "Egy toolkit, ami tanul",
    "work.c1.body":
      "A javításokból és a bukott quality gate-ekből lessonök lesznek, amelyeket a CI magától validál és merge-el, így az agentek minden leszállított feladattal jobbak lesznek.",
    "work.c2.title": "Korlátok és költségkontroll beépítve",
    "work.c2.body":
      "Emberi jóváhagyási pontok, védett útvonalak és git guard hookok; a tömeges feladatok olcsóbb, OpenAI-kompatibilis modellekre mennek; kb. 1600 sor Python-eszköz Azure DevOpshoz és GitLabhoz.",

    "skills.title": "Amivel dolgozom",
    "skills.subtitle": "Minden, ami itt szerepel, megtalálható egy repóban, egy élő demóban vagy éles munkában.",

    "exp.title": "Tapasztalat",
    "exp.j1.title": "AI Engineer",
    "exp.j1.when": "2026. február – most",
    "exp.j1.li1": "Megterveztem és gondozom a fornax-fe agentikus fejlesztői toolkitet (Claude Code), amelyet 4–6 fejlesztő használ 5 vállalati repóban.",
    "exp.j1.li2": "Önfejlesztő tanulási hurok: az első 3 hétben 127 lesson, 39 automatikusan merge-elt MR és 9 csapatszabály.",
    "exp.j1.li3": "Bevezettem a csapatnál az AI-támogatott fejlesztést; AI-funkciókon dolgoztam a PoC-tól és a presales-től az éles bevezetésig, köztük egy design-to-code folyamaton.",
    "exp.j2.title": "Frontend fejlesztő",
    "exp.j2.when": "2023. március – most",
    "exp.j2.li1": "Angular felületek és közös komponenskönyvtár workflow-, iratkezelő és GIS-platformokhoz.",
    "exp.j2.li2": "A felülettől az adatbázisig: PostgreSQL/Liquibase migrációk, jBPM folyamatok és űrlapok, Keycloak/OAuth2, Node.js-es GitLab ↔ Azure DevOps webhook-szolgáltatás.",
    "exp.j2.li3": "Minőség: Java Selenium UI-tesztkeretrendszer; Playwright, Vitest és SonarQube quality gate-ek.",
    "exp.j3.title": "Frontend fejlesztő / IT üzleti elemző",
    "exp.j3.when": "2022. január – 2023. március",
    "exp.j3.li1": "Angular-fejlesztés és üzleti elemzés digitális kormányzati projektekben: követelményspecifikáció, beszerzési sablonok, service design workshopok.",
    "exp.j4.title": "Üzleti és projektszerepek",
    "exp.j4.body":
      "Ingatlan-üzleti elemző (pénzügyi modellek, megvalósíthatósági tanulmányok), majd projektkoordinátor és -menedzser nemzetközi programokban (USA, UK, KKE partnerek), aztán közoktatási beszerzések és EU-s pályázatok. Ezért indulok mindig a folyamatból, a kockázatból és a megtérülésből.",
    "edu.title": "Tanulmányok",
    "edu.1.what": "MSc, Vállalkozásfejlesztés",
    "edu.2.what": "BSc, Gazdálkodás és menedzsment",
    "cert.title": "Képzések",
    "cert.1.what": "Junior frontend fejlesztő",
    "cert.2.what": "Elektronikus ügyintézési szakértő",

    "contact.title": "AI-t vezetnél be egy szabályozott üzleti folyamatba? Beszéljünk.",
    "contact.body":
      "AI Engineer és Applied AI pozíciók érdekelnek Budapesten vagy remote az EU-ban, különösen bank, biztosítás, telco és közszféra területén.",
    "contact.cv": "Önéletrajz (PDF):",
    "footer.note": "Kézzel írt HTML, CSS és JavaScript. Nincs keretrendszer, nincs követés.",

    "theme.light": "Világos",
    "theme.dark": "Sötét",
    "theme.toggle.title": "Téma váltása",
  },
};

const CV = { en: "assets/cv/Attila-Hartmann-CV-EN.pdf", hu: "assets/cv/Hartmann-Attila-CV-HU.pdf" };

// ===== i18n Engine =====
let currentLang = "en";

function t(key) {
  return translations[currentLang]?.[key] ?? translations["en"][key] ?? key;
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = translations[lang]?.[el.getAttribute("data-i18n")] ?? translations["en"][el.getAttribute("data-i18n")];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const val = translations[lang]?.[el.getAttribute("data-i18n-html")] ?? translations["en"][el.getAttribute("data-i18n-html")];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const val = translations[lang]?.[el.getAttribute("data-i18n-title")] ?? translations["en"][el.getAttribute("data-i18n-title")];
    if (val !== undefined) el.setAttribute("title", val);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const val = translations[lang]?.[el.getAttribute("data-i18n-alt")] ?? translations["en"][el.getAttribute("data-i18n-alt")];
    if (val !== undefined) el.setAttribute("alt", val);
  });

  document.documentElement.setAttribute("lang", lang);
  const cvLink = document.getElementById("cvLink");
  if (cvLink) cvLink.setAttribute("href", CV[lang] ?? CV.en);

  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  const themeTextEl = document.getElementById("themeText");
  if (themeTextEl) themeTextEl.textContent = translations[lang]?.[theme === "light" ? "theme.light" : "theme.dark"];

  for (const [id, code] of [["langBtnEn", "en"], ["langBtnHu", "hu"]]) {
    const btn = document.getElementById(id);
    if (btn) {
      btn.classList.toggle("active", lang === code);
      btn.setAttribute("aria-pressed", String(lang === code));
    }
  }
}

function getLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang === "hu" || urlLang === "en") return urlLang;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "hu" || saved === "en") return saved;
  } catch {}
  return "en";
}

function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  const url = new URL(window.location.href);
  if (lang === "en") url.searchParams.delete("lang");
  else url.searchParams.set("lang", lang);
  history.pushState({ lang }, "", url);
  applyTranslations(lang);
}

// ===== DOM refs =====
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function toggleMenu() {
  const isOpen = mobileNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
}

// ===== Theme Toggle =====
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {}
  if (themeIcon) themeIcon.textContent = theme === "light" ? "☀" : "☾";
  if (themeText) themeText.textContent = t(theme === "light" ? "theme.light" : "theme.dark");
}

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

// ===== Initialise =====
// Language must be set before theme so the theme label is in the right language
currentLang = getLanguage();
setTheme(getPreferredTheme());
applyTranslations(currentLang);

// ===== Event Listeners =====
themeBtn?.addEventListener("click", () => {
  setTheme((document.documentElement.getAttribute("data-theme") || "dark") === "dark" ? "light" : "dark");
});

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", toggleMenu);
  mobileNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    }),
  );
}

document.getElementById("langBtnEn")?.addEventListener("click", () => setLanguage("en"));
document.getElementById("langBtnHu")?.addEventListener("click", () => setLanguage("hu"));

window.addEventListener("popstate", (e) => {
  currentLang = e.state?.lang ?? getLanguage();
  applyTranslations(currentLang);
});

// Only one demo video plays at a time
const videos = [...document.querySelectorAll("video")];
videos.forEach((v) => v.addEventListener("play", () => videos.forEach((o) => o !== v && o.pause())));

// Reveal sections as they scroll in (CSS animates only when the user has not asked for reduced motion)
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".section-head, .project, .card, .pipeline, .tl-item, .contact-card").forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}
