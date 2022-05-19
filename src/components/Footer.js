import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
	return (
		<footer>
			<div className="footer__wrapper">
				<div className="footer__contacts">
					<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
					<p>binarcarrental@gmail.com</p>
					<p>081-233-334-808</p>
					<div className="footer__hr" />
				</div>
				<div className="footer__links">
					<li className="list__items">Our Services</li>
					<li className="list__items">Why Us</li>
					<li className="list__items">Testimonial</li>
					<li className="list__items">FAQ</li>
					<div className="footer__hr" />
				</div>
				<div className="footer__socmeds">
					<p>Connect with us</p>
					<div className="socmeds__wrapper">
						<div className="socmeds__item">
							<FiFacebook />
						</div>
						<div className="socmeds__item">
							<FiInstagram />
						</div>
						<div className="socmeds__item">
							<FiTwitter />
						</div>
					</div>
				</div>
				<div className="footer__cc">
					<p>© exa with 24/7 headache and confusion</p>
					<div className="footer__rectangle" />
				</div>
			</div>
		</footer>
	);
}
