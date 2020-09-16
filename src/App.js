import React from "react";
import "./App.css";
import TopNavigation from "./components/navigation/TopNavigation";
import styled from "styled-components";
import Footer from "./components/navigation/Footer";

const ApplicationBody = styled.div`
  min-height: 55rem;
  flex: 1;
  background-color: orange;
`;

function App() {
  return (
    <div className="App">
      <TopNavigation></TopNavigation>
      <ApplicationBody></ApplicationBody>
      <Footer>I am in the footer just so you know</Footer>
    </div>
  );
}

export default App;
