import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
           <Stack.Screen name= 'LoginScreen' component={LoginScreen} options= { {headerShown: false}}/>
           <Stack.Screen name= 'SignUpScreen' component={SignUpScreen} options = {{headerShown : false}}/>
        </Stack.Navigator>
        </NavigationContainer>
      )
}

export default LoginNavigation

const styles = StyleSheet.create({})