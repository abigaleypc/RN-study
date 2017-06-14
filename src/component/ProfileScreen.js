/**
 * Abigale 2017/6/12
 */

import React, { Component } from 'react';
import { Button } from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
// import Button from './Button';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  // 初始化模拟数据
  constructor(props) {
    super(props);
  };
  render() {
    const { navigate } = this.props.navigation;
    return <Button
      title = "Go to Jane's profile"
      onPress={() => {
        navigate('Profile',{name:'Jane'});
      }}
    />
  }
}
