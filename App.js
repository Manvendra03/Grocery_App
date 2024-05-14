import {StyleSheet,} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from './src/Navigation/MainNavigation';
import LogInScreen from './src/Screens/LoginScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import LoginNavigation from './src/Navigation/LoginNavigation';
import CompleteProfileScreen from './src/Screens/CompleteProfileScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';


const RootNavigation =()=> {
  return(
      <NavigationContainer>
        <LoginNavigation/>
         {/* <MainNavigation/> */}
      </NavigationContainer>
  );
}


const MyApp = () => {
  
  return (
    // <Provider  store={store}>
       <SafeAreaView style={{flex:1}}>
        <RootNavigation/>
        {/* <CompleteProfileScreen/> */}
     </SafeAreaView>
    /* //  </Provider> */

 
  );
};

export default MyApp;

const styles = StyleSheet.create({});
