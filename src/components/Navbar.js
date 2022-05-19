import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<div className="nav__wrapper">
				<div className="nav__left">
					<Link to="/">RENTAL CAR</Link>
				</div>
				<div className="nav__right">
					<li className="list__items">Our Services</li>
					<li className="list__items">Why Us</li>
					<li className="list__items">Testimonial</li>
					<li className="list__items">FAQ</li>
					<li className="list__items">
						<button className="reg__btn">Register</button>
					</li>
				</div>
			</div>
		</nav>
	);
}
