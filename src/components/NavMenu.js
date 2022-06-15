import React, { useContext } from 'react';

import { ShopifyContext } from '../context/ShopifyProvider';
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
	Box,
	VStack
} from '@chakra-ui/react';

function NavMenu() {
	const { isMenuOpen, closeMenu } = useContext(ShopifyContext);
	return (
		<Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Create your account</DrawerHeader>

				<DrawerBody>
					<VStack p="2rem">
						<Link to="/">About Us</Link>
						<Link to="/">Learn More</Link>
						<Link to="/">Sustainability</Link>
					</VStack>
				</DrawerBody>

				<DrawerFooter textAlign="center">
					<Text w="100%">Copyright Dr. Vegan LLC</Text>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export default NavMenu;
