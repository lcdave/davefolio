import React from "react"
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./_footer.scss"

const Footer = () => {
	return (
		<>
			<footer className="mod_footer">
				<svg preserveAspectRatio="none" viewBox="0 0 100 102" height="90" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
					<path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
				</svg>
				<div className="footer__inner">
					<div className="footer__link">
						<FaInstagram />
					</div>
					<div className="footer__link">
						<FaGithub />
					</div>
				</div>
			</footer>
			</>
	);
};

export default Footer;
