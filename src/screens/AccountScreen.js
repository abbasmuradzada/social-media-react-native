import React, { useState, useEffect } from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import globalService from '../services/auth'

const Account = ({ navigation }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        globalService.getOwnUser()
            .then((res) => {
                setUser(res.data.user)
                console.log(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return <View style={{ paddingTop: 100 }}>
        {user ? <View>
            <Text h3 style={{ textAlign: 'center' }} >{user.userName}</Text>
            <Text style={styles.userEmailStyle} >{user.email}</Text>
            <View style={styles.flexRow}>
                <View style={{ width: 100, backgroundColor: "red" }} ><Text>aafdaafdaaa</Text></View>
                <Text>salam</Text>
                <Text>salam</Text>
                {/* <View style={{ flex: 1, backgroundColor: "red" }} ><Text>aafdaafdaaa</Text></View>
                <View style={{ flex: 1, backgroundColor: "blue" }} ><Text>ssddssda</Text></View>
                <View style={{ flex: 1, backgroundColor: "red" }} ><Text>dhsdhtrthst</Text></View> */}
            </View>
        </View> : null}
    </View>
}

const styles = StyleSheet.create({
    userEmailStyle: {
        textAlign: 'center',
        color: 'gray'
    },
    flexRow: {
        width: 200,
        flex: 1,
        // flexDirection: 'row',
    }
})


export default Account