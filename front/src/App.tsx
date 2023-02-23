import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { MantineProvider } from '@mantine/core';
import MyTheme from './utils/myTheme';
import './assets/styles/App.css';

function App() {
  return (
    <MantineProvider theme={MyTheme} withGlobalStyles withCSSVariables withNormalizeCSS>
      <Header />
      <HomePage />
      <Footer />
    </MantineProvider>
  );
}

export default App;
