import Modal from "components/Modal";
import React from "react";
import "./style.scss";

function Drawer({ children, isOpen }) {
	return (
		<>
			<Modal {...{ isOpen }}>{children}</Modal>
		</>
	);
}

export default Drawer;
