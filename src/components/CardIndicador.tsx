import type { ReactNode } from "react";

type CardIndicadorProps = {
  titulo: string;
  valor: string;
  descricao: string;
  icone: ReactNode;
  caloriasConsumidas?: number;
  metaCalorica?: number;
};

export default function CardIndicador({
  titulo,
  valor,
  descricao,
  icone,
  caloriasConsumidas,
  metaCalorica,
}: CardIndicadorProps) {
  const mostrarProgresso =
    caloriasConsumidas !== undefined &&
    metaCalorica !== undefined &&
    metaCalorica > 0;
  const consumidas = caloriasConsumidas ?? 0;
  const meta = metaCalorica ?? 0;
  const statusCalorias =
    consumidas < meta ? (
      <span>{meta - consumidas} kcal restantes</span>
    ) : consumidas > meta ? (
      <span>{consumidas - meta} kcal acima da meta</span>
    ) : (
      <span>Meta atingida</span>
    );
  const progresso = mostrarProgresso
    ? Math.min(Math.max((caloriasConsumidas / metaCalorica) * 100, 0), 100)
    : 0;
  return (
    <div className="rounded-2xl border border-[#38294d] bg-[#21182f] p-4 transition-colors hover:border-[#6138db]/60">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#b7adca]">{titulo}</p>

        <div className="rounded-xl bg-[#6138db]/15 p-2 text-[#A78BFA]">
          {icone}
        </div>
      </div>

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#FAF7FF]">
        {valor}
      </h2>
      <p className="mt-2 text-sm text-[#A78BFA]">{descricao}</p>
      {mostrarProgresso && (
        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-[#38294d]">
            <div
              className="h-full rounded-full bg-[#8B5CF6] transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>

          <div className="mt-2 flex justify-between text-xs text-[#b7adca]">
            <span>{Math.round(progresso)}% consumido</span>
            {statusCalorias}
          </div>
        </div>
      )}
    </div>
  );
}
