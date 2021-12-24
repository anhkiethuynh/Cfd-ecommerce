import "./assets/scss/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Form from "pages/Form";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route index path="/" element={<HomePage />}></Route>
						<Route index path="/form" element={<Form />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
