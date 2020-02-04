import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Theme from './themes/Theme';
import NavBar from './components/NavBar';
import CarTablesContainer from './components/CarTablesContainer';


const App = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <NavBar />
      <CarTablesContainer />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
