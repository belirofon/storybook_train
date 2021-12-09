import React from "react";
import "./App.css";
import { Layout } from "components";
import { Button }  from "ui";

export const App: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("button click event", event);
  }
  return (
    <div className="App">
      <Layout>
        <h1>Hello</h1>
        <hr/>
        <h2>Button</h2>
        <Button isDisable={true} onClick={handleButtonClick}>Send</Button>
      </Layout>
    </div>
  );
};
