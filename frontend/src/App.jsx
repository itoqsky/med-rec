import React from 'react';
import { EthProvider } from './contexts/EthContext';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { AlertProvider } from './contexts/AlertContext/AlertContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define the custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Replace this with your desired dark background color
    },
  },
});

function App() {
  const content = useRoutes(routes);

  return (
    // Wrap the App component with ThemeProvider and provide it with the darkTheme
    <ThemeProvider theme={darkTheme}>
      <EthProvider>
        <AlertProvider>{content}</AlertProvider>
      </EthProvider>
    </ThemeProvider>
  );
}

export default App;
