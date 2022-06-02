import React from "react";
import {StyleSheet} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import CoursesScreen from '../screens/GeneralInfo/CoursesScreen';
import MainScreen from "../screens/GeneralInfo/MainScreen";
import MessagesScreen from "../screens/GeneralInfo/MessagesScreen";
import MarksScreen from "../screens/GeneralInfo/MarksScreen";
import ShedulesScreen from "../screens/GeneralInfo/ShedulesScreen";


const Tab = createBottomTabNavigator()

const NavBar = () => {
    return (
        <Tab.Navigator tabBarOptions={{style:{width:"200px"}}}>
            <Tab.Screen name="Главная" component={MainScreen} options={{
                tabBarIcon: () => (
                    <Foundation name="home" size={25} color="#999999" />
                )
            }} />

            <Tab.Screen name="Мои курсы" component={CoursesScreen} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="book-education" size={25} color="#999999" />
                )
            }} />

            <Tab.Screen name="Сообщения" component={MessagesScreen} options={{
                tabBarIcon: () => (
                    <Ionicons name={'ios-mail'} size={25} style={{ color: '#999999' }} />
                )
            }} />

            <Tab.Screen name="Расписание" component={ShedulesScreen} options={{
                tabBarIcon: () => (
                    <MaterialIcons name="calendar-today" size={24} color="#999999" />
                )
            }} />

            <Tab.Screen name="Оценки" component={MarksScreen} options={{
                tabBarIcon: () => (
                    <Ionicons name={'ios-star'} size={20} style={{ color: '#999999' }} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default NavBar