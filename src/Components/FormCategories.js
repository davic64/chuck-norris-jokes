import React, { useContext, useEffect, useState } from 'react';

// Chakra UI
import {
    Button,
    Center,
    FormControl,
    Select,
    useBreakpointValue,
} from '@chakra-ui/react';

// Context
import ChuckContext from '../context/chuknorris/chuckContext';

const FormCategories = () => {
    const chuckContext = useContext(ChuckContext);
    const { categories, getCategories, getJoke } = chuckContext;

    const formSize = useBreakpointValue({ base: '20rem', md: '40rem' });

    const [category, setCategory] = useState('');

    useEffect(() => {
        getCategories();
    }, []);

    const categorySelected = (event) => {
        setCategory(event.target.value);
    };

    const handle = (event) => {
        event.preventDefault();
        getJoke(category);
    };

    return (
        <form onSubmit={handle} style={{ width: formSize }}>
            <FormControl mt={8} w="100%">
                <Select placeholder="random" onChange={categorySelected}>
                    {categories &&
                        categories.map((categoryName) => (
                            <option key={categoryName} value={categoryName}>
                                {categoryName}
                            </option>
                        ))}
                </Select>
            </FormControl>
            <Center>
                <Button type="submit" colorScheme="teal" size="lg" mt={8}>
                    Generate
                </Button>
            </Center>
        </form>
    );
};

export default FormCategories;
