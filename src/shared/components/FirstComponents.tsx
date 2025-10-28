import { View, Text, StyleSheet } from 'react-native'

type IComponentsProps = { 
    text: string
}

export function FirstComponent(props: IComponentsProps) { 
    return (
        <View style={styles.component}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    component: { 
        justifyContent: "center",
        alignItems: "center",
    },
    text: { 
        fontSize: 24,
        color: "#1d4aacff",
        fontWeight: "medium",
    }
})