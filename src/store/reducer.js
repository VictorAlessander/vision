const initialState = {
  authenticated: true
};

const reducer = (state = initialState, action) => {
  if (action.type === 'AUTH') {
    state.authenticated = true
  }

  return state;
}

export default reducer;