import React from 'react'
import { Alert, View } from 'react-native'

import styles from './styles'
import MyInput from '../../components/myInput'
import MyButton from '../../components/myButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function Login(){

    const navigation = useNavigation<NavigationProp<any>>()

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function signIn(){
        if (!username || username.trim() === ''){
            Alert.alert('Login é obrigatório')
            return
        }

        if (username === 'uedsonreis' && password === '123456'){
            navigation.navigate('home')
        }
        else{
            Alert.alert('Login ou senha inválido(a)')
        }
    }

    return(
        <View style={styles.container}>
            <MyInput label='Login' onChangeText={setUsername} />
            <MyInput label='Senha' onChangeText={setPassword} secureTextEntry/>

            <MyButton title='Entrar' onPress={signIn}/>
        </View>
    )
}