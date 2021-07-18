import React from 'react'
import { Text, Button } from 'react-native'

const Account = ({navigation}) => {
    return <>
        <Text>Account Screen</Text>
        <Button title='go to login' onPress={() => navigation.navigate('Login')} />
        </>
}

export default Account