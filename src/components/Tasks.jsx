import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ onTaskClick, deleteTaskClick, tasks }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate("/task", {
      state: { title: task.title, description: task.description },
    });
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`text-left bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"} `}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 text-white rounded-md p-2"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => deleteTaskClick(task.id)}
              className="bg-slate-400 text-white rounded-md p-2"
            >
              <Trash2Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
