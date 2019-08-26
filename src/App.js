import React, { Component } from "react";
import Home from "./components/Home";
import { initGA, logPageView } from "./utils/analytics";
import "./custom.css";

class App extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
export default App;
