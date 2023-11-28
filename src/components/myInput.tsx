import { StyleSheet, Dimensions, TextInput,Text,  View, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    label: string,
}

export default function MyInput(props: Props) {
    return(
        <View style={styles.inputView}>
            <Text style={styles.label}>{props.label}:</Text>
            <TextInput style={styles.input} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
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

})