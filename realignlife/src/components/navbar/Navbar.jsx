import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/RLLogo.png";

function Navbar() {
	const [activeLink, setActiveLink] = useState(null);
	const HandleNavClick = (index) => {
		setActiveLink(index);
	};

	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/about", label: "About" },
		{ path: "/shop", label: "Shop" },
		{ path: "/events", label: "Events" },
		{ path: "/testimonials", label: "Testimonials" },
	];

	return (
		<nav>
			<img
				id="Logo"
				src={Logo}
				alt="Realign Life Logo"
			></img>

			<ul className="nav nav-pills justify-content-end">
				{navLinks.map((link, index, event) => (
					<li key={index}>
						<Link
							to={link.path}
							onClick={() => HandleNavClick(index)}
							className={`nav-item ${
								activeLink === index ? "active-link" : ""
							}`}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
