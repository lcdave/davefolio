import PropTypes from "prop-types"
import React from "react"
import TypeWriter from 'react-typewriter';
import "./_typewriter.scss"


const Typewriter = () => {
	return (
		<div className="mod_typewriter">
			<TypeWriter typing={1}>Hi there! <br /> My name is Davide Lo Cascio.</TypeWriter>
		</div>
	);
};


export default Typewriter;
