import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
function App() {
	return (
		<Router>
			<NavBar />
			<NavMenu />
			<Cart />
			<Hero />
			<Routes>
				<Route path="/products/:handle" element={<ProductPage />} />
				<Route path="/" exact element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
