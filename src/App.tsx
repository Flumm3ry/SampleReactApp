import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { data } from './data/sampleData';
import CarTable from './components/CarTable';
import Theme from './themes/Theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


const App = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/deleted">
              <h1>Deleted items</h1>
              <CarTable data={data} deleteButtonsDisabled={true}/>
          </Route>
          <Route path="/">
            <h1>Car data</h1>
            <CarTable data={data} deleteButtonsDisabled={false}/>
          </Route>
        </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
