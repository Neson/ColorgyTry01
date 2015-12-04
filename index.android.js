/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

import ScrollableTabView from './app/components/ScrollableTabView';

var ColorgyTryA = React.createClass({
  render: function() {
    return (
      <ScrollableTabView color="#fff" activeColor="#ff7f00" backgroundColor="#26caa0">
        <View style={styles.container} tabLabel="This">
          <Text style={styles.welcome}>
            Welcome to React Native! Yo!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container} tabLabel="That">
          <Text style={styles.welcome}>
            Welcome to React Native! Yo!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container} tabLabel="Other">
          <Text style={styles.welcome}>
            Welcome to React Native! Yo!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
        <View style={styles.container} tabLabel="Another">
          <Text style={styles.welcome}>
            Welcome to React Native! Yo!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
      </ScrollableTabView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ColorgyTryA', () => ColorgyTryA);
