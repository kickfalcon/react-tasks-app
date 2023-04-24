import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //componente que envuelve a los demas componentes
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); //copia el arreglo y le agrega la nueva tarea
  }
  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
