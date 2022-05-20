import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function AboutAccount({ navigation: { goBack } }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                        <Ionicons name="chevron-back" size={20} color="#393A39" />
                        <Text style={{ color: '#393A39' }}>Назад</Text>
                    </TouchableOpacity>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../images/AvatarPerson.png')} style={styles.imageProfile} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-between' }}>
                                <Text>Статус: </Text>
                                <Text style={{ fontWeight: 'bold' }}>Учится</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-between' }}>
                                <Text>Пол: </Text>
                                <Text style={{ fontWeight: 'bold' }}>Мужской</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Дата рождения: </Text>
                                <Text style={{ fontWeight: 'bold' }}>10.10.2002</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-between' }}>
                                <Text>Код студента: </Text>
                                <Text style={{ fontWeight: 'bold' }}>2021-2363</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-between' }}>
                                <Text>Факультет: </Text>
                                <Text style={{ fontWeight: 'bold' }}>27.03.04 Управление в технических системах</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 135, justifyContent: 'space-between' }}>
                                <Text>Специализация: </Text>
                                <Text style={{ fontWeight: 'bold' }}>электронные системы управления</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 145, justifyContent: 'space-between' }}>
                                <Text>Срок обучения: </Text>
                                <Text style={{ fontWeight: 'bold' }}>4 года</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-between' }}>
                                <Text>Форма обучения: </Text>
                                <Text style={{ fontWeight: 'bold' }}>Очная</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 140, justifyContent: 'space-between' }}>
                                <Text>Вид финансирования: </Text>
                                <Text style={{ fontWeight: 'bold' }}>бюджетная</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.info}>
                            <View style={{ flexDirection: 'row', width: 145, justifyContent: 'space-between' }}>
                                <Text>Уровень образования: </Text>
                                <Text style={{ fontWeight: 'bold' }}>бакалавриат</Text>
                            </View>

                            <TouchableOpacity>
                                <AntDesign name="copy1" size={20} color="#393A39" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F0F0F0'
    },
    btnBack: {
        marginTop: 30,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageProfile: {
        marginTop: 15,
        marginBottom: 30,
        width: 130,
        height: 130,
    },
    info: {
        marginBottom: 10,
        width: 350,
        height: 60,
        padding: 15,
        paddingVertical: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 3
    }
})