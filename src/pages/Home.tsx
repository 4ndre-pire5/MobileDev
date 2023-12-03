import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { userService } from '../services/user.service'
import React from 'react';
import { User } from '../model/user';
import ListTile from '../components/ListTile';

export default function Home() {

const navigation = useNavigation<NavigationProp<any>>()

const [users, setUsers] = React.useState<User[]>([])
const [refreshing, setRefreshing] = React.useState(false)

React.useEffect(() => {
    navigation.setOptions({
        headerLeft: () => <Button title='Sair' onPress={logOff}/>,
        headerRight: () => <Button title='Add' onPress={goToCreateUser}/>
    })

    fetchUserList()

}, [])

function fetchUserList() {
    setRefreshing(true)
    userService.list().then(result => {
        setUsers(result)
        setRefreshing(false)
    }).catch(error => {
        setRefreshing(false)
        logOff()
    })
}

function logOff() {
  navigation.goBack()
}

function goToCreateUser() {
  navigation.navigate('user')
}

function goToEditUser(user: User) {
    navigation.navigate('user', { user })
  }
  

if (users.length < 1) {
    return(
        <View style={styles.container}>
            <Text>Nenhum usuário cadastrado</Text>
        </View>
    )
}

  return (
    <View style={styles.container}>
        <FlatList 
            data={users}
            onRefresh={fetchUserList}
            refreshing={refreshing}
            renderItem={({ item }) => <ListTile user={item} onPress={goToEditUser}/>}

        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


