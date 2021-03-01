import React from "react";
import styled from "styled-components";
import SlideShow from "./SlideShow";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  &.dark-schemed {
    background-color: #e8e8e8;
  }

  @media (max-width: 650px) {
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 50rem;
  max-width: 75vw;

  @media (max-width: 650px) {
    max-width: inherit;
    width: inherit;
    padding: 5px;
  }
`;

const BodyText = styled.div`
  text-align: center;
  font-size: 20px;
  padding-top: 0.75rem;
`;

function ContentCard(props) {
  return (
    <CardWrapper className={props.index % 2 === 0 ? "dark-schemed" : ""}>
      <CardBody>
        <CardHeader>{props.projectData.name}</CardHeader>
        <SlideShow assets={props.projectData.assets} />
        <BodyText>{props.projectData.description}</BodyText>
      </CardBody>
    </CardWrapper>
  );
}

export default ContentCard;
