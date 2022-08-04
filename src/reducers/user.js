import { CHANGE_LOGIN_FIELD } from '../actions/user';

export const initialState = {
  logged: false,

  loginForm: {
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.key]: action.payload.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
