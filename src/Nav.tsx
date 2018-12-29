import * as React from "react";
import { NavLink as Link } from "react-router-dom";

import "./css/Nav.css";

import logo from "./img/xsb-nfl.svg";

export interface INavProps {
  activePage: string;
  pageClick: (page: string) => void;
}

function Nav(props: INavProps) {
  const isActive: string = " is-active";
  const matchupsActive: string = props.activePage === "matchups" ? isActive : "";
  const standingsActive: string = props.activePage === "stanidngs" ? isActive : "";
  const waiversActive: string = props.activePage === "waivers" ? isActive : "";

  const matchupsClicked = () => props.pageClick("matchups");
  const standingsClicked = () => props.pageClick("standings");
  const waiversClicked = () => props.pageClick("waivers");

  return (
    <header className="top-nav fade-in">
      <div className="grid-container">
        <div className="column-24">
          <img src={logo} className="nav-logo" />
          <Link className="top-nav-title nav-title" to={"./"}>Extreme Sportsball</Link>
          <nav className="top-nav-list" role="navigation" aria-labelledby="topnav">
            <Link className={"top-nav-link" + matchupsActive} onClick={matchupsClicked} to={"./matchups"}>Matchups</Link>
            <Link className={"top-nav-link" + standingsActive} onClick={standingsClicked} to={"./standings"}>Standings</Link>
            <Link className={"top-nav-link" + waiversActive} onClick={waiversClicked} to={"./waivers"}>Waivers</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;
