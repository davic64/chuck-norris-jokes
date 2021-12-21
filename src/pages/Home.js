import React from 'react';

// Chakra UI
import { Center, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

// Components
import FormCategories from '../Components/FormCategories';
import JokeCard from '../Components/JokeCard';

const Home = () => {
    const textSize = useBreakpointValue({ base: 'xl', md: '3xl' });

    return (
        <Center h="100vh">
            <Flex flexDirection="column" align="center">
                <Heading as="h1" size={textSize}>
                    CHUCK NORRIS JOKES
                </Heading>
                <FormCategories />
                <JokeCard />
            </Flex>
        </Center>
    );
};

export default Home;
