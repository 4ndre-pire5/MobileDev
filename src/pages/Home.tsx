import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

import { userService } from '../services/user.service'

export default function Home() {

const navigation = useNavigation<NavigationProp<any>>()

navigation.setOptions({
  headerLeft: () => <Button title='Sair' onPress={logOff}/>,
  headerRight: () => <Button title='Add' onPress={goToUser}/>
})

userService.list()
  .then(result => console.log(result))
  .catch(error => logOff())

function logOff(){
  navigation.goBack()
}

function goToUser(){
  navigation.navigate('user')
}

  return (
    <View style={styles.container}>
      <Text>Listagem de Usuários</Text>
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


