import * as React from "react";

import "./css/Footer.css";

export interface IFooterProps {
  leagueId: string;
}

function Footer(props: IFooterProps) {
  const leagueURL = `http://games.espn.com/ffl/leagueoffice?leagueId=${props.leagueId}`;

  return (
    <footer className="footer padding-leader-1 padding-trailer-1 text-center">
      <div className="grid-container">
        <div className="column-24">
          <div className="font-size--2">
            <a className="link-off-black margin-right-4" href={leagueURL}>Visit League on ESPN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
