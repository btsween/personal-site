import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  min-height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const HeaderLeft = styled.div`
  margin-left: 1rem;
`;

const HeaderRight = styled.div`
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 1rem;
`;

const HeaderCenter = styled.div`
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 1rem;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
`;

const BodyText = styled.div``;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  height: 10rem;
  width: 20rem;
  margin: 2rem;
  background-color: white;
`;

/**
 * Current idea will be that ContentCard(s) will be used on both Experience and Portfolio pages and source content from the yml files.
 * In order to determine what content to source, will need to take params indicating the page.
 */
function ContentCard() {
  return (
    <CardWrapper>
      <CardHeader>
        <HeaderCenter>Software Engineer, Cantina Consulting</HeaderCenter>
      </CardHeader>
      <CardBody>
        <BodyText>
          Saved client 100k+/year by creating an in-house replacement for a
          vender product.
        </BodyText>
      </CardBody>
      <InnerContainer></InnerContainer>
    </CardWrapper>
  );
}

export default ContentCard;
