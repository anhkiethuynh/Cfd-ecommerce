import "./assets/scss/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route index path="/" element={<HomePage />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
