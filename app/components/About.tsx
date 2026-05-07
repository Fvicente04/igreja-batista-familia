"use client";

import { useState } from "react";
import Image from "next/image";

function PastorPhoto() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-800">
      <div className={`absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center transition-opacity duration-500 ${loaded && !error ? "opacity-0" : "opacity-100"}`}>
        <svg className="w-20 h-20 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      {!error && (
        <Image
          src="/pastor.jpg"
          alt="Pastor Presidente"
          fill
          className={`object-cover object-top transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

const pillars = [
  {
    title: "Adoração",
    description: "Cada culto é um convite para encontrar a Deus de forma real e pessoal.",
    icon: (
      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Discipulado",
    description: "Investimos em pessoas para que cresçam como discípulos maduros de Cristo.",
    icon: (
      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Missão",
    description: "Levamos o Evangelho além dos muros da igreja, com amor prático e testemunho vivo.",
    icon: (
      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-16">

      {/* Bloco 1 — Identidade + pilares */}
      <div className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-500 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Quem Somos
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold text-zinc-900 leading-tight max-w-4xl mb-8">
            Uma igreja que acredita em Jesus, que ama a Deus e às pessoas.
          </h2>
          <div className="w-16 h-1 bg-amber-400 mb-8" />
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl mb-20">
            A Igreja Batista da Família é uma comunidade cristã contemporânea fundada sobre a Palavra de Deus,
            comprometida em ver vidas transformadas pelo poder do Evangelho de Jesus Cristo.
          </p>

          <div className="grid sm:grid-cols-3 gap-10">
            {pillars.map((p) => (
              <div key={p.title} className="border-t border-zinc-100 pt-8">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-3">{p.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bloco 2 — Pastor */}
      <div className="bg-zinc-950 py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-sm mx-auto lg:mx-0">
            <PastorPhoto />
          </div>
          <div>
            <p className="text-amber-400 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              Liderança
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Pastor Presidente
            </h3>
            <div className="w-12 h-0.5 bg-amber-400 mb-8" />
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Chamado por Deus para liderar com visão, integridade e amor,
              nosso pastor presidente tem dedicado sua vida a ver pessoas encontrarem
              propósito e transformação através de Jesus Cristo.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Sob sua liderança, a Igreja Batista da Família tem crescido como uma
              comunidade de fé vibrante, comprometida com a adoração, o discipulado
              e o serviço à nossa cidade.
            </p>
          </div>
        </div>
      </div>

      {/* Bloco 3 — Versículo */}
      <div className="bg-amber-400 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-black/30 text-7xl font-serif leading-none block mb-6">&ldquo;</span>
          <blockquote className="text-2xl sm:text-3xl font-bold text-black leading-relaxed mb-8">
            Porque onde dois ou três estiverem reunidos em meu nome,
            aí estou eu no meio deles.
          </blockquote>
          <p className="text-black/60 font-semibold text-sm tracking-widest uppercase">
            Mateus 18:20
          </p>
        </div>
      </div>

    </section>
  );
}
