// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AddressContextProvider } from "./context/address.context.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	// <StrictMode>
	<AddressContextProvider>
		<App />
	</AddressContextProvider>
	// </StrictMode>
);
