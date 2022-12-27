// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local
import "./assets/css/index.scss";
import Home from "./pages/home/Home";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/pricing" element={<Pricing />} /> */}
					{/* <Route path="/about" element={<About />} /> */}
					{/* <Route path="/contact" element={<Contact />} /> */}
					<Route path="/" element={<Home />} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
