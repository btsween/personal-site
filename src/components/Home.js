import React from "react";
import TopNavigation from "./navigation/TopNavigation";
import styled from "styled-components";
import Footer from "./navigation/Footer";
import photo from "../assets/photos/rome-bridge.jpg";

// import { ReactComponent as BrooklynBridge } from "../assets/photos/brooklyn-bridge.svg";

const ApplicationBody = styled.div`
  min-height: 55rem;
  flex: 1;
  background-color: orange;
`;

// const WelcomeImage = styled.img`
//   height: 100vh;
//   width: 100vw;
//   min-height: 650px;
// `;

const WelcomeImage = styled.div`
  height: 100vh;
  width: 100vw;
`;

function Home() {
  return (
    <div className="Home">
      {/* <WelcomeImage src={photo} /> */}
      <WelcomeImage></WelcomeImage>
      <TopNavigation></TopNavigation>
      <ApplicationBody></ApplicationBody>
      <Footer>I am in the footer just so you know</Footer>
    </div>
  );
}

export default Home;
