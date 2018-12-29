import * as React from "react";
import "./css/App.css";

import Footer, { IProps } from './Footer';
import Nav from "./Nav"
import SubNav from "./SubNav"

interface IState {
  activePage: string;
  leagueId: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      activePage: "matchups",
      leagueId: "334568"
    };

    this.setActivePage = this.setActivePage.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <Nav activePage={this.state.activePage} pageClick={this.setActivePage} />
        <SubNav activePage={this.state.activePage} />
        <Footer leagueId={this.state.leagueId} />
      </div>
    );
  }

  private setActivePage(page: string) {
    this.setState({ activePage: page });
  }
}

export default App;
