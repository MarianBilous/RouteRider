import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const handleLogout = () => {
        // Логіка для виходу з облікового запису
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text>Налаштування</Text>
            <Button title="Вийти" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
});

export default SettingsScreen;
