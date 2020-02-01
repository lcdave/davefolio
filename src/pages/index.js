import React from "react"
import Layout from "../components/layout"
import Header from "../components/header/header"
import Profile from "../components/profile/profile"
import NextSection from "../components/next_section/next_section";
import Section from "../components/section/section";
import Wall from "../components/wall/wall";
import Cards from "../components/cards/cards";
import Footer from "../components/footer/footer";
import "./_front.scss";

const IndexPage = () => {
	const s1Header = 'About me';
	const s1TextLeft = "My name is Davide Lo Cascio. I'm 26 years old. In 2012 I started working for 4eyes GmbH. I startet my carreer as a Supporter. It didn't take long until i realised that i don't only like to support customers with already working projects. I wanted to build my own.";
	const s1TextRight = "So I startet to work alongside senior developer from whom I could learn a lot of things. I love to build applications and solutions for our customers. In order to beeing able to push myself and my knowhow, I decided to start studying IT in basel@TEKO.";

	return (
		<Layout>
			<div class="front__wrap">
				<Header />
				<Profile />
				<NextSection />
			</div>
			<Section header={s1Header} textLeft={s1TextLeft} textRight={s1TextRight} />
			<div class="mod_section">
				<Wall />
			</div>
			<div className="mod_section var_white">
				<Cards />
			</div>
			<Footer />
		</Layout>
	);
};

export default IndexPage
