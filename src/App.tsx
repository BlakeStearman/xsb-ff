import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";

import Footer from './Footer';
import Nav from "./Nav";
import SubNav from "./SubNav";
import Waivers from "./Waivers";

interface IState {
  activePage: string;
  leagueId: string;
  year: number;
}

class App extends React.Component<{}, IState> {
  constructor(props: object) {
    super(props);

    this.state = {
      activePage: "matchups",
      leagueId: "",
      year: 2018
    };

    this.setActivePage = this.setActivePage.bind(this);
  }

  public render() {
    return (
      <Router>
        <div className="App">
          <Nav activePage={this.state.activePage} pageClick={this.setActivePage} />
          <SubNav activePage={this.state.activePage} />

          {/* TODO - hook in components for routes */}
          {/* tslint:disable jsx-no-lambda */}
          <Route exact={true} path="/" />
          <Route path="/matchups" />
          <Route path="/standings" />
          <Route path="/waivers" component={() => <Waivers leagueId={this.state.leagueId} year={this.state.year} />} />
          {/* tslint:enable jsx-no-lambda */}

          <Footer leagueId={this.state.leagueId} />
        </div>
      </Router>
    );
  }

  private setActivePage(page: string) {
    this.setState({ activePage: page });
  }
}

export default App;
