import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import Theme from './themes/Theme';
import NavBar from './components/NavBar';
import { AppContext, AppContextProvider, AppContextInterface } from './contexts/AppContext';
import CarTable from './components/CarTable';
import JokeDisplay from './components/JokeDisplay';


const App = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <NavBar />
      <AppContextProvider>
        <Route exact path="/deleted">
          <div className="margin">
            <h1>Deleted Cars</h1>
            <AppContext.Consumer>
              {(context: AppContextInterface) => (
                <CarTable
                  data={context.deletedCars}
                  deleteButtonsDisabled
                  onDataChange={context.updateCars}
                />
              )}
            </AppContext.Consumer>
          </div>
        </Route>
        <Route exact path="/">
          <div className="margin">
            <h1>Available Cars</h1>
            <AppContext.Consumer>
              {(context: AppContextInterface) => (
                <CarTable
                  data={context.availableCars}
                  deleteButtonsDisabled={false}
                  onDataChange={context.updateCars}
                />
              )}
            </AppContext.Consumer>
          </div>
        </Route>
        <Route exact path="/jokes">
          <div className="margin">
            <h1>Jokes</h1>
            <JokeDisplay />
          </div>
        </Route>
      </AppContextProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
