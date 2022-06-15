import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopifyContext } from '../context/ShopifyProvider';

const ProductPage = () => {
	const handle = useParams().handle.toString();

	const { fetchProductWithHandle, addItemToCheckout, product } =
		useContext(ShopifyContext);

	useEffect(() => {
		fetchProductWithHandle(handle);
	}, [handle]);

	if (product === null) return <div>Loading...s</div>;
	return (
		<Box>
			<Grid templateColumns="repeat(2, 1fr)">
				<Image src={product.images[0].src} />
				<Box>
					<Heading>{product.title}</Heading>
					<Text>{product.variants[0].price}</Text>
					<Text>{product.description}</Text>
					<Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
						Add to Cart
					</Button>
				</Box>
			</Grid>
		</Box>
	);
};

export default ProductPage;
