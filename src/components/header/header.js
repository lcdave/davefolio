import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby";
import "./_header.scss"

const Header = () => (
    <header className="mod_header">
        <div className="header__logo">
            <span className="var_green">&lt;</span> D<span className="blink">_</span> LC <span className="var_green">/&gt;</span>
        </div>
        <div className="header__navigation">
            <ul>
                <li className="var_active"><Link to="/">Home</Link></li>
                <li><Link to="/">About me</Link></li>
                <li><Link to="/">Projects</Link></li>
            </ul>
        </div>
    </header>

);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header
