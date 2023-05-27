import { InboxItemData } from "./InboxItemList";

interface IProps {
  item: InboxItemData;
}

export const InboxItem = (props: IProps) => {
  return (
    <div className="rounded p-4 bg-white">
      <p>{props.item.text}</p>
    </div>
  );
};
