import { CardBody, Typography } from "@material-tailwind/react";
import { EyeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const ListadoProfesores = () => {
	const listadoProfesores = [
		{ _id: 1, nombre: "Juan", email: "ejemplo@ejemplo.com", instituto: "UTN" },
		{
			_id: 2,
			nombre: "Pedro",
			email: "ejmplo2@ejemplo2.com",
			instituto: "UNLP",
		},
		{ _id: 3, nombre: "Maria", email: "ejemplo3@ejemplo3", instituto: "UNLP" },
		{ _id: 4, nombre: "Jose", email: "ejemplo4@ejemplo4", instituto: "UTN" },
	];

	return (
		<>
			<div>
				<Typography variant="h6" color="blue-gray" className="mb-3 ml-4">
					Listado de Locales
				</Typography>
			</div>
			<CardBody className="overflow-x-scroll px-0 pb-2 pt-0">
				<div className="hidden md:block">
					<table className="w-full min-w-[640px] table-auto">
						<thead>
							<tr>
								{["Nombre", "Email", "Instituto", "Accion"].map((el) => (
									<th
										key={el}
										className="border-b border-blue-gray-50 px-6 py-3 text-center"
									>
										<Typography
											variant="small"
											className="text-[11px] font-medium uppercase text-blue-gray-400"
										>
											{el}
										</Typography>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{listadoProfesores.map(
								({ _id, nombre, email, instituto }, key) => {
									const className = `py-3 px-5 ${
										key === listadoProfesores.length - 1
											? ""
											: "border-b border-blue-gray-50"
									}`;

									return (
										<tr key={_id}>
											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<Typography variant="small" className="font-bold">
														{nombre}
													</Typography>
												</div>
											</td>
											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<Typography variant="small" className="font-bold">
														{email}
													</Typography>
												</div>
											</td>
											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<Typography variant="small" className="font-bold">
														{instituto}
													</Typography>
												</div>
											</td>

											<td className={className}>
												<div className="flex items-center justify-center gap-4">
													<EyeIcon className="h-8 w-8 hover:cursor-pointer" />
													<PencilSquareIcon className="h-8 w-8 hover:cursor-pointer" />
												</div>
											</td>
										</tr>
									);
								}
							)}
						</tbody>
					</table>
				</div>
				<div className="mb-3 mt-3  block  md:hidden">
					{listadoProfesores.map(({ _id, nombre, email, instituto }) => (
						<div
							key={_id}
							className="mb-4 rounded-lg border border-blue-gray-50 p-4"
						>
							<div className="mb-2 flex items-center justify-between">
								<Typography variant="small" className="font-bold">
									Nombre: {nombre}
								</Typography>
								<div className="flex items-center gap-4">
									<EyeIcon
										className="h-6 w-6 hover:cursor-pointer"
										// onClick={(e) =>
										// 	verEmpresa(
										// 		e,
										// 		_id,
										// 		numeroLocal,
										// 		nombreTitularLocal,
										// 		nombreInquilino,
										// 		nombreLocal
										// 	)
										// }
									/>
									<PencilSquareIcon
										className="h-6 w-6 hover:cursor-pointer"
										// onClick={(e) =>
										// 	handleEditarEmpresa(e, _id, nombre, direccion, cuit)
										// }
									/>
								</div>
							</div>
							<Typography variant="small" className="mb-1 font-bold">
								Email: {email}
							</Typography>
							<Typography variant="small" className="mb-1 font-bold">
								Instituto: {instituto}
							</Typography>
						</div>
					))}
				</div>
			</CardBody>
		</>
	);
};

export default ListadoProfesores;
