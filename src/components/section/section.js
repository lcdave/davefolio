import React from "react"
import Text from "../text/text";

import "./_section.scss"


const Section = (props) => {
	return (
		<div className="mod_section">
			<Text header={props.header} textLeft={props.textLeft} textRight={props.textRight}/>
		</div>
	);
};


export default Section;
