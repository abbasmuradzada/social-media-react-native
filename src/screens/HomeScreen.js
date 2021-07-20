import React, { useContext, useState, useEffect } from 'react'
import { Text, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import authApi from '../services/auth'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        authApi.get("/post")
            .then((res) => {
                console.log(res.data);//resolve(res);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])


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