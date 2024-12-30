import { useEffect, useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import "./Task.css";

function Task() {
  const { id } = useParams();
  const { tasks, updateTask, createTask } = useTaskContext();
  const [taskData, setTaskData] = useState({
    _id: 0,
    title: "",
    description: "",
    completed: false,
    createdAt: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => String(task._id) === id); 
      if (task) {
        console.log("Found task:", task);
        setTaskData(task);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      updateTask(taskData);
    } else {
      createTask(taskData);
    }
    navigate("/");
  };

  return (
    <div className="bg-white p-5">
      <h1 className="text-center">{id ? "Editar Tarea" : "Agregar Tarea"}</h1>
      <form className="px-3 py-5 border" onSubmit={handleSubmit}>
        <div className="form__group">
          <label>Título *</label>
          <input
            type="text"
            value={taskData.title}
            required
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
          />
        </div>
        <div className="form__group">
          <label>Descripción</label>
          <textarea
            value={taskData.description}
            onChange={(e) =>
              setTaskData({ ...taskData, description: e.target.value })
            }
          />
        </div>
        <div className=" gap-1 form__group group--checkbox">
          <label>Completado</label>
          <input
            type="checkbox"
            checked={taskData.completed}
            onChange={(e) =>
              setTaskData({ ...taskData, completed: e.target.checked })
            }
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-between">
          <button className="button" type="submit" onClick={() => navigate(`/`)}>
            Regresar
          </button>
          <button className="button" type="submit" >
            {id ? "Actualizar" : "Crear"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Task;
