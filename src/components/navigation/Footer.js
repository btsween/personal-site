import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin-icon.svg";
import cantinaIcon from "../../assets/icons/cantina-icon.png";

const FooterIcon = styled.div`
  height: 2.2rem;
  width: 2.2rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const TextWrapper = styled.span`
  margin-top: 5px;
  font-size: 20px;
  margin-right: 1rem;
`;

const FooterWrapper = styled.div`
  min-height: 4rem;
  display: flex;
  background-color: #86abb4;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const CustomImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 4px;
`;

function Footer() {
  return (
    <FooterWrapper>
      &copy; &nbsp;
      <TextWrapper>Bryan Sweeney, 2021</TextWrapper>
      <FooterIcon>
        <LinkedinIcon />
      </FooterIcon>
      <FooterIcon>
        <GithubIcon />
      </FooterIcon>
    </FooterWrapper>
  );
}

export default Footer;
