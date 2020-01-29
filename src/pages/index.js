import React from "react"
import Layout from "../components/layout"
import Header from "../components/header/header"
import ProfileBanner from "../components/profile_banner/profile_banner"
import ProfileText from "../components/profile_text/profile_text"
import NextSection from "../components/next_section/next_section";

const IndexPage = () => (
  <Layout>
      <Header />
      <ProfileBanner />
      <ProfileText />
      <NextSection />
  </Layout>
);

export default IndexPage
