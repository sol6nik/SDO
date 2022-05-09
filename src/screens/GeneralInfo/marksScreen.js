import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function marksScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity>
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

                    <View style={styles.card}>
                        <Text style={styles.title}>Русский язык и культура речи</Text>
                        <View style={styles.mark}>
                            <Text style={{ fontSize: 12, color: '#999999' }}>Оценка</Text>
                            <View style={styles.points}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>88,81</Text>
                            </View>
                        </View>


                        <TouchableOpacity style={styles.btnCard}>
                            <Text style={{ fontWeight: 'bold' }}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.title}>Русский язык и культура речи</Text>
                        <View style={styles.mark}>
                            <Text style={{ fontSize: 12, color: '#999999' }}>Оценка</Text>
                            <View style={styles.points}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>88,81</Text>
                            </View>
                        </View>


                        <TouchableOpacity style={styles.btnCard}>
                            <Text style={{ fontWeight: 'bold' }}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.title}>Русский язык и культура речи</Text>
                        <View style={styles.mark}>
                            <Text style={{ fontSize: 12, color: '#999999' }}>Оценка</Text>
                            <View style={styles.points}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>88,81</Text>
                            </View>
                        </View>


                        <TouchableOpacity style={styles.btnCard}>
                            <Text style={{ fontWeight: 'bold' }}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.title}>Русский язык и культура речи</Text>
                        <View style={styles.mark}>
                            <Text style={{ fontSize: 12, color: '#999999' }}>Оценка</Text>
                            <View style={styles.points}>
                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>88,81</Text>
                            </View>
                        </View>


                        <TouchableOpacity style={styles.btnCard}>
                            <Text style={{ fontWeight: 'bold' }}>Подробнее</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20
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
        width: 350,
        elevation: 3,
        backgroundColor: '#FEFAEF',
        borderRadius: 10,
        padding: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15
    },
    mark: {
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50
    },
    points: {
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4ECB71',
        borderRadius: 15
    },
    btnCard: {
        width: 320,
        height: 40,
        backgroundColor: '#8FB2E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})