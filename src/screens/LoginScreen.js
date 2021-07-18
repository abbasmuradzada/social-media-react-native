import React, { useState } from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const Login = ({ navigation }) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Login</Text>
        </Spacer>
        {/* <Button title='go to register' onPress={() => navigation.navigate('Register')} /> */}
        {/* <Button title='go to main page' onPress={() => navigation.navigate('mainFlow')} /> */}
        <Spacer>
            <Input
                label='Username'
                value={userName}
                onChangeText={setUserName}
                autoCapitalize='none' 
                autoCorrect = {false}
                />
        </Spacer>
        <Spacer>
            <Input 
            label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                />
        </Spacer>
        <Spacer>
            <Button title='Login' />
        </Spacer>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150,
    }
})

Login.navigationOptions = () => {
    return {
        header: null,
    }
}

export default Login