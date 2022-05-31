import { FC, useState } from "react";
import { Task } from "../index.page";
import { ModalDialog } from "./ModalDialog";

export type NewTaskDialogProps = {
  visible: boolean;
  onClose: () => void;
  onAdd: (task: Task) => void;
};

export const NewTaskDialog: FC<NewTaskDialogProps> = (props) => {
  const { visible, onClose, onAdd } = props;
  const [title, setTitle] = useState("");
  return (
    <ModalDialog
      title="New Task"
      visible={visible}
      onClose={() => {
        setTitle("");
        onClose();
      }}
    >
      <input value={title} onInput={(e) => setTitle(e.currentTarget.value)} />
      <button
        onClick={() => {
          setTitle("");
          onAdd({ title });
        }}
      >
        Create
      </button>
    </ModalDialog>
  );
};
