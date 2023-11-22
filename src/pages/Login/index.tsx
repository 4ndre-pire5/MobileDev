import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'

import styles from './styles'

export default function Login(){

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function signIn(){
        if (!username || username.trim() === ''){
            Alert.alert('Login é obrigatório')
            return
        }

        if (username === 'uedsonreis' && password === '123456'){
            Alert.alert('Login realizado com sucesso')
        }
        else{
            Alert.alert('Login ou senha inválido(a)')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Text style={styles.label}>Login:</Text>
                <TextInput style={styles.input} onChangeText={(setUsername)}/>
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry/>
            </View>

            <View style={styles.buttonView}>
                <Button title='Entrar' onPress={signIn}/>
            </View>
        </View>
    )
}