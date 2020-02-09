import React from "react"
import "./_card.scss"

import Zoom from 'react-reveal/Zoom';


const Card = (props) => {
	return (
		<Zoom>
		<div className="mod_card">
			<a href="#" className="card__link">
				<img className="card__image" src={props.image} alt="Emaly" />
			</a>
			<div className="card__title">
				{props.title}
			</div>
			<div className="card__text">
				{props.description}
			</div>
		</div>
		</Zoom>
	);
};


export default Card;
