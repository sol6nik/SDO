import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function messagesScreen({ navigation }) {
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
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/45.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Flossie Walter</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/53.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Amya Ryan</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/443.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Lamar Klein</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/252.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Meggie Hermann</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/269.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Eriberto Bashirian</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/208.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Joana Sporer</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/45.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Flossie Walter</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/53.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Amya Ryan</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/443.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Lamar Klein</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/252.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Meggie Hermann</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/269.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Eriberto Bashirian</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/208.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Joana Sporer</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/45.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Flossie Walter</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/53.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Amya Ryan</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/443.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Lamar Klein</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/252.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Meggie Hermann</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/269.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Eriberto Bashirian</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.card}>
                        <Image source={{
                            uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/208.jpg'
                        }}
                            style={styles.icon} />
                        <View>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Joana Sporer</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 100
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
        borderRadius: 10,
        borderRadius: 10
    },
})

