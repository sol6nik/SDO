import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AboutUser({ navigation: { goBack } }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                    <Ionicons name="chevron-back" size={20} color="#393A39" />
                    <Text style={{ color: '#393A39' }}>Назад</Text>
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Настройки СДО</Text>

                <View style={styles.menuWrapper}>
                    <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT LANGUAGE')}>
                        <Ionicons name="language-outline" size={20} color="#393A39" style={{ marginRight: 5, }} />
                        <Text>Язык</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT THEME YOUR APP')}>
                        <Ionicons name="options-outline" size={20} color="#393A39" style={{ marginRight: 7, }} />
                        <Text>Внешний вид</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT INFORMATION ABOUT YOUR PASSWORD')}>
                        <Ionicons name="notifications-outline" size={20} color="#393A39" style={{ marginRight: 7, }} />
                        <Text>Уведомления</Text>
                    </TouchableOpacity>
                </View>
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
        marginRight: 290,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10
    },
    menuWrapper: {
        width: 350,
        height: 160,
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 20
    },
    menuElement: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
