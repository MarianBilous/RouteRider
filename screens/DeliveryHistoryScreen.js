import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getDeliveryHistory } from '../api';

const DeliveryHistoryScreen = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = () => {
        getDeliveryHistory().then(response => {
            setHistory(response.data);
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={history}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>Адреса: {item.address}</Text>
                        <Text>Статус: {item.status}</Text>
                        <Text>Дата: {item.date}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default DeliveryHistoryScreen;
