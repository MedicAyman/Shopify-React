import React, { useContext } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Text,
	Link,
	Box
} from '@chakra-ui/react';
import { ShopifyContext } from '../context/ShopifyProvider';
import CartItem from './CartItem';

function Cart() {
	const { isCartOpen, closeCart, checkout } = useContext(ShopifyContext);

	return (
		<>
			<Drawer
				isOpen={isCartOpen}
				placement="right"
				onClose={closeCart}
				size="sm"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						{checkout.lineItems?.length ? (
							checkout.lineItems.map(item => (
								<CartItem key={item.id} item={item} />
							))
						) : (
							<Box h="100%" w="100%">
								<Text
									h="100%"
									display="flex"
									flexDir="column"
									alignItems="center"
									justifyContent="center"
								>
									Your cart is empty
								</Text>
							</Box>
						)}
					</DrawerBody>

					{checkout.lineItems?.length ? (
						<DrawerFooter>
							<Button colorScheme="green" w="100%">
								<Link w="100%" href={checkout.webUrl}>
									Checkout
								</Link>
							</Button>
						</DrawerFooter>
					) : null}
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default Cart;
