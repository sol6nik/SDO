import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
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

                <Image source={require('../../images/AvatarPerson.png')} style={styles.imageProfile} />

                <View style={styles.profileMenu}>
                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Account')}>
                        <AntDesign name="infocirlce" size={20} color="#90B3E7" />
                        <Text style={{ fontWeight: 'bold' }}>О пользователе</Text>
                        <MaterialIcons name="navigate-next" size={20} color="#999999" style={{ marginLeft: 140 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Sdo')}>
                        <Ionicons name="person" size={20} color="#90B3E7" />
                        <Text style={{ fontWeight: 'bold' }}>Учтеная запись</Text>
                        <MaterialIcons name="navigate-next" size={20} color="#999999" style={{ marginLeft: 140 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('User')}>
                        <MaterialIcons name="settings" size={20} color="#90B3E7" />
                        <Text style={{ fontWeight: 'bold' }}>Настройки СДО</Text>
                        <MaterialIcons name="navigate-next" size={20} color="#999999" style={{ marginLeft: 140 }} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigate('Authorization')}>
                    <View style={styles.btnExit}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name="logout" size={20} color="#90B3E7" style={{ marginRight: 5 }} />
                            <Text style={{ fontWeight: 'bold' }}>Выход</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    btnBack: {
        marginRight: 250,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageProfile: {
        marginTop: 15,
        width: 180,
        height: 180,
    },
    profileMenu: {
        marginTop: 20,
        width: 350,
        height: 144,
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