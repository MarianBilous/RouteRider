import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Button} from 'react-native';
import { getParcels } from '../api';
// import MapView, { Marker } from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
    const [parcels, setParcels] = useState([]);

    useEffect(() => {
        fetchParcels();
    }, []);

    const fetchParcels = () => {
        getParcels().then(response => {
            setParcels(response);
        });
    };

    return (
        <View style={styles.container}>
            {/*<MapView
                style={styles.map}
                initialRegion={{
                    latitude: 52.327660982470626,
                    longitude: 21.110353390990518,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                {parcels && parcels.map(parcel => (
                    <Marker
                        key={parcel.id}
                        coordinate={{
                            latitude: parseFloat(parcel.latitude),
                            longitude: parseFloat(parcel.longitude),
                        }}
                        title={parcel.address}
                        description={parcel.status}
                    />
                ))}
            </MapView>*/}
            <FlatList
                data={parcels}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.address}</Text>
                        <Text>{item.status}</Text>
                    </View>
                )}
            />
            <Button title="Оновити" onPress={fetchParcels} />
        </View>
    );
};


const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    overlayText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    colors: {
        ColorTopMenu: '#FF7052',
        backgroundColor: '#92A6A7',
        ColorFields: '#F9FDE6',
        ColorButtomMenu: '#D6DBC7',
        ColorTitle: '#2D3C73',
    }
});

export default HomeScreen;

