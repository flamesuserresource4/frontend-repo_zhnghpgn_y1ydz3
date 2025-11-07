import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    'Old CCTV installations that look messy and unprofessional',
    'Difficult to reach your previous technician when CCTV stops working',
    'Blurry footage or cameras frequently offline',
    'No warranty or regular maintenance service',
  ];

  return (
    <section className="relative w-full bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <AlertTriangle className="h-3.5 w-3.5 text-orange-400" />
            <span>Have You Faced These Problems?</span>
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Have You Faced These Problems?</h2>
          <p className="mt-3 max-w-prose text-white/70">
            Common issues we solve for homes, shops, cafes, offices, and boarding houses across Bandung.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-white/10 bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 p-5 shadow-lg backdrop-blur transition hover:border-orange-400/40"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-orange-500/10 text-orange-400">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <p className="text-white/90">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
