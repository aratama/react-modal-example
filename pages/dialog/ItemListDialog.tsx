import { ModalDialog } from "./ModalDialog";

export type TaskListFormProps = {
  open: boolean;
  items: string[];
  onCancel: () => unknown;
  onComplete: (value: string) => unknown;
};

export const ItemListDialog = (props: TaskListFormProps) => {
  return (
    <ModalDialog title="Select" visible={props.open} onClose={props.onCancel}>
      <div>
        {props.items.map((item, i) => {
          return (
            <div key={i}>
              <button onClick={() => props.onComplete(item)}>{item}</button>
            </div>
          );
        })}
      </div>
    </ModalDialog>
  );
};
