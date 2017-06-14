/**
 * Abigale 2017/6/12
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
