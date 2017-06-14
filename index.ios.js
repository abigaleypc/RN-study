import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView
} from 'react-native';

class AwesomeProject extends React.Component {
  _onPressButton() {
    alert("您点击了此按钮");
  }
  _onLongPressButton() {
    alert("您长按了此按钮");

  }
  render() {
    return (
      <View styles={{paddingTop:20}}>
        <TouchableHighlight 
          onPress={this._onPressButton} 
          onLongPress={this._onLongPressButton}
          style={styles.button}>
          <Text style={styles.text}>请控制这个按钮：点击、长按</Text>
        </TouchableHighlight>
          <ScrollView 
            style={styles.scrollView}
            maximumZoomScale={3}>
            <Text style={styles.text}>scrollView内容</Text>

          </ScrollView>
      </View>
     )

  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

let styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: '#333'
  },
  text: {
    color: '#fff'
  },
  scrollView: {
    width: 400,
    height: 600,
    backgroundColor: '#333'
  }
})
