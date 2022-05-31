import { useRouter } from "next/router";
import { FC } from "react";
import { Task } from "../model/task";

export type TaskListFormProps = {
  taskList: Task[];
};

export const TaskListForm: FC<TaskListFormProps> = (props) => {
  const { taskList } = props;
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/add");
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
    </>
  );
};
