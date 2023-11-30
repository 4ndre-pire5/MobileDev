import React from 'react'
import { Alert, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import styles from './styles'
import MyInput from '../../components/myInput'
import MyButton from '../../components/myButton'
import { authService } from '../../services/auth.service'


export default function Login(){

    const navigation = useNavigation<NavigationProp<any>>()

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function signIn(){
        if (!username || username.trim() === ''){
            Alert.alert('Login é obrigatório')
            return
        }

        authService.login(username, password).then(logged =>{
            if (logged){
                navigation.navigate('home')
            }
            else{
                Alert.alert('Login ou senha inválido(a)')
            }
        })

    }

    return(
        <View style={styles.container}>
            <MyInput label='Login' onChangeText={setUsername} />
            <MyInput label='Senha' onChangeText={setPassword} secureTextEntry/>

            <MyButton title='Entrar' onPress={signIn}/>
        </View>
    )
}