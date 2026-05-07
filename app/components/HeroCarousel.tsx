"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    tag: null,
    eyebrow: "Igreja Batista da Família",
    title: "Bem-vindo à nossa família.",
    description: "Uma comunidade cristã que acredita em Jesus, ama a Deus e serve às pessoas. Você é esperado aqui.",
    image: "/celebracao_anuncio.jpg",
    gradient: "from-black via-black/60",
    cta: { label: "Conheça nossa história", href: "/#sobre" },
    ctaSecondary: { label: "Venha nos visitar", href: "/#localizacao" },
  },
  {
    tag: "Evento",
    eyebrow: "01 de Junho",
    title: "One Way",
    description: "Dois dias de pregação, louvor e comunhão voltados para a juventude. Venha fazer parte.",
    image: "/oneway_anuncio.jpg",
    gradient: "from-purple-950 via-black/70",
    cta: { label: "Ver eventos", href: "/#eventos" },
    ctaSecondary: null,
  },
  {
    tag: "Evento",
    eyebrow: "18 de Maio",
    title: "Escola Bíblica",
    description: "Estudo da Palavra de Deus com foco em discipulado e transformação.",
    image: "/escola_biblica.jpg",
    gradient: "from-amber-950 via-black/70",
    cta: { label: "Ver eventos", href: "/#eventos" },
    ctaSecondary: null,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setProgress(0);
      setFading(false);
    }, 400);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => setProgress((p) => Math.min(p + 100 / 60, 100)), 100);
    return () => clearInterval(interval);
  }, [current]);

  const slide = slides[current];

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden bg-black">

      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current && !fading ? "opacity-100" : "opacity-0"}`}
        >
          {/* Fallback gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} to-black animate-pulse`} />
          {/* Real image */}
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            unoptimized
            className="object-cover opacity-65"
            onError={() => {}}
          />
        </div>
      ))}

      {/* Bottom gradient for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      {/* Side gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div
        className="absolute bottom-28 left-8 sm:left-16 right-8 sm:right-1/2 z-10 transition-all duration-500"
        style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(12px)" : "translateY(0)" }}
      >
        <div className="flex items-center gap-3 mb-5">
          {slide.tag && (
            <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest bg-amber-400 text-black">
              {slide.tag}
            </span>
          )}
          <span className="text-white/60 text-sm font-medium">{slide.eyebrow}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-5 max-w-xl">
          {slide.title}
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-md mb-8">
          {slide.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={slide.cta.href}
            className="inline-flex h-12 items-center px-8 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors"
          >
            {slide.cta.label}
          </Link>
          {slide.ctaSecondary && (
            <Link
              href={slide.ctaSecondary.href}
              className="inline-flex h-12 items-center px-8 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              {slide.ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        aria-label="Próximo"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots + progress */}
      <div className="absolute bottom-10 left-8 sm:left-16 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300 bg-white/30"
            style={{ width: i === current ? 40 : 16 }}
            aria-label={`Slide ${i + 1}`}
          >
            {i === current && (
              <div
                className="absolute inset-y-0 left-0 bg-amber-400 rounded-full"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

    </section>
  );
}
