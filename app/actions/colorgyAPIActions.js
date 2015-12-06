import { createAction } from 'redux-actions';
import colorgyAPI from '../utils/colorgyAPI';

export const requestAccessToken = createAction('REQUEST_ACCESS_TOKEN');
export const requestAccessTokenSuccess = createAction('REQUEST_ACCESS_TOKEN_SUCCESS');
export const requestAccessTokenFailed = createAction('REQUEST_ACCESS_TOKEN_FAILED');

export const doRequestAccessToken = userCredentials => dispatch => {
  dispatch(requestAccessToken());

  let scopeString = 'public%20email%20account%20identity%20info%20write%20notifications%20notifications:send%20api%20api:write%20offline_access';

  console.log(scopeString)

  return fetch(`${colorgyAPI.baseURL}/oauth/token?scope=${scopeString}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'password',
      username: userCredentials.username,
      password: userCredentials.password
    })
  }).then(req => req.json())
    .then(json => {
      console.log('yo')
      if (json.access_token) {
        dispatch(requestAccessTokenSuccess(json));
      } else {
        dispatch(requestAccessTokenFailed(json));
      }
    })
    .catch(reason => {
      console.log('err')
      dispatch(requestAccessTokenFailed({ error: 'request_error' }));
    });
};
