import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/loginPage";
import RutaProtegida from "./layouts/RutaProtegida";
import Home from "./pages/home";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />

			<Route path="/inicio" element={<RutaProtegida />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
