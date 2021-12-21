import React from 'react';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// Pages
import Home from './pages/Home';

const App = () => (
    <ChakraProvider>
        <Home />
    </ChakraProvider>
);

export default App;
