import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./MainNavbar.css";
import { GiMetalPlate } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import SecondaryNav from "../SecondaryNav/SecondaryNav";


function MainNavbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
		window.addEventListener("resize", showButton);
		return {};
	}, []);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<nav className="main-navbar">
					<div className="main-navbar-container container">
						<Link to="/" className="main-navbar-logo" onClick={closeMobileMenu}>
							<GiMetalPlate className="main-navbar-icon" />
							BEST METAL
						</Link>
						<div className="main-menu-icon" onClick={handleClick}>
							{click ? <FaTimes /> : <AiOutlineBars />}
						</div>
						<ul className={click ? "main-nav-menu active" : "main-nav-menu"}>
							<li className="main-nav-item">
								<Link
									to="/"
									className="main-nav-links"
									onClick={closeMobileMenu}
								>
									WHY US
								</Link>
							</li>
							<li className="main-nav-item">
								<Link
									to="/services"
									className="main-nav-links"
									onClick={closeMobileMenu}
								>
									SERVICES
								</Link>
							</li>
							<li className="main-nav-item">
								<Link
									to="/resources"
									className="main-nav-links"
									onClick={closeMobileMenu}
								>
									RESOURCES
								</Link>
							</li>
							<li className="main-nav-item">
								<Link
									to="/portfolio"
									className="main-nav-links"
									onClick={closeMobileMenu}
								>
									PORTFOLIO
								</Link>
							</li>
							<li className="main-nav-item">
								<Link
									to="/faq"
									className="main-nav-links"
									onClick={closeMobileMenu}
								>
									FAQ
								</Link>
							</li>
							<li className="main-nav-item">
								<Link
									to="/contacts"
									className="main-nav-links"
									onClick={closeMobileMenu}
								>
									CONTACTS
								</Link>
							</li>
							<li className="main-nav-btn">
								{button ? (
									<Link to="/sign-up" className="btn-link">
										<Button buttonStyle="btn--outline">SIGN UP</Button>
									</Link>
								) : (
									<Link to="/sign-up" className="btn-link">
										<Button
											buttonStyle="btn--outline"
											buttonSize="btn--mobile"
											onClick={closeMobileMenu}
										>
											SIGN UP
										</Button>
									</Link>
								)}
							</li>
						</ul>
					</div>
					<SecondaryNav/>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default MainNavbar;
