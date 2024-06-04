import Modal from "react-modal";
import useProfesores from "../../hooks/useProfesores";
import useAuth from "../../hooks/useAuth";

Modal.setAppElement("#root"); // Asegúrate de que esto esté configurado correctamente

const ModalCrearProfesor = () => {
	const { modalAgregarProfesor, handleModalAgregarProfesor } = useProfesores();
	const { handleCargando } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleCargando();
		// Lógica de envío aquí
		handleCargando();
		handleModalAgregarProfesor();
	};

	return (
		<Modal
			isOpen={modalAgregarProfesor}
			onRequestClose={handleModalAgregarProfesor}
			className="fixed inset-0 z-50 flex items-center justify-center"
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
		>
			<div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
				<button
					type="button"
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					onClick={handleModalAgregarProfesor}
				>
					<span className="sr-only">Cerrar</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<h3 className="text-xl font-bold leading-6 text-gray-900 mb-4">
					Nuevo Profesor
				</h3>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="nombre"
						>
							Nombre
						</label>
						<input
							id="nombre"
							type="text"
							placeholder="Nombre"
							className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
							autoComplete="off"
						/>
					</div>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="email"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Email"
							className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
							autoComplete="off"
						/>
					</div>
					<div>
						<label
							className="block text-sm font-bold uppercase text-gray-700"
							htmlFor="instituto"
						>
							Instituto
						</label>
						<input
							id="instituto"
							type="text"
							placeholder="Instituto"
							className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
							autoComplete="off"
						/>
					</div>
					<div>
						<input
							type="submit"
							className="mt-4 w-full cursor-pointer rounded bg-blue-600 p-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-700"
							value="Nuevo Profesor"
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default ModalCrearProfesor;
