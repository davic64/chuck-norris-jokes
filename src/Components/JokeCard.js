/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';

// Chakra UI
import { Box, Flex, Image, Text, Spinner, Center } from '@chakra-ui/react';

// Context
import ChuckContext from '../context/chuknorris/chuckContext';

const JokeCard = () => {
    const chuckContext = useContext(ChuckContext);
    const { joke, loading } = chuckContext;

    return joke ? (
        !loading ? (
            <Box borderWidth="1px" borderRadius="lg" w="40rem" mt={16} p={8}>
                {joke && (
                    <Flex align="center">
                        <Image src={joke.icon_url} />
                        <Text ml={6}>{joke.value}</Text>
                    </Flex>
                )}
            </Box>
        ) : (
            <Box w="40rem" mt={16} p={8}>
                <Center>
                    <Spinner size="xl" />
                </Center>
            </Box>
        )
    ) : null;
};

export default JokeCard;
