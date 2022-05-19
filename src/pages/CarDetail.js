import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsPeople, BsGear, BsCalendarDate } from "react-icons/bs";

export default function CarDetail() {
	const [oneCarDetail, setOneCarDetail] = useState([]);
	const params = useParams();

	const fetchOneCarDetail = () => {
		axios
			.get(`https://rent-cars-api.herokuapp.com/admin/car/${params.id}`)
			.then((res) => {
				console.log(res);
				setOneCarDetail(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		console.log(params);
		fetchOneCarDetail();
	}, []);

	return (
		<>
			<h1>Car Detail - {oneCarDetail.id} </h1>
			<div className="detail__wrapper">
				<div className="wrapper__left">
					<div className="left__top">
						<h2 className="title--bold">Tentang Paket</h2>
						<h3 className="title--reg">Include</h3>
						<ul className="list--light">
							<li>Apa saja yang termasuk dalam paket durasi max 12 jam</li>
							<li>Sudah termasuk bensin selama 12 jam</li>
							<li>Sudah termasuk Tiket Wisata</li>
							<li>Sudah termasuk pajak</li>
						</ul>
						<h3 className="title--reg">Exclude</h3>
						<ul className="list--light">
							<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
							<li>
								Jika overtima lebih dari 12 jam akan ada tambahan biaya Rp
								20.000/jam
							</li>
							<li>Tidak termasuk akomodasi penginapan</li>
						</ul>
					</div>
					<div className="left__bottom">
						<h2 className="title--bold">Refund, Reschedule, Overtime</h2>
						<ul className="list--light">
							<li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
							<li>
								Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
								20.000/jam
							</li>
							<li>Tidak termasuk akomodasi penginapan</li>
						</ul>
					</div>
				</div>

				<div className="wrapper__right">
					<div key={oneCarDetail.id} className="card__onecarDetail">
						<img
							src={oneCarDetail.image}
							alt={oneCarDetail.name}
							className="card__img"
						/>
						<h3 className="detail__title">
							{oneCarDetail.name} / {oneCarDetail.category}{" "}
						</h3>
						<div className="detail__specs">
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
						<div className="detail__price">
							<h3>Total</h3>
							<h3>Rp {oneCarDetail.price?.toLocaleString()}</h3>
						</div>
						<button className="card__btn">Lanjutkan Pembayaran</button>
					</div>
				</div>
			</div>
		</>
	);
}
