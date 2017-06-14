/**
 * Abigale 2017/6/12
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {
  customPressHandler = () => {
    alert("当前状态是:"+this.state.status)
  };
  enable = () => {
    this.setState({
      disabled: false
    })
  };
  disable = () => {
    this.setState({
      disabled: true
    })
  };
   // 初始化模拟数据
  constructor(props) {
    super(props);
    this.state = {
      disabled: false, 
    };
  }
  render() {
    const { text } = this.props;

    return (
      <View style={styles.container
        }>
        <TouchableOpacity 
          disabled = {this.state.disabled}
          style={[styles.button, this.state.disabled && styles.disabled]}
          onPress={this.customPressHandler}>
          <Text style={styles.buttonText
        }>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 22
  },
  button: {
    height: 40,
    width: 90,
    borderRadius: 20,
    backgroundColor:'green',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'hidden'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff'
  },
  disabled: {
    backgroundColor: 'gray'
  }
});

