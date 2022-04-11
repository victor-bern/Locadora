import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './appRouter';
import { LocadoraContextProvider } from './Context/LocadoraContext';

ReactDOM.render(
  <LocadoraContextProvider>
    <AppRouter />
  </LocadoraContextProvider>,
  document.getElementById('root')
);
