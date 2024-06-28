import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 48.8566,
                    longitude: 2.3522,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* Приклад маркерів */}
                <Marker coordinate={{ latitude: 48.8566, longitude: 2.3522 }} title="Paris" />
                {/* Додайте інші маркери тут */}
            </MapView>
            <View style={styles.overlay}>
                <Text style={styles.overlayText}>Laboin Lact</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>GO</Text>
                </TouchableOpacity>
                {/* Додайте інші елементи оверлею тут */}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
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
});

export default HomeScreen;

