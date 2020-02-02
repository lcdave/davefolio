import React from "react"
import "./_card.scss"


const Card = (props) => {
	return (
		<div className="mod_card">
			<a href="javascript:void(0)" className="card__link">
				<img className="card__image" src={props.image} alt="Emaly" />
			</a>
			<div className="card__title">
				{props.title}
			</div>
			<div className="card__text">
				{props.description}
			</div>
		</div>
	);
};


export default Card;
