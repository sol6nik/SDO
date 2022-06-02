import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import localStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import WeekCalendar from '../../interactive/WeekCalendar';
import TimetableItem from '../../customComponents/TimetableItem';

export default function ShedulesScreen({ navigation }) {
    const [date,setDate] = useState(new Date().getDay());
    const [lessonsArray,setLessonsArray] = useState([])
    const [timetableArray,setTimetableArray] = useState([])

    const getTimetableArray = async() => {
        var group_number = await localStorage.getItem('user_group')
        let axios_cfg = { url: `https://mospolylms.herokuapp.com/api/v1/public/timetables/${group_number}`, method: "GET"}
        try {
            var anwser = await axios(axios_cfg);
            setTimetableArray(anwser.data.timetable)
        }
        catch(err){
            console.log('There is some error during getting data: ' + JSON.stringify(err.response.data.message))
        }
    }

    useEffect(()=>{
        setLessonsArray(timetableArray[date])
    },[date,timetableArray])

    useEffect(()=>{
        getTimetableArray();
    },[])

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
                    <WeekCalendar picked_day={date} intialDate={new Date()} onChange={newDate => setDate(newDate)} />
        
                    <View style={styles.cardContainer}>
                        <View style={styles.cardContainer}>
                            {lessonsArray!==undefined ?  
                            lessonsArray.map((item => (
                                <TimetableItem key={"key"+Math.random()} lesson_count = {item.lesson_count} lesson_type={item.lesson_type} schedule_time={item.schedule_time} lesson_subject={item.lesson_subject} teacher_fio={item.teacher_fio} lesson_location={item.lesson_location}/>)
                            )) 
                            : 
                            <Text>Sorry there is no timetable for your group now</Text>
                            }
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