import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ShopifyContext } from '../context/ShopifyProvider';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';

import Logo from '../assets/drvegan_logo.png';

function NavBar() {
	const { openCart, openMenu, checkout } = useContext(ShopifyContext);

	return (
		<Flex
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			p="2rem"
			backgroundColor="blackAlpha.900"
		>
			<Icon cursor="pointer" fill="white" as={MdMenu} w={30} h={30} />
			<Image src={Logo} w={50} h={50} />
			<Icon
				cursor="pointer"
				fill="white"
				as={MdShoppingBasket}
				w={30}
				h={30}
				onClick={openCart}
			/>
		</Flex>
	);
}

export default NavBar;
