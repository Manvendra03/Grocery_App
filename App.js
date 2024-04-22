import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomBarScreen from './Screens/BottomBarScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import AppBar from './Components/AppBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import itemScreen from './Screens/itemScreen';
import HomeScreen from './Screens/HomeScreen';
import ItemCard from './Components/ItemCard';
import CategoryScreen from './Screens/CategoryScreen';
import ItemScreen from './Screens/itemScreen';
import ContactUsScreen from './Screens/ContactUsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import KeyboardAvoidingComponent from './Screens/KeyboardAvoidingComponent';


const Stack = createNativeStackNavigator();

const MyApp = () => {

  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
          <Stack.Navigator>
             <Stack.Screen name= 'BottomBarScreen' component={BottomBarScreen} options= { {headerShown: false}}/>
             <Stack.Screen name= 'ItemScreen' component={itemScreen} options = {{headerShown : false}}/>
               <Stack.Screen name= 'ProfileScreen' component={ProfileScreen}  options= { {headerShown: false}} />
               <Stack.Screen name= 'KeyboardAvoidingComponent' component={KeyboardAvoidingComponent}  options= { {headerShown: false}} />
          
          </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default MyApp;

const styles = StyleSheet.create({});
