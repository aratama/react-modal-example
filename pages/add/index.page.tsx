import type { NextPage } from "next";
import { NewTaskDialog } from "../dialog/NewTaskDialog";
import { TaskListForm } from "../component/TaskList";

const Add: NextPage = () => {
  return (
    <>
      {/* This is a common part with `/` page */}
      <TaskListForm />

      {/* This is the only differeence between `/` page and `/add` page */}
      <NewTaskDialog />
    </>
  );
};

export default Add;
