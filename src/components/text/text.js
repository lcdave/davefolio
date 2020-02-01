import React from "react"
import "./_text.scss"


const Text = (props) => {
	return (
		<div className="mod_text">
			<div class="text__header">
				<h2>{props.header}</h2>
			</div>
			<div class="text__container">
				<div class="text__left">{props.textLeft}</div>
				<div class="text__right">{props.textRight}</div>
			</div>
		</div>
	);
};


export default Text;
