import type { NextPage } from "next";
import { useTaskList } from "./hooks/task";
import { TaskListForm } from "./component/TaskList";

const Home: NextPage = () => {
  const taskList = useTaskList();
  return (
    <>
      <TaskListForm taskList={taskList} />
    </>
  );
};

export default Home;
