
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomBarScreen from '../Screens/BottomBarScreen'
import SingleITemScreen from '../Screens/SingleItemScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import ProductListScreen from '../Screens/ProductListScreen'

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          
       <Stack.Screen name= 'BottomBarScreen' component={BottomBarScreen} options= { {headerShown: false}}/>
       <Stack.Screen name= 'SingleItemScreen' component={SingleITemScreen} options = {{headerShown : false}}/>
         <Stack.Screen name= 'ProfileScreen' component={ProfileScreen}  options= { {headerShown: false}} />
          <Stack.Screen name= 'ProductListScreen' component={ProductListScreen}  options= { {headerShown: false}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})