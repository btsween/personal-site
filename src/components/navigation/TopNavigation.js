import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  min-height: 5.5rem;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const HeaderLeft = styled.div`
  margin-left: 3rem;
  font-size 48px;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 650px) {
    margin: auto;
    font-size: 42px;
  }
`;

const BoldSpan = styled.span`
  font-family: Roboto-Medium;
`;

const HeaderRight = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 26px;
  display: flex;
  margin-right: 2rem;

  @media (max-width: 650px) {
    margin: auto;
    font-size: 22px;
  }
`;

const HeaderTab = styled.a`
  margin-left: 1rem;
  margin-right: 1rem;

  @media (max-width: 650px) {
    margin: 6px;
  }
`;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderLeft>
        BRYAN <BoldSpan>SWEENEY</BoldSpan>
      </HeaderLeft>
      <HeaderRight>
        <HeaderTab href="#">projects</HeaderTab>
        <HeaderTab href="#">about</HeaderTab>
      </HeaderRight>
    </TopNavWrapper>
  );
}

export default TopNavigation;
