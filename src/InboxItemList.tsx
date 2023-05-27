import { useState } from "react";
import { InboxItem } from "./InboxItem";

export type InboxItemData = {
  text: string;
  id: string;
};

const mockData: InboxItemData[] = [
  { text: "Buy milk", id: "1" },
  { text: "Walk the dog", id: "2" },
  { text: "List new project ideas", id: "3" },
];

export const InboxItemList = () => {
  const [items, setItems] = useState<InboxItemData[]>(mockData);

  return (
    <div className="p-4 grid grid-cols-1 gap-2">
      {items.map((item) => {
        return <InboxItem item={item} key={item.id} />;
      })}
    </div>
  );
};
