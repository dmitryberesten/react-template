import React from 'react';
import data from 'data.json';
import Statistics from './components/example/Statistics';

export const App = () => {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

