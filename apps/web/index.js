import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from 'styled-components';

const app = (
  <ThemeProvider theme={{ background: '#bbb' }}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById('app'));
