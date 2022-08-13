import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from "./rtk/app/Store"
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <StrictMode>
    <ChakraProvider >
      <Provider store={store}>
        <ColorModeScript />
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);