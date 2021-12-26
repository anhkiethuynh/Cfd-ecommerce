import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";

function Drawer({ children, isOpen }) {
	return ReactDOM.createPortal(
		<>
			{/* <div className="modal-backdrop" /> */}
			<div>{children}</div>
		</>,
		document.getElementById("portalWrapper")
	);
}

export default Drawer;
