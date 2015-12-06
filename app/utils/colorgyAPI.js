import store from '../store';
import { doRequestAccessToken } from '../actions/colorgyAPIActions';

var colorgyAPI = {};

const baseURL = 'https://colorgy.io';

/**
 * Request a new access token from the server, and saves it into the store.
 *
 * @param {object} credentials Containing "username" and "password".
 */
function requestAccessToken(credentials) {
  store.dispatch(doRequestAccessToken(credentials));
}

/**
 * Get the access token (with automatically refresh), returns an
 * `Promise` object.
 *
 * @return {promise} With the access token input as a string on
 * success, or an error object if faild.
 */
function getAccessToken(forceRefresh = false) {
  // TODO
}

/**
 * Generates an uuid.
 *
 * @return {string} An random unique uuid.
 */
function generateUUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

/**
 * Get the current semester year.
 *
 * @return {number}
 */
function getCurrentYear() {
  var date = (new Date());
  return ((date.getMonth() + 1 > 6) ? date.getFullYear() : date.getFullYear() - 1);
}

/**
 * Get the current semester term.
 *
 * @return {number}
 */
function getCurrentTerm() {
  var date = (new Date());
  return ((date.getMonth() + 1 > 6) ? 1 : 2);
}

colorgyAPI = {
  ...colorgyAPI,
  baseURL: baseURL,
  getAccessToken: getAccessToken,
  requestAccessToken: requestAccessToken,
  generateUUID: generateUUID,
  getCurrentYear: getCurrentYear,
  getCurrentTerm: getCurrentTerm
};

if (window) window.colorgyAPI = colorgyAPI;

export default colorgyAPI;
