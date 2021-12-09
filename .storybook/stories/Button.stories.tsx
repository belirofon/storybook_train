import React from 'react';
import { Button } from "ui";

export default { title: "Button" };

export const stories = () => (
  <div>
    <div className="story">
      <label>Button</label>
      <Button>Send</Button>
    </div>

    <div className="story">
      <label>Button Disabled</label>
      <Button isDisable={true}>Disabled</Button>
    </div>
  </div>
);
