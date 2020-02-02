import React from "react"
import "./_text.scss"


const Text = (props) => {
	return (
		<div className="mod_text">
			<div className="text__header">
				<h2>{props.header}</h2>
			</div>
			<div className="text__container">
				<div className="text__left">{props.textLeft}</div>
				<div className="text__right">{props.textRight}</div>
			</div>
		</div>
	);
};


export default Text;
