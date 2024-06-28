import React from 'react';
import { View, Text } from 'react-native';

const ParcelDetailsScreen = ({ route }) => {
    const { parcel } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Address: {parcel.address}</Text>
            <Text>Status: {parcel.status}</Text>
            <Text>Latitude: {parcel.latitude}</Text>
            <Text>Longitude: {parcel.longitude}</Text>
        </View>
    );
};

export default ParcelDetailsScreen;
