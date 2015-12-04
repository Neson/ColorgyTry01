import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';
import { connect } from 'react-redux/native';

import ScrollableTabView from '../components/ScrollableTabView';

var AppContainer = React.createClass({
  render: function() {
    return (
      <View>
        <ScrollableTabView color="#fff" activeColor="#ff7f00" backgroundColor="#26caa0">
          <View style={styles.container} tabLabel="課表">
            <Text style={styles.welcome}>
              Welcome to React Native! Yo! Ya!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Shake or press menu button for dev menu
            </Text>
          </View>
          <View style={styles.container} tabLabel="活動">
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
          <View style={styles.container} tabLabel="個人">
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
      </View>
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

export default connect((state) => ({
  count: state.test.count
}))(AppContainer);
