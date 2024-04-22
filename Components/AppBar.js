import {Platform, StyleSheet, Text, View ,Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import ContactUsScreen from '../Screens/ContactUsScreen';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../Screens/ProfileScreen';
import KeyboardAvoidingComponent from '../Screens/KeyboardAvoidingComponent';

const AppBar = () => {
  const navigation = useNavigation()
  return (
    <View style = {{}}>
    <View style={styles.appbar}>
      <Text style={{fontSize: 29, color: 'white', fontWeight: 'bold'}}>
        Shopify
      </Text>
      <TouchableOpacity onPress={()=>
        navigation.navigate('ProfileScreen')
      } 
      style ={{borderColor: "white" , borderRadius: 30 , borderWidth: 2}}
      >
      <Image
     source={require("../assets/icons/user.png")}
     style={{tintColor:"white", height: 25, width:25  , zIndex:2  , margin: 2}}
    /> 
      </TouchableOpacity>
     
    </View>
    
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appbar: {
    alignItems: "flex-end",
    justifyContent:"space-between",
    paddingVertical:10,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
    height: Platform.OS === 'ios' ? 95: 65 ,
    width: '100%',
    backgroundColor: '#333945',
    elevation: 20,
    flexDirection: "row"
  },
});
