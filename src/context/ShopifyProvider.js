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
	const [isCartOpen, setIsCartOpen] = useState(true);
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
		try {
			const product = await client.product.fetchByHandle(handle);
			console.log('fetchProductWithHandle', product);
			setProduct(product);
		} catch (error) {
			console.log(error);
		}
	};
	const closeCart = () => {
		setIsCartOpen(false);
	};
	const openCart = () => {
		setIsCartOpen(true);
	};
	const closeMenu = () => {
		setIsMenuOpen(false);
	};
	const openMenu = () => {
		setIsMenuOpen(true);
	};

	useEffect(() => {
		createCheckout();
	}, []);

	return (
		<ShopifyContext.Provider
			value={{
				product,
				products,
				checkout,
				isCartOpen,
				isMenuOpen,
				addItemToCheckout,
				removeLineItem,
				fetchAllProducts,
				fetchProductWithHandle,
				closeCart,
				closeMenu,
				openMenu,
				openCart
			}}
		>
			{children}
		</ShopifyContext.Provider>
	);
};

const ShopConsumer = ShopifyContext.Consumer;

export { ShopifyContext, ShopConsumer };

export default ShopifyProvider;
