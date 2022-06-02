import { ModalDialogFrame } from "./ModalDialog";

export type TaskListFormProps = {
  open: boolean;
  items: string[];
  onCancel: () => unknown;
  onComplete: (value: string) => unknown;
};

export const ItemListDialog = (props: TaskListFormProps) => {
  return (
    <ModalDialogFrame
      title="Select"
      visible={props.open}
      onClose={props.onCancel}
    >
      <ul>
        {props.items.map((item, i) => {
          return (
            <li key={i}>
              <button onClick={() => props.onComplete(item)}>{item}</button>
            </li>
          );
        })}
      </ul>
    </ModalDialogFrame>
  );
};
