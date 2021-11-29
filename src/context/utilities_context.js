import React, { useContext, useReducer } from 'react';
import reducer from '../reducer/utilities_reducer';

const initialState = {
  is_sidebar_collapse: false,
  is_headerbar_collapse: false,
};

const UtilitiesContext = React.createContext();

export const UtilitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const collapseSidebar = (e) => {
    e.preventDefault();
    dispatch({ type: 'IS_SIDEBAR_COLLAPSE' });
  };

  const collapseHeaderbar = (e) => {
    e.preventDefault();
    dispatch({ type: 'IS_HEADERBAR_COLLAPSE' });
  };

  return (
    <UtilitiesContext.Provider
      value={{
        ...state,
        collapseSidebar,
        collapseHeaderbar,
      }}
    >
      {children}
    </UtilitiesContext.Provider>
  );
};

export const useUtilitiesContext = () => {
  return useContext(UtilitiesContext);
};
