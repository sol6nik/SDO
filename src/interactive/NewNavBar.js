import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, Alert } from "react-native"
const Tab = createBottomTabNavigator();


import CoursesScreen from '../screens/GeneralInfo/CoursesScreen';
import MainScreen from "../screens/GeneralInfo/MainScreen";
import MessagesScreen from "../screens/GeneralInfo/MessagesScreen";
import MarksScreen from "../screens/GeneralInfo/MarksScreen";
import ShedulesScreen from "../screens/GeneralInfo/ShedulesScreen";

import Main_SVG from './../icons/tab-icons/main_icon.svg'
import Courses_SVG from './../icons/tab-icons/courses_icon.svg'
import Messages_SVG from './../icons/tab-icons/messages_icon.svg'
import Marks_SVG from './../icons/tab-icons/marks_icon.svg'
import Shedules_SVG from './../icons/tab-icons/timetable_icon.svg'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

function LogoTitle() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ padding: 20, paddingVertical: 0 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="ios-person-circle-sharp" size={25} color="#393A39" />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 50, marginRight: 150 }}>
                    <FontAwesome name="search" size={15} color="#393A39" style={{ marginRight: 10 }} />
                    <TextInput placeholder='search' />
                </View>

                <TouchableOpacity onPress={() => Alert.alert('NOTIFICATIONS')}>
                    <Ionicons name="notifications" size={25} color="#393A39" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const NewNavBar = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#90B3E7',
                tabBarStyle: styles.navBar,
                headerStyle: { backgroundColor: '#fff', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 },
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
            }
            }>
            <Tab.Screen
                name="XXX"
                component={MainScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Main_SVG />
                            <Text style={{
                                fontSize: 11,
                                color: focused ? '#90B3E7' : '#999999',
                            }}>
                                Главная
                            </Text>
                        </View>
                    ),
                    headerTitle: (props) => <LogoTitle {...props} />,
                }}
            />
            <Tab.Screen name="ZZZ" component={CoursesScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Courses_SVG />
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999'
                        }}>
                            Курсы
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
            <Tab.Screen name="YYY" component={MessagesScreen} options={{
                tabBarLabel: 'Сообщения',
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Messages_SVG />
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999'
                        }}>
                            Сообщения
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
            <Tab.Screen name="WWW" component={MarksScreen} options={{
                tabBarLabel: 'Оценки',
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Marks_SVG />
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999'
                        }}>
                            Оценки
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
            <Tab.Screen name="BBB" component={ShedulesScreen} options={{
                tabBarLabel: 'Расписание',
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Shedules_SVG />
                        <Text style={{
                            fontSize: 11,
                            color: focused ? '#90B3E7' : '#999999'
                        }}>
                            Расписание
                        </Text>
                    </View>
                ),
                headerTitle: (props) => <LogoTitle {...props} />
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navBar: {
        // width: '100%',
        height: 80,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        background: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(20px)",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default NewNavBar