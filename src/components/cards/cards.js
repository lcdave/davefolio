import React from "react"
import "./_cards.scss"
import Card from "../card/card";


const Cards = () => {
	return (
		<div className="mod_cards">
			<div className="cards__header">
				<h2>Projects</h2>
			</div>
			<div className="cards__inner">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};


export default Cards;
