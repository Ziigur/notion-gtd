import { AppBar } from "../AppBar";
import { FloatingActionButton } from "../FloatingActionButton";
import { FloatingActionButtonContainer } from "../FloatingActionButtonContainer";
import plusIcon from "../assets/plus.svg";

export const InboxView = () => {
  return (
    <div>
      <AppBar header="Inbox" subHeader="List of all your Inbox items" />

      <FloatingActionButtonContainer>
        <FloatingActionButton
          onClick={() => {
            console.log("todo");
          }}
        >
          <img src={plusIcon} className="w-8 h-8"/>
        </FloatingActionButton>
      </FloatingActionButtonContainer>
    </div>
  );
};
