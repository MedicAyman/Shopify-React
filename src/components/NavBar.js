import { Flex, Icon, Image, Box, Badge } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ShopifyContext } from '../context/ShopifyProvider';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
			<Icon
				cursor="pointer"
				fill="white"
				as={MdMenu}
				w={30}
				h={30}
				onClick={() => openMenu()}
			/>
			<Link to="/">
				<Image src={Logo} w={50} h={50} />
			</Link>
			<Box position="relative">
				<Icon
					cursor="pointer"
					fill="white"
					as={MdShoppingBasket}
					w={30}
					h={30}
					onClick={openCart}
				/>
				<Badge
					backgroundColor="red.700"
					borderRadius="50%"
					textColor="white"
					top="-10px"
					left="100%"
					position="absolute"
				>
					{checkout.lineItems?.length}
				</Badge>
			</Box>
		</Flex>
	);
}

export default NavBar;
