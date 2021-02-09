import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  min-height: 5.5rem;
  width: 100%;
  justify-content: space-between;
  color: rgb(238, 238, 238);
  background-color: rgb(35, 48, 68);
`;

const HeaderLeft = styled.div`
  margin-left: 5rem;
  font-size 48px;
  margin-top: auto;
  margin-bottom: auto;
`;

const HeaderRight = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: 26px;
  display: flex;
`;

const HeaderTab = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderLeft>Bryan Sweeney</HeaderLeft>
      <HeaderRight>
        <HeaderTab>Projects</HeaderTab>
        <HeaderTab>About</HeaderTab>
      </HeaderRight>
    </TopNavWrapper>
  );
}

export default TopNavigation;
