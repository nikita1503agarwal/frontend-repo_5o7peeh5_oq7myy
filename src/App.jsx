import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/60">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm">Built with React, Tailwind, and Spline.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
