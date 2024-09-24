import AboutContainer from "@/components/aboutContainer";
import Layout from "@/components/layout";
import React from "react";

function AboutPage() {
  return (
    <Layout pageTitle="About Page">
      <AboutContainer />
    </Layout>
  );
}

export default AboutPage;

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
);
