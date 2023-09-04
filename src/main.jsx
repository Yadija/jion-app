import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemeProvider } from './context/ThemeContext.jsx';
import store from './states';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);
