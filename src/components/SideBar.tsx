"use client";

import { useState } from "react";
import { LayoutDashboard, Scale, Utensils, Dumbbell } from "lucide-react";

export default function SideBar() {
  const [paginaAtiva, setPaginaAtiva] = useState("Dashboard");
  const paginas = [
    { nome: "Dashboard", icone: <LayoutDashboard size={28} /> },
    { nome: "Peso", icone: <Scale size={28} /> },
    { nome: "Dieta", icone: <Utensils size={28} /> },
    { nome: "Treinos", icone: <Dumbbell size={28} /> },
  ];
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`min-h-screen transition-all duration-300 bg-[#050407] ${
        isOpen ? "w-64" : "w-14"
      }`}
    >
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-10 rounded-full p-2 m-2 bg-[#181224]"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#6138db]">
            Hypertrophy Tracker
          </h2>
        </div>
      )}

      <nav className="mt-8 flex flex-col gap-4">
        {paginas.map((pagina) => (
          <button
            key={pagina.nome}
            title={pagina.nome}
            onClick={() => {
              setPaginaAtiva(pagina.nome);
            }}
            className={`transition-colors flex items-center rounded-lg py-2 ${
              isOpen ? "gap-3 px-3 text-left" : "justify-center px-0"
            } ${
              pagina.nome === paginaAtiva
                ? "bg-[#6138db]/20 text-[#FAF7FF] font-bold"
                : "text-[#A78BFA] hover:bg-[#181224] hover:text-[#6138db] font-semibold"
            }`}
          >
            {isOpen ? (
              <>
                {pagina.icone} {pagina.nome}
              </>
            ) : (
              pagina.icone
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
