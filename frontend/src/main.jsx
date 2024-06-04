import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ProfesoresProvider } from "./context/ProfesoresProvider.jsx";
import ErrorBoundary from "./components/error/error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<ProfesoresProvider>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</ProfesoresProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
