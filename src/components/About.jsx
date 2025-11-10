export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">About</h2>
        <p className="mt-4 text-white/70 leading-relaxed">
          I’m a full‑stack developer focused on crafting elegant, scalable systems and immersive UIs.
          I blend performance, accessibility, and motion to build experiences that feel effortless.
          From design systems and real‑time backends to 3D interfaces and data visualization, I love
          shipping products that users remember.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <p className="text-4xl font-semibold text-white">7+</p>
            <p className="text-white/60 text-sm">Years building for the web</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <p className="text-4xl font-semibold text-white">30+</p>
            <p className="text-white/60 text-sm">Projects shipped end‑to‑end</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <p className="text-4xl font-semibold text-white">100ms</p>
            <p className="text-white/60 text-sm">Perf budget I obsess over</p>
          </div>
        </div>
      </div>
    </section>
  );
}
