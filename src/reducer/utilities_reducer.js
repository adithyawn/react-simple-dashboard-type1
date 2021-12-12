const utilities_reducer = (state, action) => {
  if (action.type === 'IS_SIDEBAR_COLLAPSE') {
    const { is_sidebar_collapse } = state;
    return {
      ...state,
      is_sidebar_collapse: !is_sidebar_collapse,
    };
  }
  if (action.type === 'IS_HEADERBAR_COLLAPSE') {
    const { is_headerbar_collapse } = state;
    return {
      ...state,
      is_headerbar_collapse: !is_headerbar_collapse,
    };
  }
  if (action.type === 'SELECTED_ID_SIDEBAR') {
    const data = action.payload;
    return {
      ...state,
      selected_id_sidebar: data,
    };
  }
  throw new Error('no matching action type');
};

export default utilities_reducer;
