import React from "react";
import TopNavigation from "./navigation/TopNavigation";
import styled from "styled-components";
import Footer from "./navigation/Footer";
import PageContent from "../content/ProjectContent";
import ContentCard from "./contentCard/ContentCard";

const PageBody = styled.div`
  flex: 1;
`;

const HomeWrapper = styled.div`
  flex: 1;
`;

function Home() {
  return (
    <HomeWrapper>
      <TopNavigation />
      <PageBody>
        {PageContent.projects.map((project, index) => {
          return (
            <ContentCard key={index} projectData={project} index={index} />
          );
        })}
      </PageBody>
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
