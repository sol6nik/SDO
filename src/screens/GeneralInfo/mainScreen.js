import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native'
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
                <View style={styles.container}>

                    <View>
                        <Text style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Следующая пара</Text>
                        <Slider />
                    </View>

                    <View>
                        <Text style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold' }}>Домашняя работа</Text>
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
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: '20%'
    },
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