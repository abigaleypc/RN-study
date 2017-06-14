import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class AwesomeProject extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight>
          <Text>Button</Text>
        </TouchableHighlight>
      </View>
     )

  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
