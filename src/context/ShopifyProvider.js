import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';

const ShopifyContext = React.createContext();

const client = Client.buildClient({
	domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
	storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});
const ShopifyProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState(null);
	const [checkout, setCheckout] = useState(null);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const createCheckout = async () => {
		if (localStorage.checkout_id) {
			fetchCheckout(localStorage.checkout_id);
		} else {
			const checkout = await client.checkout.create();
			localStorage.setItem('checkout_id', checkout.id);
			setCheckout(checkout);
		}
	};
	const fetchCheckout = async checkout_id => {
		const checkout = await client.checkout.fetch(checkout_id);
		setCheckout(checkout);
	};
	const addItemToCheckout = async () => {};
	const removeLineItem = async lineItemIdsToRemove => {};
	const fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		setProducts(products);
	};
	const fetchProductWithHandle = async handle => {
		const product = await client.product.fetchByHandle(handle);
		setProduct(product);
	};
	const closeCart = () => {};
	const openCart = () => {};
	const closeMenu = () => {};
	const openMenu = () => {};

	useEffect(() => {
		createCheckout();
	}, []);

	console.log(checkout);

	return <ShopifyContext.Provider>{children}</ShopifyContext.Provider>;
};

const ShopConsumer = ShopifyContext.Consumer;

export { ShopifyContext, ShopConsumer };

export default ShopifyProvider;
