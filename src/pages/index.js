import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header/header"
import ProfileBanner from "../components/profile_banner/profile_banner"
import Typewriter from "../components/typewriter/typewriter"
import NextSection from "../components/next_section/next_section";

const IndexPage = () => (
  <Layout>
      <Header />
      <ProfileBanner />
      <Typewriter />
      <NextSection />
  </Layout>
);

export default IndexPage
