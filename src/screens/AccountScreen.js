import React from 'react'
import { Text, Button, View } from 'react-native'

const Account = ({navigation}) => {
    return <>
        <Text>Account Screen</Text>
        <View style={{ marginTop: 300 }}></View>
        <Button title='go to login' onPress={() => navigation.navigate('Login')} />
        </>
}

export default Account