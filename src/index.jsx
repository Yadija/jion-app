import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './states';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);

/**
 * @TODO home page // done
 */

/**
 * @TODO detail page
 */

/**
 * @TODO navigation // done
 */

/**
 * @TODO not found page // done
 */

/**
 * @TODO season page by year and season
 */

/**
 * @TODO top page
 */

/**
 * @TODO recommendations page
 */

/**
 * @TODO random page
 */

/**
 * @TODO producers page
 */

/**
 * @TODO search page
 */

/**
 * @TODO characters page
 */

/**
 * @TODO add loading while isPreload is true // done
 */
