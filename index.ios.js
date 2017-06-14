import React from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

class AwesomeProject extends React.Component {
  render() {
    return (
      <View style={{paddingTop:20}}>
        <Text>Hello, Navigation!</Text>
      </View>
     )

  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
