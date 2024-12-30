import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Definir el tipo de tarea
interface Task {
  _id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string
}

// Definir el tipo del contexto
interface TaskContextType {
  tasks: Task[];
  fetchTasks: () => void;
  createTask: (newTask: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: number) => void;
  getTaskById: (id: number) => Promise<Task | null>;
}

// Variable de entorno con la URL 
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Crear el contexto (inicialmente vacío)
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Componente proveedor
export const TaskProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${apiUrl}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const createTask = async (newTask: Task) => {
    try {
      await axios.post(`${apiUrl}/tasks`, newTask);
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTask = async (updatedTask: Task) => {
    try {
      await axios.put(`${apiUrl}/tasks/${updatedTask._id}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Método para obtener una tarea por su ID
  const getTaskById = async (id: number): Promise<Task | null> => {
    const cachedTask = tasks.find((task) => task._id === id);
    if (cachedTask) {
      return cachedTask;
    }
    try {
      const response = await axios.get(`${apiUrl}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching task with id ${id}:`, error);
      return null;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, createTask, updateTask, deleteTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook para consumir el contexto
export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
