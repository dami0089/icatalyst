/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ProfesoresContext = createContext();

const ProfesoresProvider = ({ children }) => {
	const [modalAgregarProfesor, setModalAgregarProfesor] = useState(false);
	const [modalEditarProfesor, setModalEditarProfesor] = useState(false);

	const handleModalAgregarProfesor = () => {
		setModalAgregarProfesor(!modalAgregarProfesor);
	};

	const handleModalEditarProfesor = () => {
		setModalEditarProfesor(!modalEditarProfesor);
	};

	return (
		<ProfesoresContext.Provider
			value={{
				modalAgregarProfesor,
				handleModalAgregarProfesor,
				modalEditarProfesor,
				handleModalEditarProfesor,
			}}
		>
			{children}
		</ProfesoresContext.Provider>
	);
};

export { ProfesoresProvider };
export default ProfesoresContext;
