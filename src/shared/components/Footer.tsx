import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { theme } from "../themes/Themes";

interface IFooterProps { 
    children: React.ReactNode;
}
export function Footer( {children}: IFooterProps ) { 

    const inserts = useSafeAreaInsets();

    return( 
       <View style={{ ...styles.footerContainer, paddingBottom: inserts.bottom + 16 }}>
            {children}
       </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: { 
        padding: 16,
        backgroundColor: theme.colors.paper,
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        ...theme.shadows.default,
    },
});