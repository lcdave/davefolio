import PropTypes from "prop-types"
import React from "react"
import Typist from 'react-typist';
import "./_profile_text.scss"


const ProfileText = () => {
	return (
		<div className="mod_profile-text">
			<Typist>Hi there! <br /> My name is Davide Lo Cascio.</Typist>
		</div>
	);
};


export default ProfileText;
