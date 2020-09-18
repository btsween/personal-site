import React from "react";
import TopNavigation from "./navigation/TopNavigation";
import styled from "styled-components";
import Footer from "./navigation/Footer";

import ContentCard from "./contentCard/ContentCard";

const PageBody = styled.div`
  flex: 1;
`;

function Home() {
  return (
    <PageBody>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </PageBody>
  );
}

export default Home;
