import { StyleSheet, Button, Dimensions, View, ButtonProps } from 'react-native'

export default function MyButton(props: ButtonProps) {
    return(
        <View style={styles.buttonView}>
            <Button {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonView: {
        marginTop: 10,
        width: Dimensions.get('screen').width-160
    }
})