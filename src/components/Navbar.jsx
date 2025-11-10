import { Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-md bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 border border-white/10 group-hover:from-cyan-400/50 group-hover:to-fuchsia-400/50 transition-colors">
            <Rocket className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="text-white font-semibold tracking-wide">Dev Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/80 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="p-2 rounded-md border border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20 transition"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
