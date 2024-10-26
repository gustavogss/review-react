import { useEffect, useState } from "preact/hooks";
import { AddTask } from "./components/add-task";
import { Tasks } from "./components/tasks";
import { v4 } from "uuid";
import { Header } from "./components/header";

export function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    }
    // fetchTasks(); Para chamar a API
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handlerCheckTask(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }
  function handlerDeleteTask(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function handlerAddTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-300 p-6">
      <div className="space-y-4 w-[500px] mx-auto">
        <Header title="Gerenciador de Tarefas" />
        <AddTask handlerAddTask={handlerAddTask} />
        <Tasks
          tasks={tasks}
          handlerCheckTask={handlerCheckTask}
          handlerDeleteTask={handlerDeleteTask}
        />
      </div>
    </div>
  );
}
