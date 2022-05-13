import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'


import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '../../interactive/Slider';
import HW from '../../interactive/sliderHW';
import SliderCourses from '../../interactive/sliderCourses';


export default function MainScreen({ navigation }) {

    return (
        <SafeAreaView>
            <ScrollView>
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

                <View>
                    <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 25, fontWeight: 'bold' }}>Следующая пара</Text>
                    <Slider />
                </View>

                <View>
                    <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 25, fontWeight: 'bold' }}>Домашняя работа</Text>
                    <HW />
                </View>

                <View style={{ marginBottom: 15 }}>
                    <Text style={{
                        marginTop: 20,
                        marginLeft: 25,
                        fontSize: 25,
                        fontWeight: 'bold'
                    }}>Курсы</Text>
                    <SliderCourses />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingVertical: 0,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
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