import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Homes from '../screens/home';

export default class Setup extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const AppContainer = createAppContainer(AppStackNavigator);

const AppStackNavigator = createStackNavigator({
    Home:Homes
})
