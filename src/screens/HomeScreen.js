import React, { useContext, useState, useEffect } from 'react'
import { Text, Button } from 'react-native-elements'
import { FlatList, View } from 'react-native'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import authApi from '../services/auth'
import globalService from '../services/auth'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        globalService.getAllPosts()
            .then((res) => {
                setPosts(res.data.posts);
                console.log(res.data.posts);
            })
            .catch((err) => {
                console.log('==========err==============');
                console.log(err);
                console.log('========================');

            });
    }, [])


    const { logout } = useContext(AuthContext)

    return (
        <>
            <Spacer>
                <Text h1>Home Screen</Text>
            </Spacer>
            <Spacer>
                <Button title='Log Out' onPress={() => logout()} />
            </Spacer>
            <Spacer>
                <FlatList keyExtractor={item => item.content} data={posts} renderItem={({ item }) => 
                <View>
                    <Text>{item.content}</Text>
                    <Text>{item.createdAt}</Text>
                </View>} />
            </Spacer>
        </>
    )
}

export default Home