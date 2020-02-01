import React from "react"
import "./_card.scss"
import emaly from "../../images/emaly.jpg";


const Card = () => {
	return (
		<div className="mod_card">
			<div className="card__image">
				<img src={emaly} alt="Emaly" />
			</div>
			<div className="card__text">
				A simple website for a Band.
			</div>
		</div>
	);
};


export default Card;
