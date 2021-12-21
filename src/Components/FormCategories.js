import React from 'react';

// Chakra UI
import { Button, FormControl, Select } from '@chakra-ui/react';

const FormCategories = () => (
    <>
        <FormControl mt={8}>
            <Select>
                <option>Option One</option>
            </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={8}>
            Generate
        </Button>
    </>
);

export default FormCategories;
