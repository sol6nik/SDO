import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native"
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

const NewNavBar = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#90B3E7',
                tabBarStyle: styles.navBar,
            }}
        >
            <Tab.Screen name="XXX" component={MainScreen} options={{
                tabBarLabel: 'Главное',
                tabBarIcon: () => (
                    <Main_SVG 
                    />
                ),
            }}/>
            <Tab.Screen name="ZZZ" component={CoursesScreen} options={{
                tabBarLabel: 'Курсы',
                tabBarIcon: () => (
                    <Courses_SVG/>
                ),
            }}/>
            <Tab.Screen name="YYY" component={MessagesScreen} options={{
                tabBarLabel: 'Сообщения',
                tabBarIcon: () => (
                    <Messages_SVG/>
                ),
            }}/>
            <Tab.Screen name="WWW" component={MarksScreen} options={{
                tabBarLabel: 'Оценки',
                tabBarIcon: () => (
                    <Marks_SVG/>
                ),
            }}/>
            <Tab.Screen name="BBB" component={ShedulesScreen} options={{
                tabBarLabel: 'Расписание',
                tabBarIcon: () => (
                    <Shedules_SVG/>
                ),
            }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    navBar: {
        width:'100%',
        height:'9.66%',
        boxSizing: "border-box",
        position:'absolute',
        left: 0,
        right: 0,
        top: '90.34%',
        bottom:0,
        flex: 1,
        background:"#FDDDFF",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(20px)",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    }
})

export default NewNavBar