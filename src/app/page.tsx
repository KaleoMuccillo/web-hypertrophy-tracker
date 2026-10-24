"use client";

import { useState } from "react";

export default function Home() {
  const [PaginaAtiva, setPaginaAtiva] = useState("Dashboard");
  const paginas = ["Dashboard", "Peso", "Dieta", "Treinos"];

  return (
    <main className="min-h-screen bg-[#100d17] text-[#FAF7FF] flex">
      <aside className="w-64 min-h-screen bg-[#050407]">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#6138db]">
            Hypertrophy Tracker
          </h2>

          <nav className="mt-8 flex flex-col gap-4">
            {paginas.map((pagina) => (
              <button
                key={pagina}
                onClick={() => {
                  setPaginaAtiva(pagina);
                  alert(
                    "Você acabou de dar gratuitamente seus dados para o governo chines, parabéns!",
                  );
                }}
                className={
                  pagina === PaginaAtiva
                    ? "text-[#6138db] font-bold text-left"
                    : "text-[#A78BFA] hover:text-[#6138db] text-left transition-colors font-semibold"
                }
              >
                {pagina}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <section className="flex-1 p-8">
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
            Visão geral
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#FAF7FF]">
            Dashboard
          </h1>

          <p className="mt-2 text-[#A78BFA]">Acompanhe sua evolução.</p>
        </header>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <CardIndicador
            titulo="Peso Atual"
            valor="59,0 kg"
            descricao="Último Registro 19/09/1999"
          />
          <CardIndicador
            titulo="Treinos"
            valor="0/3"
            descricao="Nesta Semana"
          />
        </div>
      </section>
    </main>
  );
}

type CardIndicadorProps = {
  titulo: string;
  valor: string;
  descricao: string;
};

function CardIndicador({ titulo, valor, descricao }: CardIndicadorProps) {
  return (
    <div className="rounded-xl border border-[#38294d] bg-[#21182f] p-5">
      <p className="text-sm text-[#b7adca]">{titulo}</p>

      <h2 className="mt-3 text-3xl font-bold text-[#FAF7FF]">{valor}</h2>

      <p className="mt-2 text-sm text-[#A78BFA]">{descricao}</p>
    </div>
  );
}
