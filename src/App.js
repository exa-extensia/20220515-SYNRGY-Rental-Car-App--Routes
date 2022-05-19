import { Routes, Route } from "react-router-dom";
import CarDetail from "./pages/CarDetail";
import CarList from "./pages/CarList";
import Layout from "./common/Layout";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<CarList />} />
					<Route path="/detail/:id" element={<CarDetail />} />
					<Route path="*" element={<div>error</div>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
