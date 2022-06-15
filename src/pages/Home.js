import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopifyContext } from '../context/ShopifyProvider';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
function Home() {
	const { fetchAllProducts, products } = useContext(ShopifyContext);

	useEffect(() => {
		fetchAllProducts();
	}, []);

	if (!products) return <div>Loading...</div>;

	return (
		<Box p="2rem">
			<Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}>
				{products.map(product => (
					<Box _hover={{ opacity: '80%' }} textAlign="center" key={product.id}>
						<Link to={`/products/${product.handle}`}>
							<Image
								src={product.images[0].src}
								boxSize="500px"
								objectFit="cover"
								alt="ebook covers"
							/>
							<Text>{product.title}</Text>
							<Text>${product.variants[0].price}</Text>
						</Link>
					</Box>
				))}
			</Grid>
		</Box>
	);
}

export default Home;
