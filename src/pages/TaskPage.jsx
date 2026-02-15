import { ChevronLeftIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function TaskPage() {
  const location = useLocation();
  const { title, description } = location.state || {};
  const navigate = useNavigate();

  return (
    // ADICIONADO: flex e justify-center para alinhar o card no meio da tela
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        {/* Cabeçalho: Título no centro, botão na esquerda */}
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)} // Alterado para -1 (ver explicação abaixo)
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        {/* Descrições */}
        <div className="bg-slate-200 rounded-md p-4">
          <h2 className="text-slate-600 font-bold text-xl">{title}</h2>
          <p className="text-slate-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
