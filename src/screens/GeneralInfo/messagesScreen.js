import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function messagesScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
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

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar7.png')} style={styles.icon} />
                        <View>
                            <Text style={{
                                width: 253,
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>Иван Иванов</Text>
                            <Text style={{ width: 253 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar7.png')} style={styles.icon} />
                        <View>
                            <Text style={{
                                width: 253,
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>Иван Иванов</Text>
                            <Text style={{ width: 253 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar7.png')} style={styles.icon} />
                        <View>
                            <Text style={{
                                width: 253,
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>Иван Иванов</Text>
                            <Text style={{ width: 253 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar7.png')} style={styles.icon} />
                        <View>
                            <Text style={{
                                width: 253,
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>Иван Иванов</Text>
                            <Text style={{ width: 253 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar7.png')} style={styles.icon} />
                        <View>
                            <Text style={{
                                width: 253,
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>Иван Иванов</Text>
                            <Text style={{ width: 253 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar7.png')} style={styles.icon} />
                        <View>
                            <Text style={{
                                width: 253,
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>Иван Иванов</Text>
                            <Text style={{ width: 253 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        flexDirection: 'row',
        width: 350,
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 10,
        elevation: 3
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10
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

})

