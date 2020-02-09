import React from "react"
import "./_cards.scss"
import Card from "../card/card";
import emaly from "../../images/emaly.jpg";
import cheese from "../../images/howmuchcheese.jpg";
import znueni from "../../images/znueni.jpg";
import poketinfo from "../../images/poketinfo.jpg";

import Zoom from 'react-reveal/Zoom';


const Cards = () => {
	return (
		<div className="mod_cards">
			<Zoom>
			<div className="cards__header">
				<h2>Projects</h2>
			</div>
			</Zoom>
			<div className="cards__inner">
				<Card image={znueni} title="4eyes Znueni" description="This is an internal tool for 4eyes GmbH. You can place food orders and manage your finances for the orders."/>
				<Card image={poketinfo} title="PokétInfo!" description="This project is brand new and still work in progress. It's a calculation and information tool for Pokémon GO."/>
				<Card image={cheese} title="How much cheese?" description="In case you want to calculate how much cheese you need for your raclette or fondue party."/>
				<Card image={emaly} title="Emaly" description="A simple website for a band with TYPO3 CMS. It contains event infos, a picture gallery and things like that."/>
			</div>
		</div>
	);
};


export default Cards;
