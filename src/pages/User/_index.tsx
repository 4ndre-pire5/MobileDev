import React from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'

import styles from './styles'

 export default function User(){

    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passwordSave, setPasswordSave] = React.useState('')


    function save(){
        if (!name || name.trim() === ''){
            Alert.alert('Nome é obrigatório')
            return
        }

        if (!username || username.trim() === ''){
            Alert.alert('Usuário é obrigatório')
            return
        }

        if (!password || password.trim() === ''){
            Alert.alert('Senha é obrigatória')
            return
        }

        if (password != passwordSave){
            Alert.alert('As senhas não conferem')
            return
        }

        if (username === 'andre' && password === '123456'){
            Alert.alert('Usuário salvo com sucesso')
        }

    }

    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput style={styles.input} onChangeText={(setName)}/>
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Login:</Text>
                <TextInput style={styles.input} onChangeText={(setUsername)}/>
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry/>
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Confirmar Senha:</Text>
                <TextInput style={styles.input} onChangeText={setPasswordSave} secureTextEntry/>
            </View>

            <View style={styles.buttonView}>
                <Button title='Salvar' onPress={save}/>
            </View>
        </View>
    )
}