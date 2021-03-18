import React from "react";
import styled from "styled-components";
import SlideShow from "./SlideShow";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: solid 2px #86abb4;

  &.dark-schemed {
    background-color: #e8e8e8;
  }
`;

const SeperationDot = styled.div`
  height: 6px;
  width: 6px;
  background-color: black;
  border-radius: 10px;
  margin: auto;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-content: center;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`;

const HeaderText = styled.span`
  font-family: Roboto-Medium;
  font-size: 35px;
`;

const HeaderLinks = styled.a`
  font-size: 18px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: blue;
  text-decoration: underline solid blue;
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
  }
`;

const BodyText = styled.div`
  text-align: center;
  font-size: 20px;
`;

function ContentCard(props) {
  return (
    <CardWrapper className={props.index % 2 === 0 ? "dark-schemed" : ""}>
      <CardBody>
        <CardHeader>
          <HeaderText>{props.projectData.name}</HeaderText>

          {props.projectData.links && (
            <LinksContainer>
              {Object.keys(props.projectData.links).map((key, index) => (
                <LinkWrapper key={index}>
                  <HeaderLinks href={props.projectData.links[key]}>
                    {key}
                  </HeaderLinks>
                  {index < Object.keys(props.projectData.links).length - 1 && (
                    <SeperationDot />
                  )}
                </LinkWrapper>
              ))}
            </LinksContainer>
          )}
        </CardHeader>
        {props.projectData.assets && (
          <SlideShow assets={props.projectData.assets} />
        )}
        <BodyText>{props.projectData.description}</BodyText>
      </CardBody>
    </CardWrapper>
  );
}

export default ContentCard;
