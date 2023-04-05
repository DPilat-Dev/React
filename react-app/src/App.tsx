import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];
  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log("clicked")}
      />
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
