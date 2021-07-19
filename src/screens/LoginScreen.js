import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const Login = ({ navigation }) => {

    const { state, login } = useContext(AuthContext);
    const [email, setEmail] = useState('hasannh@code.edu.az')
    const [password, setPassword] = useState('123456')

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Login</Text>
        </Spacer>
        {/* <Button title='go to register' onPress={() => navigation.navigate('Register')} /> */}
        {/* <Button title='go to main page' onPress={() => navigation.navigate('mainFlow')} /> */}
        <Spacer>
            <Input
                label='Email'
                value={email}
                onChangeText={setEmail}
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
            <Button onPress={() => login({email, password})} title='Login' />
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
        headerShown: false
    }
}

export default Login