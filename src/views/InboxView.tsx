import { AppBar } from "../AppBar";
import { FloatingActionButton } from "../FloatingActionButton";
import { FloatingActionButtonContainer } from "../FloatingActionButtonContainer";
import { InboxItemList } from "../InboxItemList";
import plusIcon from "../assets/plus.svg";

export const InboxView = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar header="Inbox" subHeader="List of all your Inbox items" />

      <InboxItemList />

      <FloatingActionButtonContainer>
        <FloatingActionButton
          onClick={() => {
            console.log("todo");
          }}
        >
          <img src={plusIcon} className="w-8 h-8" />
        </FloatingActionButton>
      </FloatingActionButtonContainer>
    </div>
  );
};
