import * as React from "react";
import "./css/Nav.css";

import logo from "./img/xsb-nfl.svg";

export interface IProps {
  activePage: string;
  pageClick: (page: string) => void;
}

function Nav(props: IProps) {
  const isActive: string = " is-active";
  const matchupsActive: string = props.activePage === "matchups" ? isActive : "";
  const standingsActive: string = props.activePage === "stanidngs" ? isActive : "";
  const waiversActive: string = props.activePage === "waivers" ? isActive : "";

  const matchupsClicked = () => props.pageClick("matchups");
  const standingsClicked = () => props.pageClick("matchups");
  const waiversClicked = () => props.pageClick("matchups");

  return (
    <header className="top-nav fade-in">
      <div className="grid-container">
        <div className="column-24">
          <img src={logo} className="nav-logo" />
          <a href="#" className="top-nav-title nav-title">Extreme Sportsball</a>
          <nav className="top-nav-list" role="navigation" aria-labelledby="topnav">
            <a className={"top-nav-link" + matchupsActive} onClick={matchupsClicked} href="#">Matchups</a>
            <a className={"top-nav-link" + standingsActive} onClick={standingsClicked} href="#">Standings</a>
            <a className={"top-nav-link" + waiversActive} onClick={waiversClicked} href="#">Waivers</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Nav;