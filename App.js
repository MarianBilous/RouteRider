import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ParcelsScreen from './screens/ParcelsScreen';
import ParcelDetailsScreen from './screens/ParcelDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Parcels" component={ParcelsScreen} />
          <Stack.Screen name="Parcel" component={ParcelDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
