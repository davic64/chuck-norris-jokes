import React from 'react';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// Context
import ChuckState from './context/chuknorris/ChuckState';

// Pages
import Home from './pages/Home';

const App = () => (
    <ChuckState>
        <ChakraProvider>
            <Home />
        </ChakraProvider>
    </ChuckState>
);

export default App;
