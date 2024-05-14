import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MyTextInput from '../Components/TextInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationRouteContext } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = ({navigation}) => {


  async function loginWithEmail()
  {
   const response = await axios.post('https://nbp8qssq-4090.inc1.devtunnels.ms/api/login', {
      email: "manvendrapatidar03@gmail.com",
      password: "monty@123"
    });

    console.log(response.data.email);
  
  
  }


  return (

   <SafeAreaView>
     <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        
        paddingHorizontal: 20,
      }}>
      {/* <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute" , top: Platform.OS === 'ios'? 30 : 30 , left: 10}}>
      <Image 
          source={require('../assets/back.png')}
          style={{height: 25, width : 25}}
        />
      </TouchableOpacity> */}
      
      <TouchableOpacity 
         onPress={()=>{ navigation.navigate("BottomBarScreen")}}
      
      style ={{borderRadius: 10,padding: 8 , borderWidth: 2,backgroundColor:"green6+", borderColor: "black" , width: 100 , height: 40 , position: "absolute" , top: 30 , right: 30}}>
          <Text>Skip for now </Text>
      </TouchableOpacity>
      


      <Text
        style={{
          fontSize: 22,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Log In
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: 'grey',
          fontWeight: '500',
          marginBottom: 20,
        }}>
        Welcome back! Shop smart eith Grotzy. Log in for a seamless grocery
        shopping experience.
      </Text>
      <MyTextInput
        placeholder={'Email'}
        inputMode={'email'}
        secureTextEntry={true}
        variable={'hello'}
        // obsecureText={true}
        setVariable={() => {}}
      />
      <MyTextInput
        placeholder={'Password'}
        inputMode={'text'}
        secureTextEntry={true}
        variable={'hello'}
        obsecureText={true}
        setVariable={() => {}}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            color: '#6DBD5F',
            fontWeight: '500',
            alignSelf: 'flex-end',
          }}>
          forget your password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {loginWithEmail()}}
        style={{
          height: 50,
          marginTop: 50,
          borderRadius: 10,
          backgroundColor: '#6DBD5F',
          marginBottom: 8, 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
          Log In
        </Text>
      </TouchableOpacity>
         <View style ={{flexDirection: "row"}}>
         <Text style ={{color: "black"}}>already have an account? </Text>
         <TouchableOpacity onPress={()=>{
          navigation.navigate("SignUpScreen");
         }}><Text style ={{color: "#6DBD5F" , fontWeight: "bold"}}>SignUp</Text></TouchableOpacity>
    
         </View>
         <Text
        style={{
          fontSize: 14,
          color: '#6DBD5F',
          alignSelf: 'center',
          marginVertical: 30,
        }}>
        or
      </Text>
      <TouchableOpacity
        style={{
          height: 40,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#6DBD5F',
          width: 200,
          alignSelf: 'center',
        }}>
        <Text style={{color: 'grey'}}>Sign Up with Google</Text>
        <Image
          source={require('../assets/google.png')}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
