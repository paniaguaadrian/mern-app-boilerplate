//  Renders the top-level entry React component in the div element in the HTML document.

import React from "react";
import { render } from "react-dom";
import HelloWorld from "./HelloWorld";

// Entry React component
render(<HelloWorld />, document.getElementById("root"));
