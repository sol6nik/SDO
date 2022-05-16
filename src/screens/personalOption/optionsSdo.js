import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function OptionsSdo({ navigation: { goBack } }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                    <Ionicons name="chevron-back" size={20} color="#393A39" />
                    <Text style={{ color: '#393A39' }}>Назад</Text>
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Учетная запись</Text>

                <View style={styles.menuWrapper}>
                    <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT INFORMATION ABOUT YOUR CONTACT DETAILS')}>
                        <FontAwesome5 name="edit" size={20} color="#393A39" style={{ marginRight: 5, }} />
                        <Text>Редактировать информацию</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT INFORMATION ABOUT YOUR EMAIL ADRESS')}>
                        <MaterialCommunityIcons name="email-edit-outline" size={20} color="#393A39" style={{ marginRight: 9, }} />
                        <Text>Изменить почту</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuElement} onPress={() => Alert.alert('HERE WE CAN EDIT INFORMATION ABOUT YOUR PASSWORD')}>
                        <MaterialCommunityIcons name="shield-edit-outline" size={20} color="#393A39" style={{ marginRight: 9, }} />
                        <Text>Изменить пароль</Text>
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