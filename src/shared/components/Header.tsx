import { View, Text, StyleSheet } from "react-native";
import { theme } from "../themes/Themes";

interface IHeaderProps { 
    name?: string | undefined;
}
export function Header( {name}: IHeaderProps ) { 

    return( 
       <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Olá, </Text>
            <Text style={styles.headerTextTwo}>{!name ? 'Seu nome é?' : `${name}!`}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: { 
       justifyContent: "center",
        padding: 16,
        flexDirection: "row",
        
    },
    headerText: { 
        fontSize: theme.fonts.sizes.title,
    },
    headerTextTwo: { 
        fontSize: theme.fonts.sizes.title,
        color: theme.colors.primary,
        fontFamily: theme.fonts.family.bold
    }
});