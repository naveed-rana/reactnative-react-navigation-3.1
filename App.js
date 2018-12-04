import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';
// import Setup from './apps/navigation/setup';

export default class App extends Component {
 
componentDidMount = () => {
  Axios.get('http://10.123.69.6:2020/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};
  
  
  render() {
    console.log("asif");
    
    return (
      <View>
      <Text>helo worlds</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
