import React from "react"
import "./_cards.scss"
import Card from "../card/card";
import emaly from "../../images/emaly.jpg";
import cheese from "../../images/howmuchcheese.jpg";
import znueni from "../../images/znueni.jpg";
import poketinfo from "../../images/poketinfo.jpg";


const Cards = () => {
	return (
		<div className="mod_cards">
			<div className="cards__header">
				<h2>Projects</h2>
			</div>
			<div className="cards__inner">
				<Card image={emaly} />
				<Card image={cheese} />
				<Card image={znueni} />
				<Card image={poketinfo}/>
			</div>
		</div>
	);
};


export default Cards;
