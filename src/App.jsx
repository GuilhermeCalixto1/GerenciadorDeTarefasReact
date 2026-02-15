import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function App() {
  // 1. CARREGAR: Inicializamos o estado verificando o localStorage primeiro
  const [tasks, setTasks] = useState(() => {
    // Tenta pegar os dados salvos
    const tasksOnLocalStorage = localStorage.getItem("tasks");

    // Se tiver dados, converte de volta para Array e usa
    if (tasksOnLocalStorage) {
      return JSON.parse(tasksOnLocalStorage);
    }

    // Se não tiver nada (primeira vez do usuário), usa os padrões
    return [
      {
        id: v4(),
        title: "Estudar programação",
        description: "Estudar programação para ser um desenvolvedor full stack",
        isCompleted: false,
      },
      {
        id: v4(),
        title: "Estudar inglês",
        description: "Estudar inglês para se tornar fluente",
        isCompleted: false,
      },
      {
        id: v4(),
        title: "Estudar Matemática",
        description: "Estudar matemática para ser um desenvolvedor full stack",
        isCompleted: false,
      },
    ];
  });

  // 2. SALVAR: Sempre que 'tasks' mudar, salvamos no localStorage
  useEffect(() => {
    // Transformamos o array de objetos em uma STRING (JSON) para o navegador aceitar
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  /* CASO VOCÊ QUEIRA, VOCÊ PODE CHAMAR UMA API, SÓ DESCOMENTAR O CÓDIGO

                        useEffect(() => {
                          const fetchTasks = async () => {
                            //CHAMAR API
                            const response = await fetch(
                              "https://jsonplaceholder.typicode.com/todos?_limit=10",

                              { method: "GET" },
                            );

                            //PEGAR OS DADOS QUE ELA RETORNA
                            const data = await response.json();
                            //PERSISTIR OS DADOS NO MEU STATE

                            setTasks(data);
                          };

                          fetchTasks();
                        }); 
  
  */

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
