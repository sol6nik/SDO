import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from "react-native"
import InputFields from "../customComponents/InputFields";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';


export default function Login({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../images/logo.png')} style={styles.logo} />
                    <Text style={styles.logoHeader}>Московский политех</Text>
                </View>

                <View style={styles.enter}>
                    <Text style={{ marginBottom: 25, fontSize: 25, fontWeight: "bold" }}>Авторизация</Text>


                    <InputFields label={'Email'} icon={
                        <Feather
                            name="mail"
                            size={20}
                            color="#B3B4BA"
                            style={{ marginRight: 5 }}
                        />
                    }
                        keyboardType="email-address"
                    />

                    <InputFields label={'Пароль'} icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#B3B4BA"
                            style={{ marginRight: 5 }}
                        />
                    }
                        inputType="Password"
                    />

                    <TouchableOpacity style={styles.btnEnter}>
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