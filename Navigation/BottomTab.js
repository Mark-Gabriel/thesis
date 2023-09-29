import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen
import Scan from '../Tabs/scan';
import Generate from '../Tabs/generate';
import Gallery from '../Tabs/gallery';
import Account from '../Tabs/account';
import History from '../Tabs/history';

const Tab = createBottomTabNavigator();

const ScreenOption = {
    tabBarActiveTintColor: "#1E90FF",
    tabBarStyle:{
      height: 55,
      backgroundColor: "#fff",
    }
  }


const BottomTab= ({navigation}) => {

    return(

        <Tab.Navigator screenOptions={ScreenOption}>
            <Tab.Screen name='Scan' component={Scan}
                    options={{
                    headerShown: true,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 10,
                        // fontWeight: '900'
                    },
                    tabBarIcon: ({ color}) => (
                    <Ionicons name="scan-circle-outline" size={22} color={color}/>
                        ),
                    }}
            />
                   

            <Tab.Screen name='Gallery' component={Gallery}
                    options={{
                    headerShown: true,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 10,
                        // fontWeight: '900'
                    },
                    tabBarIcon: ({ color}) => (
                    <Ionicons name="images-outline" size={22} color={color}/>
                        ),
                    }}
            />
 
            <Tab.Screen name='Generate' component={Generate}
                    options={{
                    headerShown: true,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 10,
                        // fontWeight: '900'
                    },
                    tabBarIcon: ({color})=> (
                    <Ionicons name="add-circle-outline" size={22} color={color}/>
                    ),
                    }}
             />

            <Tab.Screen name='History' component={History}
                    options={{
                    headerShown: true,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 10,
                        // fontWeight: '900'
                    },
                    tabBarIcon: ({color})=> (
                    <Ionicons name="time-outline" size={22} color={color}/>
                    ),
                    }}
             />


            <Tab.Screen name='Account' component={Account}
                    options={{
                    headerShown: true,
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 10,
                        // fontWeight: '900'
                    },
                    tabBarIcon: ({ color}) => (
                    <Ionicons name="person-outline" size={22} color={color}/>
                        ),
                    }}
                />
        </Tab.Navigator>


    )

}

export default BottomTab;