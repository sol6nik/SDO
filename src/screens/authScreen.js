import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import CustomInput from "../customComponents/CustomInput";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import {vh, vw} from 'react-native-expo-viewport-units'
import axios from 'axios'
import authScreenFunctions from '../js/authFunctions'
import authFunctions from "../js/authFunctions";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Mospolytech_Logo_SVG from '../icons/auth-icons/mospolytech_logo_icon.svg'

export default function Login({ navigation }) {

    let [fontsLoaded] = useFonts({
        'Gilroy-Regular': require('../../assets/fonts/TestFont.ttf')
    })

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const login_attempt = async (data) => {
        let axios_cfg = { url: "https://mospolylms.herokuapp.com/api/v1/auth/login", method: "POST", data: { login: data.loginInput.toLowerCase(), password: data.passwordInput } }
        try {
            var anwser = await axios(axios_cfg);
            authScreenFunctions.setData(anwser.data)
            navigation.navigate('MainScreen')
        }
        catch (err) {
            console.log('Some error appeared during request: ' + err.message)
        }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    }    

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.logo_container}>
                    <Mospolytech_Logo_SVG style={styles.logo} />
                    <Text style={styles.logoHeader}>МОСКОВСКИЙ ПОЛИТЕХ</Text>
                </View>

                <View style={styles.main_container}>
                    <Text style={{ marginBottom: 25, fontSize: 25, fontWeight: "bold",fontFamily:"Gilroy-Regular" }}>Вход</Text>


                    <CustomInput 
                        label={'Логин или адрес электронной почты'} 
                        icon={
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

                    <TouchableOpacity style={styles.enter_button} onPress={() => login_attempt({ loginInput, passwordInput })}>
                        <Text style={{ color: '#000000' }}>Вход</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20,fontFamily:"Gilroy-Regular" }}>
                        <Text>Забыли логин или пароль?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20,fontFamily:"Gilroy-Regular" }} onPress={() => {authFunctions.setGuestData();navigation.navigate('MainScreen')}}>
                        <Text>Зайти гостем</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo_container: {
        marginTop: vh(14.49),
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 10,
        width: vw(25.64),
        height: vw(25.64)
    },
    logoHeader: {
        width: 219,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    main_container: {
        marginTop: vh(14.97),
        height: 420,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
    },
    enter_button: {
        width: 350,
        height: 45,
        backgroundColor: '#90B3E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})