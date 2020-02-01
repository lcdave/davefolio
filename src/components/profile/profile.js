import React from "react"
import ProfileBanner from "../profile_banner/profile_banner"
import ProfileText from "../profile_text/profile_text"
import "./_profile.scss"


const Profile = () => {
	return (
		<div className="mod_profile">
			<div className="profile__inner">
				<ProfileBanner />
				<ProfileText />
			</div>
		</div>
	);
};


export default Profile;
