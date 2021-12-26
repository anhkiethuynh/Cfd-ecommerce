import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
function Modal({ children, isOpen }) {
	if (!isOpen) return null;

	console.log({ isOpen });
	return ReactDOM.createPortal(
		<>
			{/* <div className="modal-backdrop" /> */}
			<div className="modal">{children}</div>
		</>,
		document.getElementById("portalWrapper")
	);
}

export default Modal;
