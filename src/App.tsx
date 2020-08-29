import React from 'react';

import { ThemeProvider } from '@material-ui/core';

import MainPage from 'pages/MainPage';

import theme from 'theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
