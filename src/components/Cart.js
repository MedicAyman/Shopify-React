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
	Link,
	Box
} from '@chakra-ui/react';
import { ShopifyContext } from '../context/ShopifyProvider';
import { CloseIcon } from '@chakra-ui/icons';

function Cart() {
	const { isCartOpen, closeCart, checkout, removeLineItem } =
		useContext(ShopifyContext);

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
