import React, { Component } from 'react';
import {
  Animated,
  Easing
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1
      }
    ).start();
  }
  render() {
    return (
      <Animated.View
         style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
        }}>
        {this.props.children}
      </Animated.View>
    )
  }
}
