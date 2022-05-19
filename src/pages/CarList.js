import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPeople, BsGear, BsCalendarDate } from "react-icons/bs";
import SearchBar from "../components/SearchBar";

export default function CarList() {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchCars = () => {
		axios
			.get("https://rent-cars-api.herokuapp.com/admin/car")
			.then((res) => {
				console.log(res);
				setCars(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(true);
			});
	};

	useEffect(() => {
		setLoading(true);
		fetchCars();
	}, []);

	return (
		<>
			<div className="jumbo__empty"></div>

			<SearchBar />

			<div className="list__wrapper">
				{loading && <div>loading...</div>}
				{!loading &&
					!error &&
					cars.map((oneCar) => (
						<Link to={`/detail/${oneCar.id}`}>
							<div key={oneCar.id} className="card__onecard">
								<img
									src={oneCar.image}
									alt={oneCar.name}
									className="card__img"
								/>
								<div className="card__title">
									{oneCar.name} / {oneCar.category}{" "}
								</div>
								<div className="card__price">
									Rp{oneCar.price?.toLocaleString()} / hari{" "}
								</div>
								<div className="card__desc">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Impedit, reprehenderit.
								</div>
								<div className="card__specs">
									<div className="specs__text">
										<BsPeople />
										<p className="ml-2">4 orang</p>
									</div>
									<div className="specs__text">
										<BsGear />
										<p className="ml-2">Manual</p>
									</div>
									<div className="specs__text">
										<BsCalendarDate />
										<p className="ml-2">Tahun 2020</p>
									</div>
								</div>
								<button className="card__btn">Pilih Mobil</button>
							</div>
						</Link>
					))}
				{!loading && error && <div>unexpected error</div>}
			</div>
		</>
	);
}
