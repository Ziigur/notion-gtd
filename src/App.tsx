import { useState } from "react";
import { InboxView } from "./views/InboxView";
import { NotionCredentialsView } from "./views/NotionCredentialsView";

type PageName = "notionCredentialsPage" | "inboxPage";

const App = () => {
  const [page, setPage] = useState<PageName>("notionCredentialsPage");

  const moveToInboxView = () => {
    setPage("inboxPage");
  };

  return page === "notionCredentialsPage" ? (
    <NotionCredentialsView onContinueClick={moveToInboxView} />
  ) : (
    <InboxView />
  );
};

export default App;
