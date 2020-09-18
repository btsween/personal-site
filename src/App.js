import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/navigation/Footer";
import Home from "./components/Home";
import TopNavigation from "./components/navigation/TopNavigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavigation />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
