import React from 'react';
import { data } from './data/sampleData';
import CarTable from './components/CarTable';

const App = () => (
  <>
    <h1>Hello, World!</h1>
    <CarTable data={data} />
  </>
);

export default App;
