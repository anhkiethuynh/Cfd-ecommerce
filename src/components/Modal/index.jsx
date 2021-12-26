import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
function Modal({ chilren, isOpen }) {
	if (!isOpen) return null;

	console.log({ isOpen });
	return ReactDOM.createPortal(
		<>
			{/* <div className="modal-backdrop" /> */}
			<Modal isOpen>{chilren}</Modal>
		</>,
		document.getElementById("portalWrapper")
	);
}

export default Modal;
