import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/products/:handle" element={<ProductPage />} />
				<Route path="/" exact element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
