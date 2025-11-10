const PROJECTS = [
  {
    title: "Neon Commerce Platform",
    description:
      "Headless e‑commerce with serverless functions, Stripe payments, and edge‑cached product pages.",
    stack: ["Next.js", "FastAPI", "Stripe", "Postgres"],
    link: "#",
  },
  {
    title: "Realtime Collaboration Suite",
    description:
      "CRDT‑powered docs, presence, and audio rooms with WebRTC and fine‑grained access control.",
    stack: ["React", "WebRTC", "Redis", "Tailwind"],
    link: "#",
  },
  {
    title: "3D Visualization Dashboard",
    description:
      "Interactive Spline scenes with analytics overlays and GPU‑accelerated charts.",
    stack: ["Spline", "Three.js", "Vite", "D3"],
    link: "#",
  },
];

function Card({ title, description, stack, link }) {
  return (
    <a
      href={link}
      className="group relative block rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10" />
      <div className="relative">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-white/70 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="text-xs text-cyan-200/90 bg-cyan-500/10 border border-cyan-400/20 px-2 py-1 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
            <p className="mt-2 text-white/60">A few recent projects and experiments</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-cyan-300 hover:text-cyan-200">Get in touch →</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
