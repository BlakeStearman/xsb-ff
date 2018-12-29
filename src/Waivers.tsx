import * as React from "react";
import "./css/Waivers.css";

export interface IWaiverProps {
  leagueId: string;
  year: number;
}

class Waivers extends React.Component<IWaiverProps> {
  public render() {
    return (
      <section className="panel panel-white">
        <div className="grid-container">
          <div className="column-12 center-column" />
        </div>
      </section>
    );
  }
}

export default Waivers;
