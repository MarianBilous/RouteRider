import React, { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home', {
            screen: 'HomeScreen'
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Електронна пошта"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Увійти" onPress={handleLogin} />
            <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
                Забули пароль?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8
    },
    forgotPassword: {
        marginTop: 12,
        color: 'blue',
        textAlign: 'center'
    },
});

export default LoginScreen;
