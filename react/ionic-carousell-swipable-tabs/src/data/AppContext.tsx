import React, { createContext, useEffect, useReducer } from 'react';
import { initialState, AppState, reducers } from './state';

import { Storage, Drivers } from '@ionic/storage';
import { useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';

const browser_store = new Storage({
  name: '__mydb',
  driverOrder: [Drivers.LocalStorage, Drivers.IndexedDB],
});

// const storage = new Storage({
//   name: '__mydb',
//   driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
// });

const theme = {
  color1: '#FFFBEB',
  color2: '#495579',
  color3: '#263159',
  color4: '#251749',
};

export interface AppContextState {
  state: AppState;
  dispatch: React.Dispatch<any>;
  theme: {};
  browser_store: any;
}

export const AppContext = createContext<AppContextState>({
  state: initialState,
  dispatch: () => undefined,
  theme: theme,
  browser_store: {},
});

export const AppContextProvider: React.FC = (props:any) => {
  const [store, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    (async () => {
      await browser_store.create();
      console.debug('browser_store created');
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: store,
        dispatch,
        theme,
        browser_store,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
