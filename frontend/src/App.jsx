import { Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage";
import RutaProtegida from "./layouts/RutaProtegida";
import Home from "./pages/home";
import Profesores from "./pages/listadoProfesores";
import EjemplosPage from "./pages/ejemplosPage";
import ActivityExample from "./pages/ejemploActividad";
import SidekickComponent from "./components/activityExample/Activity";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />

			<Route path="/inicio" element={<RutaProtegida />}>
				<Route index element={<Home />} />
			</Route>

			<Route path="/activity/new/:id" element={<RutaProtegida />}>
				<Route index element={<SidekickComponent/>}></Route>
			</Route>

			<Route path="/listado-profesores" element={<RutaProtegida />}>
				<Route index element={<Profesores />} />
			</Route>

			<Route path="/listado-actividades" element={<RutaProtegida />}>
				<Route index element={<Home />} />
			</Route>

			<Route path="/listado-alumnos" element={<RutaProtegida />}>
				<Route index element={<Home />} />
			</Route>

			<Route path="/notificaciones" element={<RutaProtegida />}>
				<Route index element={<Home />} />
			</Route>

			<Route path="/ejemplos" element={<RutaProtegida />}>
				<Route index element={<EjemplosPage />} />
			</Route>

			<Route path="/ejemplo-actividad" element={<RutaProtegida />}>
				<Route index element={<ActivityExample />} />
			</Route>
		</Routes>
	);
}

export default App;
