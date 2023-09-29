import React, { Component } from 'react';
import { View, Text,Alert,Button, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Gallery = ({navigation}) =>{

    return (
        <SafeAreaView
            style={{flex:1, alignItems:"center", justifyContent:"center"}}
        >
            <Text>Gallery</Text>
        </SafeAreaView>
    )


}


export default Gallery;