import { Box, Grid, Image, VStack, Flex, Text } from '@chakra-ui/react';
import Logo from '../assets/drvegan_logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Box backgroundColor="blackAlpha.900" p="1rem">
			<Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}>
				<Flex flexDir="row" alignItems="center" justify="center">
					<Image src={Logo} w={150} h={150} p="2em" />
				</Flex>
				<VStack></VStack>
				<VStack p="2rem" color="whiteAlpha.900">
					<Link to="/">About us</Link>
					<Link to="/">Learn More</Link>
					<Link to="/">FAQ</Link>
				</VStack>
			</Grid>
			<Box>
				<Text
					w="100%"
					color="whiteAlpha.900"
					textAlign="center"
					borderTop="1px solid white"
					p="1rem"
				>
					Copyright Dr. Vegan LLC
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;
