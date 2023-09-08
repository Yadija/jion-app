import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
// context
import { SearchProvider } from './context/SearchContext';
import { ThemeProvider } from './context/ThemeContext.jsx';
// states
import store from './states';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <SearchProvider>
        <BrowserRouter>
          <StrictMode>
            <App />
          </StrictMode>
        </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  </Provider>,
);
