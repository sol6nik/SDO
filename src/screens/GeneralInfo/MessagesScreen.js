import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function MessagesScreen() {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>

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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                style={{
                                    width: 280,
                                }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt blanditiis iusto earum cupiditate impedit quas.
                            </Text>
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
        alignItems: 'center',
        marginBottom: '18%'
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
})

