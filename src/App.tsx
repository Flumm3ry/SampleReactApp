import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { data } from './data/sampleData';
import CarTable from './components/CarTable';
import Theme from './themes/Theme';


const App = () => (
  <ThemeProvider theme={Theme}>
    <h1>Hello, World!</h1>
    <CarTable data={data} />
  </ThemeProvider>
);

export default App;
