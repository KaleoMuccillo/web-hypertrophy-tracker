"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

import CardIndicador from "../components/CardIndicador";
import SideBar from "../components/SideBar";
import { Scale, Dumbbell, Flame } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [nomeUsuario, setNomeUsuario] = useState("");

  useEffect(() => {
    async function carregarUsuario() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.replace("/login");
        return;
      }

      const nome = data.user.user_metadata?.displayName;

      if (nome) {
        setNomeUsuario(nome);
      }
    }

    carregarUsuario();
  }, []);
  return (
    <main className="min-h-screen bg-[#100d17] text-[#FAF7FF] flex">
      <SideBar />
      <section className="min-w-0 flex-1 p-6 md:p-10">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
            Visão geral
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#FAF7FF]">
            {nomeUsuario ? `Olá, ${nomeUsuario}!` : "Dashboard"}
          </h1>

          <p className="mt-2 text-[#A78BFA]">Acompanhe sua evolução.</p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <CardIndicador
            titulo="Peso Atual"
            valor="59,0 kg"
            descricao="Último Registro 19/09/1999"
            icone={<Scale size={24} />}
          />
          <CardIndicador
            titulo="Treinos"
            valor="0/3"
            descricao="Nesta Semana"
            icone={<Dumbbell size={24} />}
          />
          <CardIndicador
            titulo="Meta Calórica"
            valor="1500 / 2341 kcal"
            descricao="Consumo / Meta Diária"
            icone={<Flame size={24} />}
            caloriasConsumidas={1500}
            metaCalorica={2000}
          />
        </div>
      </section>
    </main>
  );
}
