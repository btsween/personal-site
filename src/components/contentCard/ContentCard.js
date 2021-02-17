import React from "react";
import styled from "styled-components";
import SlideShow from "./SlideShow";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const CardHeader = styled.div`
  min-height: 2rem;
  font-size: 30px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-color: rgba(0, 0, 0, 0.87);
  display: flex;
  justify-content: center;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, 0.2);
  width: 50rem;
  max-width: 75vw;
`;

const BodyText = styled.div`
  text-align: center;
  font-size: 18px;
`;

/**
 * Current idea will be that ContentCard(s) will be used on both Experience and Portfolio pages and source content from the yml files.
 * In order to determine what content to source, will need to take params indicating the page.
 */
function ContentCard() {
  // const [fruits, setFruits] = React.useState([
  //   { id: "1", src: , isActive: false },
  //   { id: "2", name: "Peach", Active:: true },
  //   { id: "3", name: "Strawberry", isActive: false },
  // ]);

  return (
    <CardWrapper>
      <CardBody>
        <CardHeader>Bluetooth Beacon Navigator</CardHeader>
        <SlideShow></SlideShow>
        <BodyText>
          Bluetooth equipped mobile app that allows a user to better understand
          a venue by using multiple bluetooth beacons showing the user the
          relative distance to different beacon landmarks.
        </BodyText>
      </CardBody>
    </CardWrapper>
  );
}

export default ContentCard;
