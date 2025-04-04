//type of data

import React, { useEffect, useState } from "react";

export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

interface ITodoContext {
  tasks: ITask[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  deleteAllTasks: () => void;
}

const TASKS_KEY = "context-tasks"; //key to store tasks in local storage

//create default context
export const TodoContext = React.createContext<ITodoContext>({
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
  deleteAllTasks: () => {},
});

//create provider
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  //load tasks from local storage
  useEffect(() => {
    const storedTasks = localStorage.getItem(TASKS_KEY);
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  //update tasks in local storage
  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  //add task func
  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  //toggle task func
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //delete task func
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //delete all tasks func
  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,

        addTask,
        toggleTask,
        deleteTask,
        deleteAllTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => React.useContext(TodoContext)
