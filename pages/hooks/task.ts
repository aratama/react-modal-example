import { useEffect, useState } from "react";

export type Task = {
  title: string;
};

export const useTaskList = (): Task[] => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  useEffect(() => {
    const go = async () => {
      const json = localStorage.getItem("taskList");
      await new Promise((resolve) => setTimeout(resolve, 300));
      setTaskList(json ? JSON.parse(json) : []);
    };
    go();
  }, []);
  return taskList;
};
