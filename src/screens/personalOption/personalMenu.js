import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function PersonalMenu({ navigation: { goBack, navigate } }) {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                    <Ionicons name="chevron-back" size={20} color="#393A39" />
                    <Text style={{ color: '#393A39' }}>На главную</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <View style={styles.profileMenu}>
                        <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Account')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <AntDesign name="infocirlce" size={20} color="#90B3E7" style={{ marginRight: 10 }} />
                                <Text style={{ fontWeight: 'bold' }}>О пользователе</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="#999999" style={{ marginLeft: 140 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Sdo')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name="person" size={20} color="#90B3E7" style={{ marginRight: 10 }} />
                                <Text style={{ fontWeight: 'bold' }}>Учтеная запись</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="#999999" style={{ marginLeft: 140 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('User')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialIcons name="settings" size={20} color="#90B3E7" style={{ marginRight: 10 }} />
                                <Text style={{ fontWeight: 'bold' }}>Настройки СДО</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="#999999" style={{ marginLeft: 140 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.componentsMenu} onPress={() => Alert.alert('Window is under construction')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <AntDesign name="questioncircle" size={20} color="#90B3E7" style={{ marginRight: 10 }} />
                                <Text style={{ fontWeight: 'bold' }}>FAQ</Text>
                            </View>
                            <MaterialIcons name="navigate-next" size={20} color="#999999" style={{ marginLeft: 140 }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.btnExit} onPress={() => navigate('Authorization')}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Выйти из учетной записи</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F0F0F0'
    },
    btnBack: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageProfile: {
        marginTop: 15,
        width: 180,
        height: 180,
    },
    profileMenu: {
        marginTop: 20,
        width: 350,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    componentsMenu: {
        width: 320,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    btnExit: {
        marginTop: 20,
        paddingHorizontal: 0,
        paddingVertical: 0,
        width: 350,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10
    }
})