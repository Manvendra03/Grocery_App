import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MyTextInput from '../Components/TextInput';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpScreen = ({navigation}) => {
    const [verifyOTP , setVerifyOTP] = useState(false);
 
 
    return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: "absolute" , top: Platform.OS === 'ios'? 20 : 30 , left: 10}}>
      <Image 
          source={require('../assets/back.png')}
          style={{height: 25, width : 25}}
        />
      </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Register Now
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: 'grey',
            fontWeight: '500',
            marginBottom: 20,
          }}>
          Become part of Grotzy and simplify your grocery shopping
        </Text>
        <MyTextInput
          placeholder={'Name'}
          inputMode={'text'}
          secureTextEntry={true}
          variable={'hello'}
          setVariable={() => {}}
        />
        <MyTextInput
          placeholder={'Email'}
          inputMode={'email'}
          secureTextEntry={true}
          variable={'hello'}
          setVariable={() => {}}
        />
        <MyTextInput
          placeholder={'Phone'}
          inputMode={'numeric'}
          secureTextEntry={true}
          variable={'hello'}
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
        <MyTextInput
          placeholder={'Confirm Password'}
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
          onPress={() => {setVerifyOTP(true)}}
          style={{
            height: 50,
            marginTop: 50,
            marginBottom: 8,
            borderRadius: 10,
            backgroundColor: '#6DBD5F',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
            Register
          </Text>
        </TouchableOpacity>
        <View style ={{flexDirection: "row"}}>
         <Text style ={{color: "black"}}>already have an account? </Text>
         <TouchableOpacity onPress={()=>{
          navigation.navigate("LoginScreen");
         }}><Text style ={{color: "#6DBD5F" , fontWeight: "bold"}}>Login</Text></TouchableOpacity>
    
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
      
      {

      verifyOTP ?<View
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          backgroundColor: 'rgba(52, 52, 52,0.8)',
       
          alignItems: "center",
          justifyContent: "center",
          left: 0,
        }}>
           <View style ={{height: 250, width: "70%",justifyContent: "center",alignItems:"center" , backgroundColor: "white",borderRadius: 10, }}>
                <Text style ={{fontSize: 20 , color:"black" ,fontWeight: "600",marginBottom: 5 }}>Enter OTP</Text>
                <Text style ={{fontSize: 12 , color:"grey" ,marginBottom: 20 }}>sent on mobile number 9627373876</Text>
               
                <MyTextInput
          maxLength={4}
          placeholder={'OTP'}
          inputMode={'numeric'}
          secureTextEntry={true}
          variable={'hello'}
          obsecureText={true}
          setVariable={() => {}}
          style={{width: "90%", }}
        />
        <TouchableOpacity 
        
         
        style={{alignSelf:"flex-end", marginRight: 20}}>
          <Text
            style={{
              fontSize: 12,
              color: '#6DBD5F',
              fontWeight: '500',
              marginBottom:30,
              alignSelf: 'flex-end',
            }}>
            change Number?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CompleteProfileScreen")
          }}
          style={{
            height: 35,
            borderRadius: 10,
            paddingHorizontal:30,
            backgroundColor: '#6DBD5F',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '700', fontSize: 15, color: 'white'}}>
            Verify
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  


        onPress={()=>{setVerifyOTP(false)}}
        style ={{height: 25,justifyContent :"center", alignItems:"center" ,width:25 , borderWidth: 2 , position: "absolute",top: 10,right:10, borderRadius: 20}}>
        <Image 
               source={require("../assets/close.png")}
               style ={{height: 10, width:10 ,}}
            />
        </TouchableOpacity>
            </View>
            
        </View> : <View/>

        }
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
