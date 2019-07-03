import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';


const appDrawerNavigation = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

const AppContainer = createAppContainer(appDrawerNavigation);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
