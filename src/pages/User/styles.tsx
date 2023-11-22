import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input:{
        height: 50,
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        width: Dimensions.get('screen').width - 100
    },

    inputView: {
        marginBottom: 20,
    },

    label: {
        fontSize: 18,
    },

    buttonView: {
        marginTop: 10,
        width: Dimensions.get('screen').width-160

    }
})