import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { useAuth } from "../authContext";
import {DefaultTheme} from "../themes/themes";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [bar_code, setBar_code] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        try {
            login(bar_code, password);
            // Після успішного входу перенаправити на головний екран або виконати інші дії
        } catch (error) {
            setError('Невірний логін або пароль.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.appNameContainer}>
                <Text style={styles.appName}>
                    RouteRider
                </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image}
                       source={require('../assets/logo/logo.png')} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Ідентифікаційний новер"
                    value={bar_code}
                    onChangeText={setBar_code}
                    style={styles.input}
                />
                {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Пароль"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
            </View>

            <Button
                title="Увійти"
                buttonStyle={styles.loginBtn}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0)'
                }}
                titleStyle={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    fontFamily: DefaultTheme.fonts.fontStyle,
                }}
                onPress={handleLogin}
            />
            <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
                Забули пароль?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultTheme.colors.background,
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20, // Додаємо відступ вниз, щоб розділити картинку від інших елементів
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain', // Забезпечуємо, що зображення буде вміщатися у вказані розміри
    },
    appNameContainer: {
        backgroundColor: DefaultTheme.colors.backgroundText,
        marginTop: 80,
        marginBottom: 20,
        width: 200,
        borderRadius:  20,
        alignItems: 'center',
        justifyContent:  'center',
    },
    appName: {
        color: '#fff',
        fontSize: 32,
        fontFamily: DefaultTheme.fonts.fontStyle,
        fontWeight: 'bold',
        padding: 10
    },
    inputContainer: {
        backgroundColor: DefaultTheme.colors.backgroundFields,
        borderRadius:  20,
        padding: 10,
        width: '100%',
        margin: 5,
    },
    input: {
        height: 30,
        fontFamily: DefaultTheme.fonts.fontStyle,
        borderColor: 'gray',
        paddingLeft: 8,
        width: '100%', // Розтягуємо текстові поля на всю ширину контейнера
    },
    forgotPassword: {
        marginTop: 12,
        color: DefaultTheme.colors.textDefault,
        textAlign: 'center',
    },
    loginBtn: {
        backgroundColor: DefaultTheme.colors.primary,
        fontFamily: DefaultTheme.fonts.fontStyle,
        borderRadius: 20,
        padding: 10,
        shadowColor: DefaultTheme.colors.primary,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 1,
        shadowOpacity: 1.0
    },
});

export default LoginScreen;
