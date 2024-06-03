// import { useNavigate } from "react-router-dom";
import {
	Navbar,
	Button,
	IconButton,
	Menu,
	MenuHandler,
} from "@material-tailwind/react";
import {
	UserCircleIcon,
	ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

// import useAuth from "@/hooks/useAuth";

// import { useState } from "react";

export function DashboardNavbar() {
	// const { cerrarSesionAuth, auth } = useAuth();

	// const navigate = useNavigate();

	const handleclose = () => {
		// cerrarSesionAuth();
		localStorage.removeItem("token");
	};

	// const [isMenuOpen, setIsMenuOpen] = useState(false);

	// const handleMenuToggle = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

	return (
		<Navbar
			color={"transparent"}
			className={` rounded-xl transition-all px-0 py-1`}
			fullWidth
		>
			{/* {auth.rol ? ( */}
			<>
				<div className="flex justify-between gap-6 md:flex-col-reverse md:items-center lg:flex-row">
					<div className="flex items-center justify-center">
						<div>
							<img src="/img/icon-192x192.png" height={50} width={50} />
						</div>
						<div className="ml-4 text-[24px] font-bold text-gray-700 md:text-[40px]">
							iCatalyst
						</div>
					</div>

					<div className="flex items-center">
						<Button
							variant="text"
							color="blue-gray"
							className="hidden items-center gap-1 px-4 xl:flex"
						>
							<UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
							{/* {auth.nombre} {auth.apellido} */}
						</Button>
						<IconButton
							variant="text"
							color="blue-gray"
							className="grid xl:hidden"
						>
							<UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
						</IconButton>

						<Menu>
							<MenuHandler>
								<IconButton
									variant="text"
									onClick={handleclose}
									color="blue-gray"
								>
									<ArrowLeftOnRectangleIcon
										className="h-5 w-5 text-blue-gray-500"
										onClick={handleclose}
									/>
								</IconButton>
							</MenuHandler>
						</Menu>
					</div>
				</div>
			</>
			{/* ) : (
				<>
					<header className="absolute left-0 top-0 z-50 w-full bg-white p-6">
						<div className="flex items-center justify-between md:flex-col-reverse md:items-center lg:flex-row">
							<div className="flex items-center justify-center">
								<img
									src="/img/icon-192x192.png"
									height={50}
									width={50}
									alt="Logo"
								/>
								<div className="ml-4 text-[24px] font-bold text-gray-500 md:text-[40px]">
									Galeria Paris
								</div>
							</div>
							<div className="flex items-center">
								<Button
									variant="text"
									color="blue-gray"
									className="hidden items-center gap-1 border bg-white px-4 text-black opacity-50 hover:cursor-pointer xl:flex"
									onClick={() => navigate("/signin")}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										className="h-5 w-5 text-blue-gray-500"
									>
										<path
											fill="currentColor"
											d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744m-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416M12 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
										/>
									</svg>
									Ingreso Locales
								</Button>
								<IconButton
									variant="text"
									color="blue-gray"
									className="grid xl:hidden"
									onClick={handleMenuToggle}
								>
									{isMenuOpen ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 14 14"
											className="h-5 w-5 text-blue-gray-500"
										>
											<path
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13.5 2H6m5 5H3.5m5 5h-8"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											className="h-5 w-5 text-blue-gray-500"
										>
											<path
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeWidth="1.5"
												d="M20 7H4m16 5H4m16 5H4"
											/>
										</svg>
									)}
								</IconButton>
							</div>
						</div>
						{isMenuOpen && (
							<div className="mt-4 flex flex-col items-center bg-white p-4 shadow-lg xl:hidden">
								<Button
									variant="text"
									color="blue-gray"
									className="flex items-center gap-1 bg-white px-4 text-black opacity-50 hover:cursor-pointer"
									onClick={() => {
										navigate("/signin");
										setIsMenuOpen(false);
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										className="h-5 w-5 text-blue-gray-500"
									>
										<path
											fill="currentColor"
											d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744m-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416M12 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
										/>
									</svg>
									Ingreso Locales
								</Button>
							</div>
						)}
					</header>
				</>
			)} */}
		</Navbar>
	);
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
