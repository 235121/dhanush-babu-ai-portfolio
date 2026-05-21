import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { ParticlesBg } from "./ParticlesBg";

/* ============================== HERO ============================== */

const TYPED = [
  "ML Enthusiast",
  "Full Stack Developer",
  "Data Science Explorer",
  "IoT Tinkerer",
];

function TypeLoop() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = TYPED[i];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % TYPED.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="neon-text">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary translate-y-1 ml-1 animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* background fx */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="blob animate-float-slow" style={{ background: "var(--neon-cyan)", width: 500, height: 500, top: "-10%", left: "-10%" }} />
      <div className="blob animate-float-slow" style={{ background: "var(--neon-violet)", width: 600, height: 600, bottom: "-20%", right: "-15%", animationDelay: "3s" }} />
      <ParticlesBg />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for internships
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="neon-text">Dhanush Babu</span>
          </motion.h1>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 font-heading text-xl sm:text-2xl md:text-3xl text-foreground/80"
          >
            B.Tech IT Student <span className="text-foreground/30">/</span> <TypeLoop />
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 max-w-2xl text-base sm:text-lg text-foreground/65 leading-relaxed"
          >
            I build intelligent and interactive digital experiences using Machine Learning,
            Web Technologies, and modern UI engineering.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:scale-105 animate-pulse-glow">
              <span className="relative z-10">View Projects</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-7 py-3.5 font-medium text-primary backdrop-blur transition-all hover:bg-primary/15 hover:neon-glow-cyan">
              Hire Me
            </a>
            <a href="#resume" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium text-foreground/80 transition-all hover:border-white/30 hover:bg-white/5">
              <DownloadIcon /> Resume
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="mt-20 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/40"
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="h-10 w-[2px] bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

/* ============================== Section helpers ============================== */

function SectionHeading({ kicker, title, blurb }: { kicker: string; title: string; blurb?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <div className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">{kicker}</div>
      <h2 className="font-heading text-4xl sm:text-5xl font-bold">
        <span className="neon-text">{title}</span>
      </h2>
      {blurb && <p className="mt-4 text-foreground/60">{blurb}</p>}
    </motion.div>
  );
}

/* ============================== ABOUT ============================== */

export function About() {
  const facts = [
    { k: "2026", v: "Graduation year" },
    { k: "IT", v: "B.Tech specialization" },
    { k: "ML + Web", v: "Focus areas" },
    { k: "KLNCE", v: "K.L.N College of Engineering" },
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="blob" style={{ background: "var(--neon-violet)", width: 400, height: 400, top: "10%", right: "5%", opacity: 0.25 }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading kicker="01 — About" title="The story so far" />
        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass rounded-3xl p-8 sm:p-10"
          >
            <p className="text-foreground/85 leading-relaxed">
              I'm a <span className="text-primary">pre-final year B.Tech Information Technology</span> student at
              K.L.N College of Engineering. My playground sits at the intersection of
              Machine Learning, Data Science, IoT, and modern web development.
            </p>
            <p className="mt-4 text-foreground/65 leading-relaxed">
              I love turning ideas into intelligent, real-world products — whether it's
              detecting fake profiles with NLP, building responsive interfaces, or
              wiring sensors into something useful. I'm endlessly curious and quick to
              adapt to new tools and stacks.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Machine Learning", "Web Development", "Data Science", "IoT"].map((t) => (
                <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {facts.map((f) => (
              <div key={f.v} className="glass rounded-2xl p-5 transition-all hover:border-primary/40 hover:-translate-y-1">
                <div className="font-heading text-2xl font-bold neon-text">{f.k}</div>
                <div className="mt-2 text-xs text-foreground/55">{f.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================== SKILLS ============================== */

const SKILL_GROUPS: { title: string; items: { name: string; level: number }[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Flask", level: 82 },
      { name: "Python", level: 90 },
    ],
  },
  {
    title: "Machine Learning",
    items: [
      { name: "NLP", level: 80 },
      { name: "TF-IDF", level: 85 },
      { name: "Logistic Regression", level: 82 },
      { name: "Random Forest", level: 80 },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C", level: 80 },
      { name: "C++", level: 78 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "GitHub", level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading kicker="02 — Skills" title="What I work with" blurb="A toolkit honed across coursework, side projects, and late-night experiments." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="group glass rounded-2xl p-6 transition-all hover:border-primary/40 hover:-translate-y-1 hover:neon-glow-cyan"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                <span className="text-xs text-foreground/40">{String(gi + 1).padStart(2, "0")}</span>
              </div>
              <ul className="space-y-4">
                {group.items.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground/80">{s.name}</span>
                      <span className="text-xs text-primary/70">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== PROJECTS ============================== */

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ry.set(x * 12);
    rx.set(-y * 12);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const PROJECTS = [
  {
    title: "Fake Profile Detection on Reddit",
    tag: "Machine Learning · NLP",
    description:
      "ML system to identify fake Reddit profiles using NLP and behavioral analysis. TF-IDF feature extraction with Logistic Regression, Random Forest, and Gradient Boosting. Flask backend with a web UI for real-time prediction.",
    stack: ["Python", "NLP", "TF-IDF", "Flask", "Scikit-learn"],
    featured: true,
    github: "https://github.com/dhanushbabu/fake-profile-detection-reddit",
    liveDemo: "https://fake-profile-detection.onrender.com",
  },
  {
    title: "Coming Soon",
    tag: "Web · Full Stack",
    description: "An interactive dashboard project. Stay tuned — currently shipping.",
    stack: ["React", "Tailwind", "Node"],
    github: null,
    liveDemo: null,
  },
  {
    title: "Coming Soon",
    tag: "IoT · Data",
    description: "Sensor-driven analytics build. Hardware meets real-time visualisation.",
    stack: ["ESP32", "Python", "MQTT"],
    github: null,
    liveDemo: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="blob" style={{ background: "var(--neon-cyan)", width: 500, height: 500, top: "20%", left: "-10%", opacity: 0.2 }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading kicker="03 — Projects" title="Things I've built" blurb="Selected work across ML, web, and experimentation." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={p.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <TiltCard>
                <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all hover:border-primary/40">
                  <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent 70%)" }} />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-primary/80">{p.tag}</span>
                      {p.featured && (
                        <span className="rounded-full bg-secondary/15 px-3 py-1 text-[10px] uppercase tracking-wider text-secondary">Featured</span>
                      )}
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-semibold transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/65">{p.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/70">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex items-center gap-3">
                      {p.github ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-4 py-2 text-xs text-primary transition-colors hover:bg-primary/25"
                        >
                          <Github className="h-3.5 w-3.5" /> GitHub
                        </a>
                      ) : null}
                      {p.liveDemo ? (
                        <a
                          href={p.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs text-foreground/80 transition-colors hover:border-white/30 hover:bg-white/5"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                        </a>
                      ) : null}
                      {!p.github && !p.liveDemo && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-foreground/40">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== RESUME ============================== */

function Counter({ to, label, suffix = "" }: { to: number; label: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1500;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center transition-transform hover:-translate-y-1">
      <div className="font-heading text-4xl font-bold neon-text">{n}{suffix}</div>
      <div className="mt-2 text-xs uppercase tracking-wider text-foreground/55">{label}</div>
    </div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="relative py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading kicker="04 — Resume" title="By the numbers" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Counter to={5} suffix="+" label="ML Projects Completed" />
          <Counter to={12} suffix="+" label="Technologies Learned" />
          <Counter to={100} suffix="%" label="Internship Ready" />
          <Counter to={24} suffix="/7" label="Problem Solver" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid gap-8 md:grid-cols-2 items-center glass rounded-3xl p-8 sm:p-10"
        >
          <div>
            <h3 className="font-heading text-2xl font-semibold">Grab the full resume</h3>
            <p className="mt-3 text-foreground/65">
              A single PDF with my education, projects, skills, and contact info — ready
              for your inbox or ATS.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-medium text-primary-foreground animate-pulse-glow transition-transform hover:scale-105">
              <DownloadIcon /> Download Resume
            </a>
          </div>
          <div className="relative mx-auto h-64 w-48 rounded-xl glass-strong p-4 shadow-2xl rotate-3 transition-transform hover:rotate-0">
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded bg-gradient-to-r from-primary to-secondary" />
              <div className="h-2 w-1/2 rounded bg-white/15" />
              <div className="mt-4 space-y-1.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${60 + (i * 7) % 40}%` }} />
                ))}
              </div>
              <div className="mt-3 h-2 w-1/3 rounded bg-primary/40" />
              <div className="mt-2 space-y-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${50 + (i * 11) % 45}%` }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== CODING PROFILES ============================== */

const PROFILES = [
  { name: "GitHub", handle: "@dhanushbabu", color: "from-white to-white/60", icon: "GH" },
  { name: "LinkedIn", handle: "in/dhanushbabu", color: "from-[#0a66c2] to-[#0a66c2]/60", icon: "Li" },
  { name: "LeetCode", handle: "/dhanushbabu", color: "from-[#ffa116] to-[#ffa116]/60", icon: "LC" },
  { name: "SkillRack", handle: "/dhanushbabu", color: "from-[#22c55e] to-[#22c55e]/60", icon: "SR" },
  { name: "HackerRank", handle: "/dhanushbabu", color: "from-[#00ea64] to-[#00ea64]/60", icon: "HR" },
];

export function Profiles() {
  return (
    <section id="profiles" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading kicker="05 — Profiles" title="Find me coding" blurb="Where I commit, compete, and connect." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PROFILES.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.07, type: "spring" }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:border-primary/40 hover:neon-glow-cyan"
            >
              <div className={`mx-auto mb-4 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${p.color} font-heading font-bold text-background`}>
                {p.icon}
              </div>
              <div className="font-heading font-semibold">{p.name}</div>
              <div className="mt-1 text-xs text-foreground/55">{p.handle}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Visit →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== ARTICLES ============================== */

const ARTICLES = [
  { title: "Detecting Fake Profiles with NLP", time: "8 min read", tag: "Machine Learning" },
  { title: "Why TF-IDF still matters in 2026", time: "5 min read", tag: "Data Science" },
  { title: "Building Glassmorphism in React", time: "6 min read", tag: "Web Development" },
];

export function Articles() {
  return (
    <section id="articles" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading kicker="06 — Writing" title="Featured articles" blurb="Notes from things I'm learning. (Coming soon.)" />
        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass overflow-hidden rounded-2xl transition-all hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-background" />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <span className="absolute bottom-3 left-4 rounded-full bg-background/60 px-3 py-1 text-xs text-primary backdrop-blur">{a.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-primary">{a.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-foreground/55">
                  <span>{a.time}</span>
                  <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">Read →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== CONTACT ============================== */

export function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  const socials = ["LinkedIn", "GitHub", "Instagram", "YouTube", "Twitter"];

  return (
    <section id="contact" className="relative py-32">
      <div className="blob animate-float-slow" style={{ background: "var(--neon-violet)", width: 500, height: 500, bottom: "0%", left: "-10%", opacity: 0.25 }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading kicker="07 — Contact" title="Let's talk" blurb="Internship, freelance, or just a hello — my inbox is open." />
        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 space-y-5"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.name} className="relative">
                <input
                  required
                  name={f.name}
                  type={f.type}
                  placeholder=" "
                  className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-6 pb-2 text-foreground outline-none transition-all focus:border-primary/60 focus:bg-white/10"
                />
                <label className="pointer-events-none absolute left-4 top-2 text-xs text-foreground/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                  {f.label}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                required
                name="message"
                rows={5}
                placeholder=" "
                className="peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 pt-6 pb-2 text-foreground outline-none transition-all focus:border-primary/60 focus:bg-white/10"
              />
              <label className="pointer-events-none absolute left-4 top-2 text-xs text-foreground/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                Message
              </label>
            </div>
            <button
              type="submit"
              disabled={busy}
              className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 animate-pulse-glow"
            >
              {busy ? "Sending..." : "Send Message"}
            </button>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary"
              >
                ✓ Message sent — I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-3xl p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Email</div>
              <div className="mt-2 font-heading text-xl">dhanushbabu@example.com</div>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Location</div>
              <div className="mt-2 font-heading text-xl">Madurai, Tamil Nadu, India</div>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Socials</div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/80 transition-all hover:border-primary/40 hover:text-primary hover:neon-glow-cyan"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================== FINAL CTA + FOOTER ============================== */

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <motion.div style={{ y }} className="blob" />
      <div className="blob" style={{ background: "var(--neon-cyan)", width: 700, height: 700, top: "-30%", left: "50%", transform: "translateX(-50%)", opacity: 0.2 }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold"
        >
          Let's build something{" "}
          <span className="neon-text animate-pulse">amazing</span> together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-lg text-foreground/65"
        >
          Open to internships, freelance projects, and collaborations in ML & web.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-105 animate-pulse-glow">
            Hire Me
          </a>
          <a href="#contact" className="rounded-full border border-primary/40 bg-primary/5 px-8 py-4 font-medium text-primary backdrop-blur transition-all hover:bg-primary/15 hover:neon-glow-cyan">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-foreground/55">
          © {new Date().getFullYear()} Dhanush Babu — Crafted with care.
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-foreground/40">
          Designed & built end-to-end
        </div>
      </div>
    </footer>
  );
}
