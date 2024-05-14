import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';

import BottomBarScreen from '../Screens/BottomBarScreen'
import SingleITemScreen from '../Screens/SingleItemScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import ProductListScreen from '../Screens/ProductListScreen'
import CompleteProfileScreen from '../Screens/CompleteProfileScreen';
import OrderHistory from '../Screens/OrderHistory';

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
    return (
       
            <Stack.Navigator>
            
           <Stack.Screen name= 'LoginScreen' component={LoginScreen} options= { {headerShown: false}}/>
           <Stack.Screen name= 'SignUpScreen' component={SignUpScreen} options = {{headerShown : false}}/>
           {/*  */}
         <Stack.Screen name= 'SingleItemScreen' component={SingleITemScreen} options = {{headerShown : false}}/>
         <Stack.Screen name= 'ProfileScreen' component={ProfileScreen}  options= { {headerShown: false}} />
          <Stack.Screen name= 'ProductListScreen' component={ProductListScreen}  options= { {headerShown: false}} />
          <Stack.Screen name= 'CompleteProfileScreen' component={CompleteProfileScreen}  options= { {headerShown: false}} />
          <Stack.Screen name= 'OrderHistoryScreen' component={OrderHistory}  options= { {headerShown: false}} />
          <Stack.Screen name= 'BottomBarScreen' component={BottomBarScreen} options= { {headerShown: false}}/>
      
     
        </Stack.Navigator>
      
      )
}

export default LoginNavigation

const styles = StyleSheet.create({})