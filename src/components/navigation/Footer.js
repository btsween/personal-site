import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin-icon.svg";
import cantinaIcon from "../../assets/icons/cantina-icon.png";

const FooterIcon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const FooterWrapper = styled.div`
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 4px;
`;

const ContentRow = styled.div`
  display: flex;
  margin: 1rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <ContentRow>
        <span>Bryan Sweeney, Software Engineer 2020</span>
      </ContentRow>
      <ContentRow>
        <FooterIcon>
          <LinkedinIcon />
        </FooterIcon>
        <FooterIcon>
          <GithubIcon />
        </FooterIcon>
        <FooterIcon>
          <CustomImage src={cantinaIcon} />
        </FooterIcon>
      </ContentRow>
    </FooterWrapper>
  );
}

export default Footer;
