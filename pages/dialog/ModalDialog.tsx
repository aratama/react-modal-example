import { FC, ReactElement, ReactNode } from "react";

export type ModalDialogProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: ReactNode[] | ReactNode;
};

export const ModalDialog: FC<ModalDialogProps> = (props) => {
  const { title, visible, children, onClose } = props;
  return (
    <div
      style={{
        display: visible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        style={{ backgroundColor: "white", padding: "2em" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>{title}</div>
        <div>
          <button
            onClick={() => {
              onClose();
            }}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
