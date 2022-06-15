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
	Grid,
	Text,
	Flex,
	Image,
	Link
} from '@chakra-ui/react';
import { ShopifyContext } from '../context/ShopifyProvider';
import { CloseIcon } from '@chakra-ui/icons';

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

					<DrawerBody>
						{checkout.lineItems &&
							checkout.lineItems.map(item => (
								<Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
									<Flex alignItems="center" justifyContent="center">
										<CloseIcon
											cursor="pointer"
											onClick={() => removeLineItem(item.id)}
										/>
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
							))}
					</DrawerBody>

					<DrawerFooter>
						<Button colorScheme="green" w="100%">
							<Link w="100%" href={checkout.webUrl}>
								Checkout
							</Link>
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default Cart;
