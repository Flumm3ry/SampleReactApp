import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { data } from './data/sampleData';
import CarTable from './components/CarTable';
import Theme from './themes/Theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
