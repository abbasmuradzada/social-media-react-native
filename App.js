import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Account from './src/screens/AccountScreen'
import Home from './src/screens/HomeScreen'
import Login from './src/screens/LoginScreen'
import Register from './src/screens/RegisterScreen'
import Create from './src/screens/CreateScreen'
import DefaultScreen from './src/screens/DefaultScreen'

import { setNavigator } from './src/navigationRef'

import { Provider as AuthProvider } from './src/context/AuthContext'

const switchNavigator = createSwitchNavigator({
  DefaultScreen,
  authFlow: createStackNavigator({
    Login,
    Register,
  }),
  mainFlow: createBottomTabNavigator({
    Account,
    Home,
    Create,
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <AuthProvider>
      <App ref={((navigator) => { setNavigator(navigator) })} />
    </AuthProvider>
  )
}