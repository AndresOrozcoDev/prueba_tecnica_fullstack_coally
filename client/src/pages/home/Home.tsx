import { useTaskContext } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const { tasks, deleteTask } = useTaskContext();
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5">
      <h1 className="text-center">Home</h1>
      <div className="flex justify-end">
        <a href="/task" className="button">
          Agregar tarea
        </a>
      </div>
      <div className="my-4">
        <ul>
          {tasks.map((task) => (
            <li className="my-2 px-5 py-3 border" key={task._id}>
              <div className="flex flex-col">
                <p className="title">{task.title}</p>
                <span className="description">{task.description}</span>
                <span className="completed">
                  {task.completed ? "Completada" : "Pendiente"}
                </span>
                <span className="createdAt">
                  {new Intl.DateTimeFormat("es-ES", {
                    dateStyle: "medium",
                  }).format(new Date(task.createdAt))}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 justify-between">
                <button className="button" onClick={() => deleteTask(task._id)}>
                  Eliminar
                </button> 
                <button
                  className="button"
                  onClick={() => navigate(`/task/${task._id}`)}
                >
                  Editar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
