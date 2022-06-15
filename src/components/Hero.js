import { Box, Button, Center, Image, Text } from '@chakra-ui/react';
import React from 'react';
import BackgroungDrVegan from '../assets/bg-drvegan.jpeg';
const Hero = () => {
	return (
		<Box backgroundColor="blackAlpha.900" w="100%" position="relative" h="70vh">
			<Image src={BackgroungDrVegan} objectFit="cover" h="100%" m="auto" />
			<Text
				position="absolute"
				bottom={['20%', '30%', '40%', '40%']}
				textColor="whiteAlpha.900"
				textAlign="center"
				w="100%"
				fontWeight="bold"
				fontSize="4rem"
				className="tracking-in-expand"
			>
				Lorem ipsum dolor sit amet consectetur.
			</Text>
			<Center>
				<Button
					w="10rem"
					backgroundColor="green.500"
					color="white"
					_hover={{ opacity: '70%' }}
					position="absolute"
					bottom="10%"
				>
					Shop now
				</Button>
			</Center>
		</Box>
	);
};

export default Hero;
