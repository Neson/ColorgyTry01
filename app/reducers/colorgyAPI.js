import { handleActions } from 'redux-actions';

export default handleActions({
  REQUEST_ACCESS_TOKEN: (state, action) => {
    return {
      ...state,
      accessToken: null,
      lastResponse: null
    };
  },

  REQUEST_ACCESS_TOKEN_SUCCESS: (state, action) => {
    console.log(action.payload);
    return {
      ...state,
      accessToken: action.payload.access_token,
      lastResponse: action.payload
    };
  },

  REQUEST_ACCESS_TOKEN_FAILED: (state, action) => {
    return {
      ...state,
      accessToken: null,
      lastResponse: action.payload
    };
  }
}, {
  accessToken: null,
  lastResponse: null
 });
