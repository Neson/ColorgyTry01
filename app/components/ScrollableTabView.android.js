import React from 'react-native';
import TabBar from './TabBar';

var {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PanResponder,
  Animated,
} = React;

var deviceWidth = Dimensions.get('window').width;

var ScrollableTabView = React.createClass({
  propTypes: {
    initialPage: React.PropTypes.number,
    tabBarPosition: React.PropTypes.string,
    edgeHitWidth: React.PropTypes.number,
    springTension: React.PropTypes.number,
    springFriction: React.PropTypes.number,
    color: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    activeColor: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      tabBarPosition: 'top',
      edgeHitWidth: 45,
      springTension: 50,
      springFriction: 10,
      color: 'black',
      backgroundColor: 'white',
      activeColor: 'blue'
    }
  },

  getInitialState() {
    var currentPage = this.props.initialPage || 0;

    return {
      currentPage: currentPage,
      currentActivePage: currentPage,
      scrollValue: new Animated.Value(currentPage)
    };
  },

  componentWillMount() {
    let onTouchRelease = (e, gestureState) => {
      var relativeGestureDistance = gestureState.dx / deviceWidth,
          lastPageIndex = this.props.children.length - 1,
          vx = gestureState.vx,
          newPage = this.state.currentPage;

      if (relativeGestureDistance < -0.5 || (relativeGestureDistance < 0 && vx <= -0.5)) {
        newPage = newPage + 1;
      } else if (relativeGestureDistance > 0.5 || (relativeGestureDistance > 0 && vx >= 0.5)) {
        newPage = newPage - 1;
      }

      this.props.hasTouch && this.props.hasTouch(false);
      this.goToPage(Math.max(0, Math.min(newPage, this.props.children.length - 1)));
    }

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        var { dx, dy, moveX } = gestureState;
        var { edgeHitWidth, locked, hasTouch } = this.props;

        if (Math.abs(dx) > Math.abs(dy)) {
          if ((moveX <= edgeHitWidth ||
               moveX >= deviceWidth - edgeHitWidth) &&
              locked !== true) {
            hasTouch && hasTouch(true);
            return true;
          }
        }
      },

      onPanResponderMove: (e, gestureState) => {
        var { dx, vx } = gestureState;
        var lastPageIndex = this.props.children.length - 1;
        var relativeGestureDistance = dx / deviceWidth;
        var newPage = this.state.currentPage;

        var offsetX = dx - (this.state.currentPage * deviceWidth);
        this.state.scrollValue.setValue(-1 * offsetX / deviceWidth);

        // if (relativeGestureDistance < -0.5 || (relativeGestureDistance < 0 && vx <= -0.5)) {
        //   newPage = newPage + 1;
        // } else if (relativeGestureDistance > 0.5 || (relativeGestureDistance > 0 && vx >= 0.5)) {
        //   newPage = newPage - 1;
        // }

        // this.setState({ currentActivePage: newPage });
      },

      onPanResponderRelease: onTouchRelease,
      onPanResponderTerminate: onTouchRelease
    });
  },

  goToPage(pageNumber) {
    this.props.onChangeTab && this.props.onChangeTab({
      index: pageNumber, ref: this.props.children[pageNumber]
    });

    this.setState({
      currentPage: pageNumber,
      currentActivePage: pageNumber
    });

    Animated.spring(this.state.scrollValue, { toValue: pageNumber, friction: this.props.springFriction, tension: this.props.springTension }).start();
  },

  renderTabBar(props) {
    if (this.props.renderTabBar === false) {
      return null;
    } else if (this.props.renderTabBar) {
      return React.cloneElement(this.props.renderTabBar(), props);
    } else {
      return <TabBar {...props} />;
    }
  },

  render() {
    var sceneContainerStyle = {
      width: deviceWidth * this.props.children.length,
      flex: 1,
      flexDirection: 'row'
    };

    var translateX = this.state.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, -deviceWidth]
    });

    var tabBarProps = {
      ...this.props,
      goToPage: this.goToPage,
      tabs: this.props.children.map((child) => child.props.tabLabel),
      activeTab: this.state.currentActivePage,
      scrollValue: this.state.scrollValue
    };

    return (
      <View style={{ flex: 1 }}>
        {this.props.tabBarPosition === 'top' ? this.renderTabBar(tabBarProps) : null}
        <Animated.View style={[sceneContainerStyle, {transform: [{translateX}]}]}
          {...this._panResponder.panHandlers}>
          {this.props.children}
        </Animated.View>
        {this.props.tabBarPosition === 'bottom' ? this.renderTabBar(tabBarProps) : null}
      </View>
    );
  }
});

export default ScrollableTabView;
