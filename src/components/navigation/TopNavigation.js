import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  height: 5.5rem;
  justfiy-content: space-between;
  width: 100%;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div``;

function TopNavigation() {
  return (
    <TopNavWrapper>
      <HeaderLeft> hahdfhas hi</HeaderLeft>
      <HeaderRight>asdf</HeaderRight>
    </TopNavWrapper>
  );
}

export default TopNavigation;
