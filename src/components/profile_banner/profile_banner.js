import PropTypes from "prop-types"
import React from "react"
import profileImg from "../../images/profile.jpg"
import "./_profile_banner.scss"

const ProfileBanner = () => (
	<div className="mod_profile-banner">
		<div className="profile-banner__img">
			<img src={profileImg} alt="Davide Lo Cascio" />
		</div>
	</div>
);


export default ProfileBanner
