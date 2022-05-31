import { useEffect, useState } from "react";

export type Task = {
  title: string;
};

export const getTasks = async (): Promise<Task[]> => {
  const json = localStorage.getItem("taskList");
  await new Promise((resolve) => setTimeout(resolve, 300));
  return json ? JSON.parse(json) : [];
};

export const addTask = async (task: Task): Promise<void> => {
  const tasks = await getTasks();
  localStorage.setItem("taskList", JSON.stringify([...tasks, task]));
  await new Promise((resolve) => setTimeout(resolve, 300));
};

export const clearTasks = async (): Promise<void> => {
  localStorage.setItem("taskList", JSON.stringify([]));
  await new Promise((resolve) => setTimeout(resolve, 300));
};

export const useTaskList = (): Task[] => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  useEffect(() => {
    const go = async () => {
      const tasks = await getTasks();
      setTaskList(tasks);
    };
    go();
  }, []);
  return taskList;
};
