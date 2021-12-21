import React from 'react';

// Chakra UI
import { Center, Flex, Heading } from '@chakra-ui/react';

// Components
import FormCategories from '../Components/FormCategories';

const Home = () => (
    <Center h="100vh">
        <Flex flexDirection="column" align="center">
            <Heading as="h1" size="3xl">
                CHUCK NORRIS JOKES
            </Heading>
            <FormCategories />
        </Flex>
    </Center>
);

export default Home;
