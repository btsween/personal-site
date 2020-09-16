import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 5rem;
  display: flex;
  background-color: black;
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
        <div>linkedin</div>
        <div>github</div>
        <div>cantina.co?????</div>
      </ContentRow>
    </FooterWrapper>
  );
}

export default Footer;
