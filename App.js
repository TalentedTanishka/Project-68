import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FACEBOOK from './screens/fb';
import INSTAGRAM from './screens/in';
import {createAppContainer} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render()
  {
    return (
    <AppContainer/>
    
      );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var TabNavigator = createBottomTabNavigator({
  Facebook : {screen:FACEBOOK},
  Instagram : {screen:INSTAGRAM}
})

const AppContainer = createAppContainer(TabNavigator)