import { useEffect, useState } from "react";

export type Task = {
  title: string;
};

export const getTasks = async (): Promise<Task[]> => {
  const json = localStorage.getItem("taskList");
  return json ? JSON.parse(json) : [];
};

export const addTask = async (task: Task): Promise<void> => {
  const tasks = await getTasks();
  localStorage.setItem("taskList", JSON.stringify([...tasks, task]));
};

export const clearTasks = async (): Promise<void> => {
  localStorage.setItem("taskList", JSON.stringify([]));
};

export const useTaskList = (): Task[] => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  useEffect(() => {
    const interval = setInterval(async () => {
      const tasks = await getTasks();
      setTaskList(tasks);
    }, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return taskList;
};
