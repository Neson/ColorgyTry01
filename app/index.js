import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';

import store from './store';
import AppContainer from './containers';

import courseDatabase from './databases/courseDatabase';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <AppContainer />}
      </Provider>
    );
  }
}

var GcmAndroid = require('react-native-gcm-android');

GcmAndroid.addEventListener('register', function(token){
  console.log('send gcm token to server', token);
});

GcmAndroid.addEventListener('notification', function(notification){
  console.log('receive gcm notification', notification);
});

GcmAndroid.requestPermissions();

window.GcmAndroid = GcmAndroid;

GcmAndroid.checkPermissions((c) => console.log('GCP', c));
