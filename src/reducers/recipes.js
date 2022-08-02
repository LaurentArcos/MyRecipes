export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        ...state,
        list: action.payload.recipes,
      };

    default:
      return state;
  }
};

export default reducer;
