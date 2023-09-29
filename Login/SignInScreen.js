import React, { Component } from 'react';
import BottomTab from '../Navigation/BottomTab';
import { View, Text,Alert,Button, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signStyle } from './signStyle';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const SignInScreen = () =>{
    const navigation = useNavigation()
    const signin = () =>{
       
        navigation.navigate(BottomTab);
        // promptAsync();
  
    }
    const [isLoaded] = useFonts({
        'Roboto-Regular':require ("../assets/font/Roboto/Roboto-Regular.ttf"),
      
      });
    
      if (!isLoaded){
        return null;
      }
    


    return(
    <SafeAreaView style={signStyle.mainContainer}>

        <View style={signStyle.logoContainer}> 
                <Ionicons 
                    name="qr-code-outline" 
                    size={80} 
                    color={"#004694"}/>

                <Text 
                    style={signStyle.logoText}> 
                    SeQRScan
                </Text>
        </View>


        <TouchableOpacity 
                style ={signStyle.loginBttn} 
                onPress={signin}
        >
        <Image 
            source={require("../assets/images/google.png")}
            style={{height: 25, width:25}}
        />

        <Text 
            style ={signStyle.contGoogle}> 
            Continue with Google
        </Text>

        </TouchableOpacity>
</SafeAreaView>


    )
}

export default SignInScreen;