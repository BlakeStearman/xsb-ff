import * as React from "react";
import "./css/SubNav.css";

export interface IProps {
  activePage: string;
}

function SubNav(props: IProps) {
  let title;
  switch (props.activePage) {
    case "waivers":
      title = "Waivers";
      break;
    case "standings":
      title = "Division Standings";
      break;
    case "matchups":
    default:
      title = "Current Matchups";
      break;
  }

  return (
    <header className="sub-nav" role="banner">
      <div className="grid-container">
        <div className="column-24">
          <h1 className="sub-nav-title text-black">{title}</h1>
        </div>
      </div>
    </header>
  );
}

export default SubNav;
