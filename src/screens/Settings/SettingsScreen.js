import React from 'react';
import { Text } from 'native-base';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings'
  }
  
  render() {
    return (
      <Text>Settings</Text>
    );
  }
}