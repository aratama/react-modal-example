import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { YesNoDialog } from "../dialog/YesNoDialog";
import { clearTasks, useTaskList } from "../hooks/task";

export type TaskListFormProps = {};

export const TaskListForm: FC<TaskListFormProps> = (props) => {
  const router = useRouter();
  const taskList = useTaskList();
  const [yesNoDialogVisible, setYesNoDialogVisible] = useState(false);

  useEffect(() => {
    console.log("load");
    return () => {
      console.log("unload");
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          router.push("/add");
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
    </>
  );
};
