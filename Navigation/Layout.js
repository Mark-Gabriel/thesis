import React, { Component } from 'react';
import { View, Text,Alert,Button, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import Login from '../Login/Login';
import BottomTab from './BottomTab';
// import navigation from '../Navigation/navigation'

const Stack = createStackNavigator();

const Layout = () =>{

    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }}></Stack.Screen>
          
        
        </Stack.Navigator>
    )


}


export default Layout;