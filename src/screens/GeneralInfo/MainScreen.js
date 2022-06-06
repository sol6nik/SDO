import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'


import Slider from '../../interactive/Slider';
import HW from '../../interactive/sliderHW';
import SliderCourses from '../../interactive/sliderCourses';


export default function MainScreen() {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    <View>
                        <Text style={{
                            marginTop: 30,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}>
                            Следующая пара
                        </Text>
                        <Slider />
                    </View>

                    <View>
                        <Text style={{
                            marginTop: 30,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}>
                            Домашняя работа
                        </Text>
                        <HW />
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{
                            marginTop: 30,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}>
                            Курсы
                        </Text>
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
        marginBottom: '18%'
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