import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function CoursesScreen({ navigation }) {
    return (
        <ScrollView>

            <SafeAreaView style={styles.container}>
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
                        <Image source={require('../../images/avatar1.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar2.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar3.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar4.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar5.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>
                            Управление стратегическими комуникациями
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar6.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar1.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar2.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar3.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar4.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar5.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>
                            Управление стратегическими комуникациями
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar6.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar1.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar2.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar3.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar4.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar5.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>
                            Управление стратегическими комуникациями
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={require('../../images/avatar6.png')} style={styles.icon} />
                        <Text style={{
                            width: 253,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Управление стратегическими комуникациями</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        flexDirection: 'row',
        width: 320,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 10,
    },
    icon: {
        width: 35,
        height: 35,
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