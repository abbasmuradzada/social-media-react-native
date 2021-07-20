import React, { useContext } from 'react'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const Home = () => {

    const { logout } = useContext(AuthContext)

    return (
        <>
            <Spacer>
                <Text h1>Home Screen</Text>
            </Spacer>
            <Spacer>
                <Button title='Log Out' onPress={() => logout()}/>
            </Spacer>
        </>
    )
}

export default Home