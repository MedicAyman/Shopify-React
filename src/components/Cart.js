import React, { useContext } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button
} from '@chakra-ui/react';
import { ShopifyContext } from '../context/ShopifyProvider';

function Cart() {
	const { isCartOpen, closeCart, checkout, removeLineItem } =
		useContext(ShopifyContext);
	return (
		<>
			<Drawer isOpen={isCartOpen} placement="right" onClose={closeCart}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody></DrawerBody>

					<DrawerFooter>
						<Button colorScheme="green">Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default Cart;
