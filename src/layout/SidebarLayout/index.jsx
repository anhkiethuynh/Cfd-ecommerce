import React from "react";
import { Outlet, Route } from "react-router-dom";

function SidebarLayout() {
	return (
		<>
			<main className="sidebar-layout">
				<div className="container">
					<div className="outer">
						<div className="sidebar">{/* <Route path={} /> */}</div>
						<div className="content">
							<Outlet />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default SidebarLayout;
