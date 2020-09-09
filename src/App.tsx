import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import Routes from 'routes'
import NavigationBar from 'components/AppBar/NavigationBar';

import theme from 'theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Routes />
    </ThemeProvider>
  );
}

export default App
