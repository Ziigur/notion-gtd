import { useState } from "react";
import { InboxView } from "./views/InboxView";
import { NotionCredentialsView } from "./views/NotionCredentialsView";

type PageName = "notionCredentialsPage" | "inboxPage";

const App = () => {
  const [page, setPage] = useState<PageName>("notionCredentialsPage");
  const [animate, setAnimate] = useState(false);

  const moveToInboxView = () => {
    setPage("inboxPage");
    setAnimate(true);
    window.setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  if (animate && page === "inboxPage") {
    return (
      <>
        <NotionCredentialsView animateOut />
        <InboxView animateIn />
      </>
    );
  }

  return page === "notionCredentialsPage" ? (
    <NotionCredentialsView onContinueClick={moveToInboxView} />
  ) : (
    <InboxView />
  );
};

export default App;
