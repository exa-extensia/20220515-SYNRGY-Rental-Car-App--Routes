import jumboCarImg from "../assets/img/img_car.png";

export default function Jumbotron() {
	return (
		<div className="jumbo__bg">
			<div className="jumbo__wrapper">
				<div className="jumbo__left">
					<h2 className="jumbo__title">
						Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
					</h2>
					<p className="jumbo__desc">
						Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
						terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
						untuk sewa mobil selama 24 jam.
					</p>
				</div>
				<div className="jumbo__right">
					<img className="jumbo__img" src={jumboCarImg} alt="Jumbo Car Image" />
				</div>
			</div>
		</div>
	);
}
