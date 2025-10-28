import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { theme } from "./shared/themes/Themes";
import { HomePage } from "./screens/Home";
import { DetailPage } from "./screens/Detail";
import { SetUserNamePage } from "./screens/SetUserName";
import { SafeAreaView } from "react-native-safe-area-context";


type TScreenDefinitions = { 
    home: undefined;
    detail: { rate: number };
    setUserName: undefined;
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export function AppRoutes() { 
    return ( 
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: theme.colors.background
                    }
                }}
                screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}

            >
                <Stack.Screen name="home" component={HomePage}/>
                    <Stack.Group
                        screenOptions={{
                            presentation: 'formSheet',
                            sheetCornerRadius: 24,
                      }}
                     >
                        <Stack.Screen
                            name="detail"
                            component={DetailPage}
                            options={{sheetAllowedDetents: [0.7, 0.9]}}
                        />

                        <Stack.Screen
                            name="setUserName"
                            component={SetUserNamePage}
                            options={{sheetAllowedDetents: [0.4, 0.6]}}
                        />
                    </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;
export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;