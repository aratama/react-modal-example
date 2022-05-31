import type { NextPage } from "next";
import { useState } from "react";
import { NewTaskDialog } from "./NewTaskDialog";

export type Task = {
  title: string;
};

const Home: NextPage = () => {
  const [newTaskDialogVisible, setNewTaskDialogVisible] = useState(false);

  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <>
      <button
        onClick={() => {
          setNewTaskDialogVisible(true);
        }}
      >
        Add Task
      </button>

      <table>
        <tbody>
          {taskList.map((task, i) => {
            return (
              <tr key={i}>
                <td>{task.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <NewTaskDialog
        visible={newTaskDialogVisible}
        onClose={() => {
          setNewTaskDialogVisible(false);
        }}
        onAdd={(task) => {
          // `task` is the output of the NewTaskDialog
          setTaskList((list) => [...taskList, task]);
          setNewTaskDialogVisible(false);
        }}
      />
    </>
  );
};

export default Home;
