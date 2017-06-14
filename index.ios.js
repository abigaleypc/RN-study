import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image
} from 'react-native';

class AwesomeProject extends React.Component {
  render() {
    return (
      <View style={{paddingTop:20}}>
        <Image source={require('./testimage.jpg')} style={{ width: 400, height: 700 }}/>
      </View>
     )

  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
