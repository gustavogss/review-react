import { useState } from "preact/hooks";
import { Input } from "./input";

export function AddTask({ handlerAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow mb-3 mt-5">
      <Input
        type="text"
        placeholder="Digite a tarefa: "
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Descrição da tarefa: "
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></Input>
      <button
        title="Adicionar tarefa"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa");
          }
          handlerAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="w-full bg-green-700 p-2 rounded-md text-white font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
