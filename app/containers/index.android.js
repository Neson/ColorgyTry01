import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';
import { connect } from 'react-redux/native';
import MK, { MKButton, MKColor } from 'react-native-material-kit';
import FBLogin from 'react-native-facebook-login';


import ScrollableTabView from '../components/ScrollableTabView';
import { testPlus } from '../actions/testActions';
import colorgyAPI from '../utils/colorgyAPI';

var AppContainer = React.createClass({

  _handleCountAdd: function() {
    this.props.dispatch(testPlus());
  },

  _handleTestLogin: function() {
    colorgyAPI.requestAccessToken({ username: 'pkc@pokaichang.com', password: 'qazwsxedc' });
  },

  render: function() {
    return (
      <View>
        <ScrollableTabView color="#fff" activeColor="#ff7f00" backgroundColor="#26caa0">
          <View style={styles.container} tabLabel="課表">
            <Text style={styles.welcome}>
              This is a counter using Redux!
            </Text>
            <View style={{ padding: 10 }}>
              <MKButton
                backgroundColor={MKColor.Teal}
                shadowRadius={2}
                shadowOffset={{width:0, height:2}}
                shadowOpacity={.7}
                shadowColor="black"
                onPress={this._handleCountAdd}
              >
                <Text pointerEvents="none"
                      style={{ color: 'white', fontWeight: 'bold' }}>
                  PRESS ME TO COUNT
                </Text>
              </MKButton>
            </View>
            <View style={{ padding: 10 }}>
              <MKButton
                backgroundColor={MKColor.Teal}
                shadowRadius={2}
                shadowOffset={{width:0, height:2}}
                shadowOpacity={.7}
                shadowColor="black"
                onPress={this._handleTestLogin}
              >
                <Text pointerEvents="none"
                      style={{ color: 'white', fontWeight: 'bold' }}>
                  PRESS ME TO TEST LOGIN
                </Text>
              </MKButton>
            </View>
            <Text style={styles.instructions}>
              {this.props.count}
            </Text>
            <FBLogin style={{ marginBottom: 10, }}
              permissions={["email","user_friends"]}
              onLogin={function(data){
                console.log("Logged in!");
                console.log(data);
              }}
              onLogout={function(){
                console.log("Logged out.");
              }}
              onLoginFound={function(data){
                console.log("Existing login found.");
                console.log(data);
              }}
              onLoginNotFound={function(){
                console.log("No user logged in.");
              }}
              onError={function(data){
                console.log("ERROR");
                console.log(data);
              }}
              onCancel={function(){
                console.log("User cancelled.");
              }}
              onPermissionsMissing={function(data){
                console.log("Check permissions!");
                console.log(data);
              }}
            />
          </View>
          <View elevation={3} style={styles.container} tabLabel="活動">
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
