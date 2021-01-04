import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/navigation/Footer";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import TopNavigation from "./components/navigation/TopNavigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/compound-interest-calculator"
              component={Calculator}
              exact
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
