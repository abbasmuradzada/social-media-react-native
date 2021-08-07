import React, { useContext, useState, useEffect } from 'react'
import { Text, Button, Card, Badge } from 'react-native-elements'
import { FlatList, View, Image } from 'react-native'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import moment from 'moment'
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
                console.log(err);
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
            {/* <Spacer> */}
            <FlatList keyExtractor={item => item._id} data={posts} renderItem={({ item }) =>
                <Card>
                    <Card.Title>{item.postedUser[0].userName}</Card.Title>
                    <Card.Divider />
                    <Image source={{ uri: item.postedUser[0].profilePicture }} />
                    <Text style={{ marginBottom: 16 }}>{item.content}</Text>
                    <Text><Badge status='error' value={item.likesCount ?? 0} /> Like</Text>
                    <Text><Badge status='warning' value={item.commentCount ?? 0} /> Comment</Text>
                    <Card.Divider />
                    <Text style={{ color: 'gray' }}>{moment(item.createdAt).fromNow()}</Text>
                </Card>} />
            {/* </Spacer> */}
        </>
    )
}

export default Home