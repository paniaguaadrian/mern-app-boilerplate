// hot-loader allows React components to be live reloaded without the loss of state.

import React from "react";
import { hot } from "react-hot-loader";

const HelloWorld = () => {
  return (
    <div>
      <h1>There we go!</h1>
    </div>
  );
};

export default hot(module)(HelloWorld);
