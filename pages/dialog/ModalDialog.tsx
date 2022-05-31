import { FC, ReactElement, ReactNode } from "react";

export type ModalDialogFrameProps = {
  title: string;
  visible?: boolean;
  onClose: () => void;
  children: ReactNode[] | ReactNode;
};

export const ModalDialogFrame: FC<ModalDialogFrameProps> = (props) => {
  const { title, visible, children, onClose } = props;
  return (
    <div
      style={{
        display: typeof visible === "undefined" || visible ? "flex" : "none",
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
        style={{ backgroundColor: "white" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5em",
            backgroundColor: "#333",
            color: "white",
            gap: "4em",
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
        </div>

        <div style={{ padding: "2em" }}>{children}</div>
      </div>
    </div>
  );
};
