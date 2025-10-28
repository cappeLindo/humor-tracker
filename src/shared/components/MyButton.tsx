import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'


type props = TouchableOpacityProps & { 
    title: string;
}

export function MyButton({ title, ...rest }: props) { 
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
      </View> 
    );
}

const styles = StyleSheet.create({
    container: { 
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    button: { 
        width: "60%",
        padding: 16,
        backgroundColor: "rgba(27, 58, 233, 0.87)",
        textAlign: "center",
        alignItems: "center",
        borderRadius: 12
    },
    textButton: { 
        color: "white",
        fontSize: 16,
        fontWeight: "medium"
    }
});