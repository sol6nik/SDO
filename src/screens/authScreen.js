import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from "react-native"
import CustomInput from "../customComponents/CustomInput";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios'

export default function Login({ navigation }) {

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const login_attempt = async (data) => {
        axios_cfg = { url: "https://mospolylms.herokuapp.com/api/v1/auth/login", method: "POST", data: { login: data.loginInput.toLowerCase(), password: data.passwordInput } }
        try {
            var anwser = await axios(axios_cfg);
            localStorage.setItem("accessToken", anwser.accessToken)
            navigation.navigate('Guest')
        }
        catch (err) {
            console.log('Some error appeared during request: ' + err.message)
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../images/logo.png')} style={styles.logo} />
                    <Text style={styles.logoHeader}>Московский политех</Text>
                </View>

                <View style={styles.enter}>
                    <Text style={{ marginBottom: 25, fontSize: 25, fontWeight: "bold" }}>Авторизация</Text>


                    <CustomInput label={'Email'} icon={
                        <Feather
                            name="mail"
                            size={20}
                            color="#B3B4BA"
                            style={{ marginRight: 5 }}
                        />
                    }
                        inputFunction={login => setLoginInput(login)}
                        keyboardType="email-address"
                    />

                    <CustomInput
                        label={'Пароль'}
                        icon={
                            <Ionicons
                                name="ios-lock-closed-outline"
                                size={20}
                                color="#B3B4BA"
                                style={{ marginRight: 5 }}
                            />
                        }
                        isPassword={true}
                        inputFunction={pass => setPasswordInput(pass)}
                        keyboardType="default"
                    />

                    <TouchableOpacity style={styles.btnEnter} onPress={() => login_attempt({ loginInput, passwordInput })}>
                        <Text style={{ color: '#FFFFFF' }}>Войти</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text>Забыли логин или пароль?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Guest')}>
                        <Text>Зайти гостем</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        marginBottom: 10,
        width: 107,
        height: 107
    },
    logoHeader: {
        width: 219,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    enter: {
        marginTop: 140,
        height: 420,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnEnter: {
        width: 350,
        height: 45,
        backgroundColor: '#393A39',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})