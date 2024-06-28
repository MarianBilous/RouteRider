import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { getParcels } from '../api';

const ParcelsScreen = ({ navigation }) => {
    const [parcels, setParcels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getParcels()
            .then(response => {
                console.log(response); // Логування для перевірки
                setParcels(response);
                setLoading(false);
            })
            .catch(error => {
                console.error(error); // Логування помилок
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error loading data</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={parcels}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Parcels', { parcel: item })}
                    >
                        <View style={styles.item}>
                            <Text>{item.address}</Text>
                            <Text>{item.status}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default ParcelsScreen;

