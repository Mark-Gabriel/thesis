import React, { Component } from 'react';
import { View, Text,Alert,Button, TouchableOpacity, Image, NativeModules } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Account = () =>{
    const navigation = useNavigation()
    // const logout = () =>{
    //     navigation.navigate(Login);

    // }

    return (
        <SafeAreaView
            style={{flex:1, alignItems:"center", justifyContent:"center"}}
        >
            <TouchableOpacity
                onPress={ async() =>{NativeModules.DevSettings.reload();}}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )


}

export default Account;