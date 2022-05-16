import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import coursesScreen from '../screens/GeneralInfo/coursesScreen';
import MainScreen from "../screens/GeneralInfo/mainScreen";
import messagesScreen from "../screens/GeneralInfo/messagesScreen";
import marksScreen from "../screens/GeneralInfo/marksScreen";
import shedulesScreen from "../screens/GeneralInfo/shedulesScreen";


const Tab = createBottomTabNavigator()

const NavBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Главная" component={MainScreen} options={{
                tabBarIcon: () => (
                    <Foundation name="home" size={25} color="#999999" />
                )
            }} />

            <Tab.Screen name="Мои курсы" component={coursesScreen} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="book-education" size={25} color="#999999" />
                )
            }} />

            <Tab.Screen name="Сообщения" component={messagesScreen} options={{
                tabBarIcon: () => (
                    <Ionicons name={'ios-mail'} size={25} style={{ color: '#999999' }} />
                )
            }} />

            <Tab.Screen name="Расписание" component={shedulesScreen} options={{
                tabBarIcon: () => (
                    <MaterialIcons name="calendar-today" size={24} color="#999999" />
                )
            }} />

            <Tab.Screen name="Оценки" component={marksScreen} options={{
                tabBarIcon: () => (
                    <Ionicons name={'ios-star'} size={20} style={{ color: '#999999' }} />
                )
            }} />
        </Tab.Navigator>
    )
}


export default NavBar