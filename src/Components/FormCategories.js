import React, { useContext, useEffect, useState } from 'react';

// Chakra UI
import { Button, FormControl, Select } from '@chakra-ui/react';

// Context
import ChuckContext from '../context/chuknorris/chuckContext';

const FormCategories = () => {
    const chuckContext = useContext(ChuckContext);
    const { categories, getCategories } = chuckContext;

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <FormControl mt={8}>
                <Select placeholder="all">
                    {categories &&
                        categories.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                </Select>
            </FormControl>
            <Button colorScheme="teal" size="lg" mt={8}>
                Generate
            </Button>
        </>
    );
};

export default FormCategories;
