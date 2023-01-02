// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// local
import "./assets/css/index.scss";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/pricing" element={<Pricing />} /> */}
					{/* <Route path="/about" element={<About />} /> */}
					<Route path="/contact" element={<Contact />} />
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
