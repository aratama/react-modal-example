import { FC, useState } from "react";
import { ModalDialogFrame } from "./ModalDialog";
import { Task, validateTask } from "../model/task";
import { useRouter } from "next/router";
import { addTask } from "../hooks/task";

export type NewTaskDialogProps = {};

export const NewTaskDialog: FC<NewTaskDialogProps> = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  return (
    <ModalDialogFrame
      title="New Task"
      visible={true}
      onClose={() => {
        setTitle("");
        router.push("/");
      }}
    >
      <input value={title} onInput={(e) => setTitle(e.currentTarget.value)} />
      <button
        onClick={async () => {
          setTitle("");
          const task: Task = { title };

          // validate..
          const errors = validateTask(task);

          if (errors.length === 0) {
            // OK, add the task in the database...
            await addTask(task);

            // then redirect to the `/` page
            router.push("/");
          } else {
            // OOPS, show the errors
            alert(errors.join("\n"));
          }
        }}
      >
        Create
      </button>
    </ModalDialogFrame>
  );
};
