import React from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

class AwesomeProject extends React.Component {
  render() {
    return (
      <View style= {{ paddingTop: 30, backgroundColor:'#000' }}>
        <Text style= {{ color: '#f0f' }} >'#f0f' (#rgb)</Text>
        <Text style= {{ color: '#f0fc' }} > '#f0fc'(#rgba)</Text>
        <Text style= {{ color: '#ff00ff' }}  >'#ff00ff' (#rrggbb)</Text>
        <Text style= {{ color: '#ff00ff05' }} > '#ff00ff05'(#rrggbbaa)</Text>
        <Text style= {{ color: 'rgb(255, 255, 255)' }} >'rgb(255, 255, 255)'</Text>
        <Text style= {{ color: 'rgba(255, 255, 255, 1.0)' }} >'rgba(255, 255, 255, 1.0)'</Text>
        <Text style= {{ color: 'hsl(360, 100%, 100%)' }} >'hsl(360, 100%, 100%)'</Text>
        <Text style= {{ color: 'hsla(360, 100%, 100%, 1.0)' }} >'hsla(360, 100%, 100%, 1.0)'</Text>
        <Text style= {{ color: 'transparent' }} >'transparent' </Text>
        <Text style= {{ color: 'red' }} > 'red'</Text>
        <Text style= {{ color: 0xff00ff00 }}> 0xff00ff00 (0xrrggbbaa)</Text>
      </View>
     )

  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
