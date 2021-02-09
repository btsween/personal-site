import React from "react";
import styled from "styled-components";

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
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, 0.2);
  // max-width: 65vw;
`;

const BodyText = styled.div`
  width: 50rem;
  max-width: 75vw;
`;

/**
 * Current idea will be that ContentCard(s) will be used on both Experience and Portfolio pages and source content from the yml files.
 * In order to determine what content to source, will need to take params indicating the page.
 */
function ContentCard() {
  return (
    <CardWrapper>
      <CardBody>
        <CardHeader>Project 1</CardHeader>
        <BodyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BodyText>
      </CardBody>
    </CardWrapper>
  );
}

export default ContentCard;
