import { FC } from "react";
import { ModalDialog } from "./ModalDialog";

export type YesNoDialogProps = {
  visible: boolean;
  onComplete: (value: boolean) => void;
};

export const YesNoDialog: FC<YesNoDialogProps> = (props) => {
  const { visible, onComplete } = props;
  return (
    <ModalDialog
      title="Delete the Task?"
      visible={visible}
      onClose={() => {
        onComplete(false);
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          onClick={() => {
            onComplete(true);
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            onComplete(false);
          }}
        >
          No
        </button>
      </div>
    </ModalDialog>
  );
};
