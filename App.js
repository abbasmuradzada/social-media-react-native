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

import { Provider as AuthProvider } from './src/context/AuthContext'

const switchNavigator = createSwitchNavigator({
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
      <App/>
    </AuthProvider>
  )
}

// export default function App() {

//   const [termAct, setTermAct] = useState(false)
//   const [inputTerm, setInputTerm] = useState('')
//   const [greetingMsg, setGreetingMsj] = useState('')



//   // const handleInput = (val) => {
//   //   setTermAct(val)
//   // }


//   return (
//     <View style={styles.container}>

//       <TextInput onChangeText={val => setTermAct(val)} defaultValue={inputTerm} placeholder='adinizi daxil edin' />
//       {/* {inputTerm && <Text>salam {inputTerm} bəy</Text>} */}
//       {/* {greetingMsg.length > 0 && <Text>{greetingMsg}</Text>} */}
//       <StatusBar style="auto" />
//       <Button onPress={() => setTermAct(!termAct)} title={termAct ? 'hide number' : 'show number'} />
//       {termAct && <Text>55 646 74 47</Text>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

