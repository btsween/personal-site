import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  min-height: 8rem;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const HeaderLeft = styled.div`
  margin-left: 4rem;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 650px) {
    margin: auto;
  }
`;

const Title = styled.span`
  font-size: 36px;

  @media (max-width: 650px) {
    font-size: 34px;
  }
`;

const SubTitle = styled.span`
  color: #86abb4;
  font-size: 22px;
  margin-left: 6px;
`;

const BoldSpan = styled.span`
  font-family: Roboto-Medium;
`;

const HeaderRight = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 20px;
  display: flex;
  margin-right: 3rem;

  @media (max-width: 650px) {
    margin: auto;
    font-size: 18px;
  }
`;

const HeaderTab = styled.a`
  margin-left: 1rem;
  margin-right: 1rem;
  border-bottom: 3px solid #ffffff;
  padding-bottom: 3px;
  @media (max-width: 650px) {
    margin: 6px;
  }

  &:hover {
    border-bottom: 3px solid #dbbe12;
  }
`;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderLeft>
        <Title>
          BRYAN <BoldSpan>SWEENEY</BoldSpan>
        </Title>
        <SubTitle>software engineer</SubTitle>
      </HeaderLeft>
      <HeaderRight>
        <HeaderTab href="#">projects</HeaderTab>
        <HeaderTab href="#">about</HeaderTab>
      </HeaderRight>
    </TopNavWrapper>
  );
}

export default TopNavigation;
