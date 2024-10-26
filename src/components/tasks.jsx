import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Tasks({ tasks, handlerDeleteTask, handlerCheckTask }) {
  const navigate = useNavigate();

  function detailsTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-400 rounded-md shadow ">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => handlerCheckTask(task.id)}
              className={`bg-slate-200 text-gray-900 p-2 rounded-md w-full flex items-center gap-2 text-left ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <button
              onClick={() => detailsTask(task)}
              className="bg-slate-200 p-2 rounded-md text-slate-500"
              title="Detalhes"
            >
              <ChevronRightIcon />
            </button>
            <button
              title="deletar task"
              onClick={() => handlerDeleteTask(task.id)}
              className="bg-red-600 p-2 rounded-md text-white"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
