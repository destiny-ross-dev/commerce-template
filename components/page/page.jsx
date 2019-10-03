import React from "react";
import Header from "../header/header";
import Meta from "../meta/meta";
import { StyledPage, PageContent } from "./page.styles.jsx";

const Page = props => {
  return (
    <StyledPage>
      <Meta />
      <Header />
      <PageContent>{props.children}</PageContent>
    </StyledPage>
  );
};

export default Page;
