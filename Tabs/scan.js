import React, { Component } from 'react';
import { View, Text,Alert,Button, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Scan = () =>{

    return (
        <SafeAreaView
            style={{flex:1, alignItems:"center", justifyContent:"center"}}
        >
            <Text>Scan</Text>
        </SafeAreaView>
    )


}

export default Scan;