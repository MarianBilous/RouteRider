import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ParcelsScreen from './screens/ParcelsScreen';
import ParcelDetailsScreen from './screens/ParcelDetailsScreen';
import LoginScreen from "./screens/LoginScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DeliveryHistoryScreen from "./screens/DeliveryHistoryScreen";

const Stack = createStackNavigator();

const App = ({navigation}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    // Function to handle login
    const handleLogin = () => {
        // Perform your login logic here, for demonstration, we just toggle the state
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        // Perform your logout logic here, for demonstration, we just toggle the state
        setIsLoggedIn(false);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {isLoggedIn ? (
                    <>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Parcels" component={ParcelsScreen}/>
                <Stack.Screen name="Parcel" component={ParcelDetailsScreen}/>
                <Stack.Screen name="Settings" component={SettingsScreen}/>
                <Stack.Screen name="DeliveryHistory" component={DeliveryHistoryScreen}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            options={{ headerShown: false }} // Hide header for the login screen
                        >
                            {props => <LoginScreen {...props} onLogin={handleLogin} />}
                        </Stack.Screen>
                        <Stack.Screen name="Home" component={HomeScreen}/>
                    </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
