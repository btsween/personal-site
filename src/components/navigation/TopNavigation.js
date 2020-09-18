import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  height: 5.5rem;
  width: 100%;
  background-color: #f7f9fb;
  color: #58646d;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  margin-left: 2rem;
  font-size 36px;
  margin-top: auto;
  margin-bottom: auto;
`;

const HeaderRight = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 24px;
  display: flex;
  margin-right: 0.5rem;
`;

const HeaderTab = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderLeft>Bryan Sweeney</HeaderLeft>
      <HeaderRight>
        <HeaderTab>Experience</HeaderTab>
        <HeaderTab>Projects</HeaderTab>
        <HeaderTab>About</HeaderTab>
      </HeaderRight>
    </TopNavWrapper>
  );
}

export default TopNavigation;
