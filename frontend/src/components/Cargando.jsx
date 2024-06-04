import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useAuth from "../hooks/useAuth";

// import Lottie from "lottie-react";
// import animation from "../Lotties/paris.json";

const Cargando = () => {
	const { cargandoModal, handleCargando } = useAuth();

	return (
		<Transition.Root show={cargandoModal} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-50 overflow-y-auto"
				onClose={handleCargando}
			>
				<div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<span
						className="hidden sm:inline-block sm:h-screen sm:align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="inline-block w-full max-w-full transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
							<div className="mt-10 flex items-center justify-center bg-transparent">
								{/* <Lottie
                  loop
                  autoplay
                  style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                  animationData={animation}
                /> */}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Cargando;
