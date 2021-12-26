import "./assets/scss/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import Form from "pages/Form";
import { PageProvider } from "context/PageContext";

function App() {
	return (
		<>
			<BrowserRouter>
				<PageProvider>
					<Routes>
						<Route element={<MainLayout />}>
							<Route index path="/" element={<HomePage />}></Route>
							<Route index path="/form" element={<Form />}></Route>
						</Route>
					</Routes>
				</PageProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
