import React from 'react';
import { Wrench, Camera, RefreshCcw, PlusCircle } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'New CCTV Installation',
      desc: 'Neat wiring, hidden cables, clean and aesthetic results.',
      icon: Camera,
    },
    {
      title: 'CCTV Repair & Troubleshooting',
      desc: 'Specialists in fixing dead/offline cameras with fast response.',
      icon: Wrench,
    },
    {
      title: 'Scheduled Maintenance (for Businesses)',
      desc: 'Routine service to keep your CCTV system running optimally.',
      icon: RefreshCcw,
    },
    {
      title: 'Upgrade & Add Camera Points',
      desc: 'Add new camera points without damaging existing setups.',
      icon: PlusCircle,
    },
  ];

  return (
    <section className="relative w-full bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-white/70">Focused solutions for homes and small businesses in Bandung.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="mb-4 inline-flex rounded-lg bg-orange-500/10 p-3 text-orange-400 ring-1 ring-orange-500/20">
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
