
import { useLocalStore } from 'mobx-react-lite';
import React from 'react';
import { createStore, EStore } from './store';

export const storeContext = React.createContext<EStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;