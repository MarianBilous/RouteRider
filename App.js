import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, useAuth } from './authContext';

import HomeScreen from './screens/HomeScreen';
import ParcelsScreen from './screens/ParcelsScreen';
import LoginScreen from "./screens/LoginScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DeliveryHistoryScreen from "./screens/DeliveryHistoryScreen";
import {StyleSheet} from "react-native";
import {DefaultTheme} from "./themes/themes";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return (
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: DefaultTheme.colors.primary, // Колір фону заголовка
                },
                headerTintColor: 'rgba(255,255,255,0)', // Колір тексту заголовка
                headerTitleAlign: 'center', // Вирівнювання заголовка по центру
            }}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        );
    }

    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: DefaultTheme.colors.primary,
            },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
        }}>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Parcels" component={ParcelsScreen}/>
            <Drawer.Screen name="DeliveryHistory" component={DeliveryHistoryScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <NavigationContainer style={styles.nav}>
                <AppNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
};

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#FF7052',
    },
});

export default App;
