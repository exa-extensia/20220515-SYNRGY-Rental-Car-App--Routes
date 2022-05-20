import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
	let nav__links = [
		{ name: "Our Services", url: "/#" },
		{ name: "Why Us", url: "/#" },
		{ name: "Testimonial", url: "/#" },
		{ name: "FAQ", url: "/#" },
	];

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	const handleClose = () => setNav(!nav);

	return (
		<nav>
			<div className="nav__wrapper">
				<div className="nav__left">
					<Link to="/">RENTAL CAR</Link>
				</div>

				<div className="nav__right">
					{nav__links.map((link__item) => (
						<li className="list__items">
							<Link to={link__item.url}>{link__item.name}</Link>
						</li>
					))}
					<li>
						<button className="reg__btn">Register</button>
					</li>
				</div>

				{/* Mobile */}
				<div className="dropdown__icon" onClick={handleClick}>
					{!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
				</div>
				<div className={!nav ? "hidden" : "nav__right--mobile"}>
					{nav__links.map((link__item) => (
						<li className="list__items">
							<Link to={link__item.url} onClick={handleClose}>
								{link__item.name}
							</Link>
						</li>
					))}
					<li>
						<button className="reg__btn">Register</button>
					</li>
				</div>
			</div>
		</nav>
	);
}
