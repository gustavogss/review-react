import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "../components/header";

export function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-300 p-6 ">
      <div className="space-y-4 w-[500px] mx-auto">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navigate(-1)} className="absolute left-0">
            <ChevronLeftIcon />
          </button>
          <Header title="Detalhes da Tarefa" />
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className="text-xl text-slate-800 font-bold mb-2">{title}</h1>
          <p className="text-slate-800">{description}</p>
        </div>
      </div>
    </div>
  );
}
