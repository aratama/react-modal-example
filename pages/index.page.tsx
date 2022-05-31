import type { NextPage } from "next";
import { TaskListForm } from "./component/TaskList";

const Home: NextPage = () => {
  return (
    <>
      {/* This is a common part with `/add` page */}
      <TaskListForm />
    </>
  );
};

export default Home;
