import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

class Homes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"naveed rana"
    };
  }

  render() {
    return (
      <View>
        <Text> {this.state.name} </Text>
        <Image
          style={{width: 40, height: 40}}
          source={{uri: 'https://firebasestorage.googleapis.com/v0/b/upandrunning-16a19.appspot.com/o/a.png_1543435775342?alt=media&token=a8843b6f-8eda-4590-83b5-570bf73b2814'}}
        />
      </View>
    );
  }
}

export default Homes;
