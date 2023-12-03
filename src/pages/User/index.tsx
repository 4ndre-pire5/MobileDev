import React from 'react'
import { Alert, View } from 'react-native'

import MyInput from '../../components/myInput'
import styles from './styles'
import MyButton from '../../components/myButton'
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { userService } from '../../services/user.service'

 export default function User(){

    const navigation = useNavigation<NavigationProp<any>>()
    const route = useRoute()

    const params = route.params as any
    const user = params? params.user : undefined

    const [name, setName] = React.useState(user? user.name : '')
    const [username, setUsername] = React.useState(user? user.username : '')
    const [password, setPassword] = React.useState('')
    const [passwordSave, setPasswordSave] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)
    const [showPasswordSave, setShowPasswordSave] = React.useState(false)

    React.useEffect(() => {
        navigation.setOptions({ title: user ? 'Editar Usuário' : 'Novo Usuário' })
    }, [])

    const toggleShowPassord = () => {
        setShowPassword(!showPassword)
    }

    const toggleShowPassordSave = () => {
        setShowPasswordSave(!showPasswordSave)
    }

    function save(){
        if (!name || name.trim() === ''){
            Alert.alert('Nome é obrigatório')
            return
        }

        if (user) {
            let body: any = { name }

            if (password.trim() !== '') {
                if (password !== passwordSave){
                    Alert.alert('As senhas não conferem')
                    return
                }
                body = { name, password } 
            }

            userService.update(user.id, body).then(saved => {
                Alert.alert('Title', 'Usuário atualizado com sucesso')
                navigation.goBack()   
            }).catch(
                error => navigation.navigate('login')
            )

        }
        else {
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
            
            userService.create({ name, username, password }).then(saved => {
                Alert.alert('Title', 'Usuário criado com sucesso')
                navigation.goBack()   
            }).catch(
                error => navigation.navigate('login')
            )
        }

    }

    return(
        <View style={styles.container}>
            <MyInput label='Nome' value={name} onChangeText={setName}/>

            <MyInput 
                label='Login' 
                value={username} 
                onChangeText={setUsername} 
                editable={user === undefined}
            />

            <View style={styles.password}>
                <MyInput label='Senha' value={password} onChangeText={setPassword} secureTextEntry={!showPassword}/>
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={28}
                    color="#aaa"
                    onPress={toggleShowPassord}
                    style={styles.icon}
                />   
            </View>

            <View style={styles.password}>
                <MyInput label='Confirmar Senha' value={passwordSave} onChangeText={setPasswordSave} secureTextEntry={!showPasswordSave}/>
                <MaterialCommunityIcons
                    name={showPasswordSave ? 'eye-off' : 'eye'}
                    size={28}
                    color="#aaa"
                    onPress={toggleShowPassordSave}
                    style={styles.icon}
                />
            </View>

            <MyButton title='Salvar' onPress={save}/>

            
        </View>
    
    )
}