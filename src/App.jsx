import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      title: "Estudar programação",
      description: "Estudar programação para ser um desenvolvedor full stack",
      isCompleted: false,
    },

    {
      id: v4(),
      title: "Estudar inglês",
      description: "Estudar programação para se tornar fluente",
      isCompleted: false,
    },

    {
      id: v4(),
      title: "Estudar Matemática",
      description: "Estudar matemática para ser um desenvolvedor full stack",
      isCompleted: false,
    },
  ]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newID = v4();
    console.log(newID);
    const newtask = {
      id: newID,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newtask]);
  }

  function deleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTaskClick={deleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
