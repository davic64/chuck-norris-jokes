/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';

// Chakra UI
import {
    Box,
    Flex,
    Image,
    Text,
    Spinner,
    Center,
    useBreakpointValue,
} from '@chakra-ui/react';

// Context
import ChuckContext from '../context/chuknorris/chuckContext';

const JokeCard = () => {
    const chuckContext = useContext(ChuckContext);
    const { joke, loading } = chuckContext;

    const cardSize = useBreakpointValue({ base: '20rem', md: '40rem' });
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

    return joke ? (
        !loading ? (
            <Box borderWidth="1px" borderRadius="lg" w={cardSize} mt={16} p={8}>
                {joke && (
                    <Flex align="center" flexDirection={flexDirection}>
                        <Image src={joke.icon_url} />
                        <Text ml={{ base: 0, md: 6 }} mt={{ base: 6, md: 0 }}>
                            {joke.value}
                        </Text>
                    </Flex>
                )}
            </Box>
        ) : (
            <Box w={cardSize} mt={16} p={8}>
                <Center>
                    <Spinner size="xl" />
                </Center>
            </Box>
        )
    ) : null;
};

export default JokeCard;
