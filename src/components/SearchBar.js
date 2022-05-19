import { Link } from "react-router-dom";

export default function SearchBar() {
	return (
		<div className="searchbar__wrapper">
			<form className="form__wrapper">
				<div className="onelabelinput__wrapper">
					<label className="label--custom">Tipe Driver</label>
					<select className="input--custom">
						<option value="dengan-sopir">Dengan Sopir</option>
						<option value="tanpa-sopir" selected>
							Tanpa Sopir (Lepas Kunci)
						</option>
					</select>
				</div>
				<div className="onelabelinput__wrapper">
					<label className="label--custom">Tanggal</label>
					<input className="input--custom" type="date" />
				</div>
				<div className="onelabelinput__wrapper">
					<label className="label--custom">Waktu Jemput/Ambil</label>
					<input className="input--custom" type="time" />
				</div>
				<div className="onelabelinput__wrapper">
					<label className="label--custom">Jumlah Penumpang</label>
					<input
						className="input--custom"
						type="number"
						placeholder="optional"
					/>
				</div>
			</form>
			<Link to={`/list`}>
				<button className="search__btn">Cari Mobil</button>
			</Link>
		</div>
	);
}
