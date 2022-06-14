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
	console.log(products);
	return (
		<Box>
			<Grid templateColumns="repeat(3, 1fr)">
				{products.map(product => (
					<Box _hover={{ opacity: '80%' }} textAlign="center">
						<Link key={product.bundle} to={`/products/${product.handle}`}>
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
