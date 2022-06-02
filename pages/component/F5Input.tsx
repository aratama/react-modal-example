import { FC, useState } from "react";
import { ItemListDialog } from "../dialog/ItemListDialog";

export type F5Input = {
  value: string;
  onInput: (value: string) => unknown;
};

export const F5Input: FC<F5Input> = (props) => {
  const [itemListVisible, setItemListVIsible] = useState(false);
  return (
    <>
      <input
        value={props.value}
        onKeyDown={(e) => {
          if (e.key === "F5") {
            setItemListVIsible(true);
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        onInput={(e) => props.onInput(e.currentTarget.value)}
      />

      <ItemListDialog
        open={itemListVisible}
        items={[
          "Shopping",
          "Washing My Car",
          "Jogging with my dog",
          "Going to Theater",
        ]}
        onComplete={(value) => {
          setItemListVIsible(false);
          props.onInput(value);
        }}
        onCancel={() => {
          setItemListVIsible(false);
        }}
      ></ItemListDialog>
    </>
  );
};
