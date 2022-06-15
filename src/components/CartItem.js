import React, { useContext } from 'react';
import { Grid, Text, Flex, Image } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { ShopifyContext } from '../context/ShopifyProvider';

const CartItem = ({ item }) => {
	const { removeLineItem } = useContext(ShopifyContext);
	return (
		<Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
			<Flex alignItems="center" justifyContent="center">
				<CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
			</Flex>
			<Text alignItems="center" justifyContent="center">
				{item.title}
			</Text>

			<Flex alignItems="center" justifyContent="center">
				<Image src={item.variant.image.src} />
			</Flex>
			<Flex alignItems="center" justifyContent="center">
				{item.variant.price}
			</Flex>
		</Grid>
	);
};

export default CartItem;
