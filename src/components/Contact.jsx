import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <Mail className="h-6 w-6 text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s build something</h2>
        </div>
        <p className="mt-2 text-white/70">Share a few details and I’ll get back within 24 hours.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
          <input
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
          <textarea
            rows={5}
            required
            placeholder="Project details"
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-black font-medium px-5 py-3 transition"
          >
            <Send className="h-4 w-4" />
            Send message
          </button>
          {status === "sent" && (
            <p className="text-emerald-300">Thanks! Your message has been queued.</p>
          )}
        </form>

        <p className="mt-10 text-xs text-white/40">
          This is a demo form. Hook it to your backend or a service like Resend.
        </p>
      </div>
    </section>
  );
}
