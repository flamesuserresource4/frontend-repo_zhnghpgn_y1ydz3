import React from 'react';
import { Star, Image as ImageIcon, MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/6285520926801?text=Assalamu%20Alaikum%2C%20Hello%2C%20RAVEN%20CCTV!';

// Simple gallery placeholders using gradients to mimic before/after blocks.
// In a real deployment, replace with actual photos.
const GalleryItem = ({ label }) => (
  <div className="relative overflow-hidden rounded-lg border border-white/10">
    <div className="aspect-video w-full bg-gradient-to-br from-zinc-800 to-zinc-700" />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm text-white/90">
      {label}
    </div>
  </div>
);

export default function PortfolioAndTestimonials() {
  const reviews = [
    {
      name: 'Budi Santoso',
      text: 'Timnya responsif, pemasangan rapi, hasil gambar jelas. Sangat direkomendasikan untuk toko kecil saya di Bandung!'
    },
    {
      name: 'Nadia Pramesti',
      text: 'Teknisi sopan dan profesional. After-sales cepat ketika ada kamera offline.'
    },
    {
      name: 'Raka Putra',
      text: 'Harga sebanding dengan kualitas. Kabel disembunyikan rapi, estetik untuk rumah.'
    },
  ];

  return (
    <section className="relative w-full bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-orange-400">
              <ImageIcon className="h-5 w-5" />
              <h2 className="text-2xl font-semibold sm:text-3xl">Our Work</h2>
            </div>
            <p className="mb-6 max-w-prose text-white/70">
              Before vs After from recent projects — messy cables turned neat, cameras repositioned for optimal views, and stable systems that just work.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <GalleryItem label="Before: Messy Cabling" />
              <GalleryItem label="After: Neat & Hidden Cables" />
              <GalleryItem label="Before: Blurry Footage" />
              <GalleryItem label="After: Crystal-Clear View" />
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 text-orange-400">
              <MessageCircle className="h-5 w-5" />
              <h2 className="text-2xl font-semibold sm:text-3xl">What Our Customers Say</h2>
            </div>
            <div className="space-y-4">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-xl border border-white/10 bg-zinc-900 p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">{r.name}</span>
                    <div className="flex items-center text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-white/80">{r.text}</p>
                </div>
              ))}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm text-orange-400 underline underline-offset-4 hover:text-orange-300"
              >
                View more reviews on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">Protect Your Property Today!</h3>
          <p className="mx-auto mt-2 max-w-xl text-white/70">Get a free consultation with our professional CCTV team.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-base font-medium text-black transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Contact Raven Security Bandung Now
          </a>
        </div>
      </div>
    </section>
  );
}
