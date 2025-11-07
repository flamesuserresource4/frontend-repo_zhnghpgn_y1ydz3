import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Phone } from 'lucide-react';

const WA_LINK = 'https://wa.me/6285520926801?text=Assalamu%20Alaikum%2C%20Hello%2C%20RAVEN%20CCTV!';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-6 pt-28 text-center sm:pt-36">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-orange-400" />
          <span>Trusted to Watch, Reliable to Protect</span>
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Professional CCTV Solutions in Bandung
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Neat, Guaranteed Installation with Fast After-Sales Support. We’re not the cheapest, but we’re the most professional.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-base font-medium text-black transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <Phone className="h-5 w-5" />
            Get a Free Consultation via WhatsApp
          </a>
          <div className="text-sm text-white/60">Bandung & surrounding areas</div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
