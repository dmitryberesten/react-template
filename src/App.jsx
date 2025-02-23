import React from 'react';
import transactions from 'transactions.json';
import TransactionHistory from './components/example/TransactionHistory';

export const App = () => {
  return (
    <div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
