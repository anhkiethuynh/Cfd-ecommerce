const { createContext, useContext, useState } = require("react");

const PageContext = createContext();

export const PageProvider = ({ children }) => {
	const [isOpenCartModal, setIsOpenCartModal] = useState(false);

	const openCartModal = () => setIsOpenCartModal(true);
	const closeCartModal = () => setIsOpenCartModal(false);

	return (
		<PageContext.Provider
			value={{ openCartModal, closeCartModal, isOpenCartModal }}
		>
			{children}
		</PageContext.Provider>
	);
};

export const usePageContext = () => useContext(PageContext);
