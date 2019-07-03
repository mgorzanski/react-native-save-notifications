import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import * as globalStyles from './styles/globalStyles';

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
    return (
      <>
        <AppContainer />
        <StatusBar backgroundColor={globalStyles.primaryColorDark} barStyle="dark-content" hidden={false} translucent={false} />
      </>
    );
  }
}
