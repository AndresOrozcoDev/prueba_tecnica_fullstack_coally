import { useEffect, useState } from "react";
import { useTaskContext } from "../../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";

function Task() {
  const { id } = useParams();
  const { tasks, updateTask, createTask } = useTaskContext();
  const [taskData, setTaskData] = useState({
    id: 0,
    title: "",
    description: "",
    completed: false,
    createdAt: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id === parseInt(id));
      if (task) {
        setTaskData({
          id: task.id,
          title: task.title,
          description: task.description,
          completed: task.completed,
          createdAt: task.createdAt,
        });
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
    <div>
      <h2>{id ? "Editar Tarea" : "Agregar Tarea"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={taskData.title}
            onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            value={taskData.description}
            onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
          />
        </div>
        <div>
          <label>Completado</label>
          <input
            type="checkbox"
            checked={taskData.completed}
            onChange={(e) => setTaskData({ ...taskData, completed: e.target.checked })}
          />
        </div>
        <button className="button" type="submit">{id ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
}

export default Task;
