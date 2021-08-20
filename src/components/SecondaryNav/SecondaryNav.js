import React from "react";
import {
	TiSocialFacebook,
	TiSocialPinterest,
	TiSocialTwitter,
	TiSocialGooglePlus,
	TiSocialInstagram,
} from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import "./SecondaryNav.css";

const SecondaryNav = () => {
	return (
		<div className="secondarynav-icons">
			<IoCall className="number-icon" />
			1-888-892-
			<h2 className="best">BEST</h2>
			<a href="https://www.google.com/">
				<TiSocialGooglePlus />
			</a>
			<a href="https://www.twitter.com/">
				<TiSocialTwitter color="orangered" />
			</a>
			<a href="https://www.facebook.com/">
				<TiSocialFacebook />
			</a>
			<a href="https://www.pinterest.com/">
				<TiSocialPinterest />
			</a>
			<a href="https://www.instagram.com/" className="facebook social">
				<TiSocialInstagram />
			</a>
		</div>
	);
};

export default SecondaryNav;
