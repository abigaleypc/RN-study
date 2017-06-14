import React from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import FadeInView from './src/components/FadeInView'

class AwesomeProject extends React.Component {
  render() {
    return (
      <View style={{paddingTop:20}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
    </FadeInView>
      </View>
     )

  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
