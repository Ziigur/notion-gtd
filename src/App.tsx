import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

const App = () => {
  const [apiKey, setApiKey] = useState("");
  const [dbId, setDbId] = useState("");

  return (
    <div className="p-8 pt-32">
      <h1 className="text-4xl font-medium">Notion GTD</h1>
      <p className="text-gray-500 text-xl">Welcome to use Notion GTD!</p>
      <div className="grid grid-cols-1 gap-4 mt-8">
        <p className="text-gray-500 text-sm">
          This app uses Notion to store all the GTD data. Please provide your
          API details to get started.
        </p>
        <Input
          placeholder="API Key"
          value={apiKey}
          onChange={(event) => {
            setApiKey(event.currentTarget.value);
          }}
        />
        <Input
          placeholder="Database ID"
          value={dbId}
          onChange={(event) => {
            setDbId(event.currentTarget.value);
          }}
        />
        <Button
          onClick={() => {
            console.log("todo");
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default App;
