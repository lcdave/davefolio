import React from "react"
import "./_card.scss"


const Card = (props) => {
	return (
		<div className="mod_card">
			<div className="card__image">
				<img src={props.image} alt="Emaly" />
			</div>
			<div className="card__text">
				A simple website for a Band.
			</div>
		</div>
	);
};


export default Card;
