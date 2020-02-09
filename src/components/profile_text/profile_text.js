import React from "react"
import "./_profile_text.scss"
import Typist from 'react-typist';

const ProfileText = () => {
	return (
		<Typist>
			<div className="mod_profile-text">
				Hi there, I'm <span className="var_green">Davide</span>. Frontend Developer and Student@TEKO in Basel. <Typist.Delay ms={500} />I love to create useful things.
			</div>
		</Typist>
	);
};


export default ProfileText;
