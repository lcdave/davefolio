import PropTypes from "prop-types"
import React from "react"
import TypeWriter from 'react-typewriter';
import "./_profile_text.scss"


const ProfileText = () => {
	return (
		<div className="mod_profile-text">
			<TypeWriter typing={1}>Hi there! <br /> My name is Davide Lo Cascio.</TypeWriter>
		</div>
	);
};


export default ProfileText;
