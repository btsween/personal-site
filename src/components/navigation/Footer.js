import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-icon.svg";
// import LinkedinIcon from "../../assets/icons/linkedin-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin-icon.svg";

import IconDerp from "./FooterIcon";

const FooterIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  object-fit: contain;
`;

const FooterWrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
`;

const ContentRow = styled.div``;

function Footer() {
  return (
    <FooterWrapper>
      <ContentRow>
        <span>I am going to be a setnece or chain of copyrights?</span>
      </ContentRow>
      <ContentRow>
        <FooterIcon>
          <LinkedinIcon />
        </FooterIcon>
        <FooterIcon>
          <GithubIcon />
        </FooterIcon>
        <IconDerp icon={<GithubIcon />} />
      </ContentRow>
    </FooterWrapper>
  );
}

export default Footer;
