import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { NewTaskDialog } from "./dialog/NewTaskDialog";
import { YesNoDialog } from "./dialog/YesNoDialog";
import { addTask, clearTasks, useTaskList } from "./hooks/task";

const Home: NextPage = () => {
  const [newTaskDialogVisible, setNewTaskDialogVisible] = useState(false);
  const router = useRouter();
  const taskList = useTaskList();
  const [yesNoDialogVisible, setYesNoDialogVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setNewTaskDialogVisible(true);
        }}
      >
        Add Task
      </button>

      <button
        onClick={() => {
          setYesNoDialogVisible(true);
        }}
      >
        Clear Task
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

      <YesNoDialog
        visible={yesNoDialogVisible}
        onComplete={async (value) => {
          setYesNoDialogVisible(false);
          if (value) {
            await clearTasks();
          }
        }}
      />

      <NewTaskDialog
        open={newTaskDialogVisible}
        onClose={() => {
          setNewTaskDialogVisible(false);
        }}
        onComplete={async (task) => {
          await addTask(task);
          setNewTaskDialogVisible(false);
        }}
      />
    </>
  );
};

export default Home;
