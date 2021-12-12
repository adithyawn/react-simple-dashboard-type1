import React, { useContext, useReducer } from 'react';
import reducer from '../reducer/utilities_reducer';

const initialState = {
  is_sidebar_collapse: false,
  is_headerbar_collapse: false,
  selected_id_sidebar: 0,
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

  const selectedIdSidebar = (id) => {
    dispatch({ type: 'SELECTED_ID_SIDEBAR', payload: id });
  };

  return (
    <UtilitiesContext.Provider
      value={{
        ...state,
        collapseSidebar,
        collapseHeaderbar,
        selectedIdSidebar,
      }}
    >
      {children}
    </UtilitiesContext.Provider>
  );
};

export const useUtilitiesContext = () => {
  return useContext(UtilitiesContext);
};
