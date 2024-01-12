import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Parallax />
				<Navigate>
					<Route
						path="/"
						exact
					>
						<div>Home Page Content</div>
					</Route>
					<Route path="/about">
						<div>About Page Content</div>
					</Route>
					<Route path="/shop">
						<div>Shop Page Content</div>
					</Route>
					<Route path="/events">
						<div>Events Page Content</div>
					</Route>
					<Route path="/testimonials">
						<div>Testimonials Page Content</div>
					</Route>
				</Navigate>
			</div>
		</Router>
	);
}

export default App;
