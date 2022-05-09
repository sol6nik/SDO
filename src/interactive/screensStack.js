import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "../screens/GeneralInfo/mainScreen";
import Login from "../screens/authScreen";
import NavBar from "./NavBar";

const Stack = createNativeStackNavigator();

export default function ScreensStacks() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Authorization' component={Login} />
            <Stack.Screen name='Guest' component={NavBar} />
        </Stack.Navigator>
    )
}