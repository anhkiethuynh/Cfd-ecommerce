import Drawer from "components/Drawer";
import Footer from "components/Footer";
import Header from "components/Header";
import MiniCart from "components/MiniCart";
import { usePageContext } from "context/PageContext";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
	const { isOpenCartModal } = usePageContext();
	return (
		<>
			<Header />
			<main className="main-layout">
				<Outlet />
			</main>
			<Footer />
			<Drawer isOpen={isOpenCartModal}>
				<MiniCart></MiniCart>
			</Drawer>
		</>
	);
}
