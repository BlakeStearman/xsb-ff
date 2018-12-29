import * as React from "react";
import * as ReactDOM from "react-dom";
import Nav from "../Nav";

const pageClick = (page: string) => {
  // no-op
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav activePage="" pageClick={pageClick} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
