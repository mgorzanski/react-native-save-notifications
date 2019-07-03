import React, { Component } from 'react';
import { Container } from 'native-base';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeStackNavigator from './screens/Home';
import SettingsStackNavigator from './screens/Settings';


const appDrawerNavigation = createDrawerNavigator({
  Home: {
    screen: HomeStackNavigator
  },
  Settings: {
    screen: SettingsStackNavigator
  }
});

const AppContainer = createAppContainer(appDrawerNavigation);

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppContainer />
      </Container>
    );
  }
}
