import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopifyContext } from '../context/ShopifyProvider';

const ProductPage = () => {
	const handle = useParams().handle.toString();

	const { fetchProductWithHandle, addItemToCheckout, product } =
		useContext(ShopifyContext);

	useEffect(() => {
		fetchProductWithHandle(handle);
	}, [fetchProductWithHandle, handle]);

	console.log(product);
	if (product === null) return <div>Loading...s</div>;
	return (
		<div>
			<h1>{product.title}</h1>
		</div>
	);
};

export default ProductPage;
