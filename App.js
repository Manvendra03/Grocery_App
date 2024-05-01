import {StyleSheet,} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from './src/Navigation/MainNavigation';
import LogInScreen from './src/Screens/LoginScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import LoginNavigation from './src/Navigation/LoginNavigation';
import CompleteProfileScreen from './src/Screens/CompleteProfileScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

const MyApp = () => {
  
  return (
    <SafeAreaView style={{flex:1}}>
        {/* <MainNavigation/> */}
        {/* <CompleteProfileScreen/> */}
        <LoginNavigation/>
        
     </SafeAreaView>
  );
};

export default MyApp;

const styles = StyleSheet.create({});
