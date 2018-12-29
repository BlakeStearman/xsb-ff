import * as React from "react";
import * as ReactDOM from "react-dom";
import SubNav from "../SubNav";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SubNav activePage="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
