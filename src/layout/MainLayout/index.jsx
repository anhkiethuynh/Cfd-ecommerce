import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<>
			<Header />
			<main className="main-layout">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
