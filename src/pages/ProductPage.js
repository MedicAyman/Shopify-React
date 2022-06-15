import {
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Text
} from '@chakra-ui/react';
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
		<Box p="2rem">
			<Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m="auto">
				<Flex justifyContent="center" alignItems="center">
					<Image w={400} h={450} src={product.images[0].src} />
				</Flex>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					px="2rem"
				>
					<Heading pb="2rem">{product.title}</Heading>
					<Text fontWeight="bold" pb="2rem">
						${product.variants[0].price}
					</Text>
					<Text pb="2rem" color="gray.500">
						{product.description}
					</Text>
					<Button
						onClick={() => addItemToCheckout(product.variants[0].id, 1)}
						_hover={{ opacity: '70%' }}
						w="10rem"
						backgroundColor="green.500"
					>
						Add to Cart
					</Button>
				</Flex>
			</Grid>
		</Box>
	);
};

export default ProductPage;
