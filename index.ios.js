import React from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

class AwesomeProject extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
      </View>
     )

  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
