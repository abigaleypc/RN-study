/**
 * Abigale 2017/6/12
 */

import React, { Component } from 'react';
import {
  StackNavigator,

} from 'react-navigation';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}
