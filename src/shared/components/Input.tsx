import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { theme } from "../themes/Themes";


interface IGeralInput { 
    label: string;
    children: React.ReactNode;
    asButton?: boolean;
    onPress?: () => void;
}

export function GeralInput( { children, label, asButton, onPress }: IGeralInput ) { 

    return(
        <View style={styles.baseInputContainer}>
            <Text style={styles.label}>
                {label}
            </Text>

            {asButton && (
                <Pressable
                    onPress={onPress}
                    style={({pressed}) => pressed ? styles.baseInputPressed : styles.baseInput}
                >
                    {children}
                </Pressable>
            )}
            {!asButton && (
                <View style={styles.baseInput}>
                    {children}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    baseInputContainer: {
        gap: 4,
        flexDirection: 'column',
    },
    label: { 
        color: theme.colors.text,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
    },
    baseInput: { 
        borderRadius: 8,
        backgroundColor: theme.colors.background,
    },
    baseInputPressed: { 
        opacity: 0.5,
        borderRadius: 8,
        backgroundColor: theme.colors.background,
    }
});