import React from 'react'
import { Alert, View } from 'react-native'

import MyInput from '../../components/myInput'
import styles from './styles'
import MyButton from '../../components/myButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'

 export default function User(){

    const navigation = useNavigation<NavigationProp<any>>()

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

        if (password !== passwordSave){
            Alert.alert('As senhas não conferem')
            return
        }

        Alert.alert('Usuário salvo com sucesso')
        navigation.goBack()

    }

    return(
        <View style={styles.container}>
            <MyInput label='Nome' value={name} onChangeText={setName}/>
            <MyInput label='Login' value={username} onChangeText={setUsername}/>
            <MyInput label='Senha' value={password} onChangeText={setPassword} secureTextEntry/>
            <MyInput label='Confirmar Senha' value={passwordSave} onChangeText={setPasswordSave} secureTextEntry/>

            <MyButton title='Salvar' onPress={save}/>
        </View>
    )
}