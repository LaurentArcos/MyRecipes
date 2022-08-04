export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const changeLoginField = (value, key) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    value,
    key,
  },
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});
