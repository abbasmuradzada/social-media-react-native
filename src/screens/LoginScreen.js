import React, { useState, useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const Login = ({ navigation }) => {

    const { state, login } = useContext(AuthContext);
    const [email, setEmail] = useState('murad@code.edu.az')
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
                autoCorrect={false}
            />
            {/* </Spacer>
        <Spacer> */}
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
            {/* I can write also with && operator, but then there is an error  */}
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        </Spacer>
        <Spacer>
            <Button onPress={() => login({ email, password })} title='Login' />
        </Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.navBetweenLoginRegister}>Don't have account? Register</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150,
    },
    errorMessage: {
        fontSize: 18,
        color: 'red'
    },
    navBetweenLoginRegister: {
        textAlign: 'center',
        fontSize: 14,
        color: 'blue',
    }
})

Login.navigationOptions = () => {
    return {
        headerShown: false
    }
}

export default Login