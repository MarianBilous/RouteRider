import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from "../authContext";

const SettingsScreen = ({ navigation }) => {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <Text>Налаштування</Text>
            <Button title="Вийти" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
});

export default SettingsScreen;
