import type { NextPage } from "next";
import { useRouter } from "next/router";
import { NewTaskDialog } from "../dialog/NewTaskDialog";
import { useTaskList } from "../hooks/task";
import { TaskListForm } from "../component/TaskList";

const Add: NextPage = () => {
  const router = useRouter();
  const taskList = useTaskList();
  return (
    <>
      <TaskListForm taskList={taskList} />
      <NewTaskDialog
        visible={true}
        onClose={() => {
          router.push("/");
        }}
        onAdd={async (task) => {
          // `task` is the output of the NewTaskDialog
          localStorage.setItem("taskList", JSON.stringify([...taskList, task]));
          await new Promise((resolve) => setTimeout(resolve, 300));
          router.push("/");
        }}
      />
    </>
  );
};

export default Add;
