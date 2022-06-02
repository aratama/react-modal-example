import { FC, useState } from "react";
import { ModalDialogFrame } from "./ModalDialog";
import { Task, validateTask } from "../model/task";
import { addTask } from "../hooks/task";
import { ItemListDialog } from "./ItemListDialog";
import { F5Input } from "../component/F5Input";

export type NewTaskDialogProps = {
  open: boolean;
  onClose: () => void;
  onComplete: (task: Task) => void;
};

export const NewTaskDialog: FC<NewTaskDialogProps> = (props) => {
  const [title, setTitle] = useState("");
  const [itemListVisible, setItemListVisible] = useState(false);
  return (
    <>
      <ModalDialogFrame
        title="New Task"
        visible={props.open}
        onClose={() => {
          setTitle("");
          props.onClose();
        }}
      >
        <F5Input value={title} onInput={(value) => setTitle(value)} />

        <p>Press F5 to Open Often Used Items</p>

        <button
          onClick={async () => {
            const task: Task = { title };

            // validate..
            const errors = validateTask(task);

            if (errors.length === 0) {
              setTitle("");
              // OK, add the task in the database...
              props.onComplete(task);
            } else {
              // OOPS, show the errors
              alert(errors.join("\n"));
            }
          }}
        >
          Create
        </button>

        <button onClick={() => setItemListVisible(true)}>
          Choose from history
        </button>
      </ModalDialogFrame>

      <ItemListDialog
        open={itemListVisible}
        items={[
          "Shopping",
          "Washing My Car",
          "Jogging with my dog",
          "Going to Theater",
        ]}
        onCancel={() => setItemListVisible(false)}
        onComplete={(value) => {
          setItemListVisible(false);
          setTitle(value);
        }}
      ></ItemListDialog>
    </>
  );
};
