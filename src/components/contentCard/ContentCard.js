import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 90%;
  height: 25rem;
  background-color: #f7f9fb;
  color: #58646d;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  min-height: 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;

const HeaderLeft = styled.div`
  color: #58646d;
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
`;

const HeaderRight = styled.div`
  color: #58646d;
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
`;

function ContentCard() {
  return (
    <CardWrapper>
      <CardHeader>
        <HeaderLeft>Software Engineer, Cantina Consulting</HeaderLeft>
        <HeaderRight>April 2020 - Present</HeaderRight>
      </CardHeader>
    </CardWrapper>
  );
}

export default ContentCard;
