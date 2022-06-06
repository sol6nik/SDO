import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'


export default function MarksScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <Text style={styles.title}>Русский язык и культура речи</Text>
                            <View style={styles.mark}>
                                <Text style={{ fontSize: 12, color: '#999999' }}>Оценка</Text>
                                <View style={styles.points}>
                                    <Text style={{ fontWeight: 'bold', color: '#fff' }}>88,81</Text>
                                </View>
                            </View>


                            <TouchableOpacity style={styles.btnCard} onPress={() => Alert.alert('About mark')}>
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


                            <TouchableOpacity style={styles.btnCard} onPress={() => Alert.alert('About mark')}>
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


                            <TouchableOpacity style={styles.btnCard} onPress={() => Alert.alert('About mark')}>
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


                            <TouchableOpacity style={styles.btnCard} onPress={() => Alert.alert('About mark')}>
                                <Text style={{ fontWeight: 'bold' }}>Подробнее</Text>
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
        padding: 20,
        marginBottom: '18%'
    },
    card: {
        marginTop: 15,
        height: 206,
        width: 330,
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        align: 'center'
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
        width: 290,
        height: 40,
        backgroundColor: '#8FB2E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})