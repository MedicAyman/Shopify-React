import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopifyContext } from '../context/ShopifyProvider';

function Home() {
	const { fetchAllProducts, products } = useContext(ShopifyContext);

	useEffect(() => {
		fetchAllProducts();
	}, []);

	if (!products) return <div>Loading...</div>;

	return (
		<div>
			{products.map(product => (
				<Link key={product.title} to={`/products/${product.handle}`}>
					{product.title}
				</Link>
			))}
		</div>
	);
}

export default Home;
