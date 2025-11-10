import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.14),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance projects
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white">
          Building immersive, performant experiences for the modern web
        </h1>
        <p className="mt-6 max-w-2xl text-white/70 text-lg">
          Full‑stack developer crafting futuristic interfaces, scalable APIs, and
          delightful 3D interactions.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium px-5 py-3 transition shadow-lg shadow-cyan-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
