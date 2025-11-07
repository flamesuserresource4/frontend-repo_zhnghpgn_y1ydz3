import React from 'react';
import { BadgeCheck, Users, Palette, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Warranty & Responsive Support',
      desc: 'Every installation comes with an official service warranty.',
      icon: BadgeCheck,
    },
    {
      title: 'Professional & Experienced Team',
      desc: 'Certified, polite, and skilled technicians.',
      icon: Users,
    },
    {
      title: 'Neat & Aesthetic Installation',
      desc: 'Clean, visually pleasing work suitable for homes or businesses.',
      icon: Palette,
    },
    {
      title: 'Not the Cheapest, But the Most Reliable',
      desc: 'We focus on quality, safety, and long-term peace of mind.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative w-full bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why Choose Raven Security Bandung?</h2>
          <p className="mt-3 text-white/70">Our promise for quality, reliability, and professional results.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
              <div className="mb-3 inline-flex rounded-lg bg-orange-500/10 p-3 text-orange-400 ring-1 ring-orange-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
