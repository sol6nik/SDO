import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'


import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import WeekCalendar from '../../interactive/WeekCalendar';

export default function shedulesScreen({ navigation }) {
    const [date, setDate] = useState(new Date());
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Ionicons name="ios-person-circle-sharp" size={25} color="#393A39" />
                        </TouchableOpacity>

                        <View style={styles.search}>
                            <FontAwesome name="search" size={15} color="#393A39" style={{ marginRight: 10 }} />
                            <TextInput placeholder='search' />
                        </View>

                        <TouchableOpacity>
                            <Ionicons name="notifications" size={25} color="#393A39" />
                        </TouchableOpacity>
                    </View>
                    <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />

                    <View style={styles.cardContainer}>
                        <View style={styles.cardContainer}>
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.numLess}>
                                        <Text style={{ color: '#fff' }}>1</Text>
                                    </View>
                                    <Text style={{ marginRight: 100 }}>Лекция</Text>
                                    <Text>9:00 - 10:30</Text>
                                </View>

                                <Text style={{ marginTop: 15, fontSize: 17, fontWeight: 'bold' }}>Физика</Text>
                                <Text style={{ marginTop: 5, fontSize: 14 }}>Иванов Иван</Text>

                                <Text style={{ marginTop: 10, fontSize: 15, color: '#999999' }}>ПК321</Text>

                                <TouchableOpacity style={styles.cardBtn} onPress={() => Alert.alert('Add task')}>
                                    <Text style={{ color: '#393A39', marginRight: 5, fontSize: 15 }}>Добавить задачу</Text>
                                    <Ionicons name="add-circle-sharp" size={20} color="#393A39" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.numLess}>
                                        <Text style={{ color: '#fff' }}>2</Text>
                                    </View>
                                    <Text style={{ marginRight: 100 }}>Лекция</Text>
                                    <Text>10:40 - 12:10</Text>
                                </View>

                                <Text style={{ marginTop: 15, fontSize: 17, fontWeight: 'bold' }}>Высшая математика</Text>
                                <Text style={{ marginTop: 5, fontSize: 14 }}>Иванов Иван</Text>

                                <Text style={{ marginTop: 10, fontSize: 15, color: '#999999' }}>ПК321</Text>

                                <TouchableOpacity style={styles.cardBtn} onPress={() => Alert.alert('Add task')}>
                                    <Text style={{ color: '#393A39', marginRight: 5, fontSize: 15 }}>Добавить задачу</Text>
                                    <Ionicons name="add-circle-sharp" size={20} color="#393A39" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.numLess}>
                                        <Text style={{ color: '#fff' }}>3</Text>
                                    </View>
                                    <Text style={{ marginRight: 100 }}>Лекция</Text>
                                    <Text>12:20 - 13:50</Text>
                                </View>

                                <Text style={{ marginTop: 15, fontSize: 17, fontWeight: 'bold' }}>Проектная деятельность</Text>
                                <Text style={{ marginTop: 5, fontSize: 14 }}>Иванов Иван</Text>

                                <Text style={{ marginTop: 10, fontSize: 15, color: '#999999' }}>ПК321</Text>

                                <TouchableOpacity style={styles.cardBtn} onPress={() => Alert.alert('Add task')}>
                                    <Text style={{ color: '#393A39', marginRight: 5, fontSize: 15 }}>Добавить задачу</Text>
                                    <Ionicons name="add-circle-sharp" size={20} color="#393A39" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.numLess}>
                                        <Text style={{ color: '#fff' }}>4</Text>
                                    </View>
                                    <Text style={{ marginRight: 50 }}>Лекция</Text>
                                    <Text>14:30 - 16:00</Text>
                                </View>

                                <Text style={{ marginTop: 15, fontSize: 17, fontWeight: 'bold' }}>Линейная алгебра</Text>
                                <Text style={{ marginTop: 5, fontSize: 14 }}>Иванов Иван</Text>

                                <Text style={{ marginTop: 10, fontSize: 15, color: '#999999' }}>ПК321</Text>

                                <TouchableOpacity style={styles.cardBtn} onPress={() => Alert.alert('Add task')}>
                                    <Text style={{ color: '#393A39', marginRight: 5, fontSize: 15 }}>Добавить задачу</Text>
                                    <Ionicons name="add-circle-sharp" size={20} color="#393A39" />
                                </TouchableOpacity>
                            </View>
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
    },
    header: {
        padding: 20,
        paddingVertical: 0,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        height: 35,
        padding: 15,
        paddingVertical: 0,
        backgroundColor: '#B0B7BD',
        borderRadius: 10
    },
    card: {
        marginTop: 20,
        height: 206,
        width: 320,
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    numLess: {
        width: 30,
        height: 30,
        backgroundColor: '#E0843C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    cardBtn: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        height: 40,
        width: 280,
        backgroundColor: '#90B3E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})