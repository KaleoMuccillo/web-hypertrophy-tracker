"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [criarConta, setCriarConta] = useState(false);
  const [displayName, setDisplayName] = useState("");
  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Erro ao entrar: " + error.message);
      return;
    }

    alert("Login realizado com sucesso!");
    router.push("/");
  }
  async function handleCriarConta() {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          displayName: displayName,
        },
      },
    });

    if (error) {
      alert("Erro ao criar conta: " + error.message);
      return;
    }

    alert("Cadastro criado!");
  }

  return (
    <main className="min-h-screen bg-[#100d17] text-[#FAF7FF] flex justify-center items-center p-9">
      <div className="bg-[#201a2e] gap-5 w-full rounded-xl max-w-md min-h-144 flex flex-col items-center justify-center p-4">
        <h1 className="font-bold text-3xl">Hypertrophy Tracker</h1>
        <p className=" text-2xl">Bem-Vindo!</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (criarConta) {
              handleCriarConta();
            } else {
              handleLogin();
            }
          }}
          className="flex flex-col justify-center items-center gap-5"
        >
          {criarConta && (
            <div className="bg-[#100d17] min-w-7/8 min-h-16 flex flex-col rounded-2xl items-center justify-center p-2">
              <label className="text-sm font-semibold" htmlFor="displayName">
                Nome de exibição:
              </label>

              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Como quer ser chamado?"
                className="w-full h-full rounded-2xl text-xl text-center"
              />
            </div>
          )}
          <div className="bg-[#100d17] min-w-7/8 min-h-16 flex flex-col rounded-2xl items-center justify-center p-2">
            <label className="text-sm font-semibold" htmlFor="email">
              E-mail:
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="w-full h-full rounded-2xl text-xl text-center"
            />
          </div>
          <div className="bg-[#100d17] min-w-7/8 min-h-16 flex flex-col rounded-2xl items-center justify-center p-2">
            <label className="text-sm font-semibold" htmlFor="password">
              Senha:
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full h-full rounded-2xl text-xl text-center"
            />
          </div>
          <button
            type="submit"
            className="bg-[#6138db] min-w-7/8 cursor-pointer min-h-16 flex rounded-2xl items-center justify-center p-2 text-xl text-center font-semibold"
          >
            {criarConta ? "CRIAR" : "ENTRAR"}
          </button>
          <p className="text-center text-sm">
            {criarConta ? "Já tem uma conta?" : "Ainda não tem uma conta?"}
          </p>
          <button
            type="button"
            className="text-purple-400 underline"
            onClick={() => setCriarConta(!criarConta)}
          >
            {criarConta ? "Entrar na sua conta" : "Criar sua conta"}
          </button>
        </form>
      </div>
    </main>
  );
}
