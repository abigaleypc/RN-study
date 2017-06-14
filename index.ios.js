import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './src/component/ChatScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
         <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
     )

  }
}

const AwesomeProject = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
