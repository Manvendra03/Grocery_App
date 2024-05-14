import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import MyTextInput from '../Components/TextInput';
import SizedBox from '../Components/SizedBox';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';


const CompleteProfileScreen = ({navigation}) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : -10; // Adjust the value as per your need
   

  const route = useRoute();
  const {uEmail,uName} = route.params;

  const[pn , setpn] = useState("");
  const [address,setAddress] = useState("");
  const [statee,setStatee] = useState("");
  const [city,setCity] = useState("");
  const [pincode,setPincode] = useState(""); 

  async function completeMyProfile()
  {
    
    console.log("00000");
    console.log(uEmail);
    console.log(uName);
  
     
    const response = await axios.post('https://nbp8qssq-4090.inc1.devtunnels.ms/api/com_profile',
   {
    name : uName,
    email: uEmail,
    mob_num : "9617474952",
    address : "city",
    city: "indore",
    state: "mp",
    pincode: "454552"
  }
);
    console.log(response.status);
    if(response.status = '200')
      {
        console.log("99999");
        return true;
      }

   
      return false;
  }


  return (
    <SafeAreaView
      style={{
        marginHorizontal: 15,
        marginTop: Platform.OS === 'ios' ? 0 : 30,
        height: '100%',
        justifyContent: 'center',
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{flex: Platform.OS === 'android' ? 1 : null}}>
        <View>
          <Text
            style={{
              fontSize: 23,
              color: 'black',
              marginBottom: 25,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Complete Your Profile
          </Text>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: 'rgba(144, 238, 144,0.3)',
              borderRadius: 10,
              paddingVertical: 15,
            }}>
            <Text style={{color: 'black'}}>Name</Text>
            <MyTextInput
              placeholder={uName}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              editable={false}
              style={{borderColor: '#BABABA'}}
              // obsecureText={true}
              setVariable={() => {}}
            />

            <SizedBox height={10}></SizedBox>
            <Text style={{color: 'black'}}>Email Address</Text>
            <MyTextInput
              placeholder={uEmail}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              style={{borderColor: '#BABABA'}}
              editable={false}
              // obsecureText={true}
              setVariable={() => {}}></MyTextInput>
            <SizedBox height={10}></SizedBox>
            <Text style={{color: 'black'}}>Phone Number</Text>
            <MyTextInput
              placeholder={''}
              inputMode={'numeric'}
              secureTextEntry={true}
         
              variable={'hello'}
              editable={true}
          
              setVariable={setpn}></MyTextInput>

            <SizedBox height={10}></SizedBox>
            <Text style={{color: 'black'}}>Address</Text>
            <MyTextInput
              placeholder={''}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              // obsecureText={true}
              setVariable={setAddress}></MyTextInput>

            <SizedBox height={10}></SizedBox>
            <Text style={{color: 'black'}}>State</Text>
            <MyTextInput
              placeholder={''}
              inputMode={'Madhya Pradesh '}
              secureTextEntry={true}
              variable={'hello'}
              // obsecureText={true}
              setVariable={setStatee}></MyTextInput>
            <SizedBox height={10}></SizedBox>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={{marginRight: 20}}>
                <Text style={{color: 'black'}}>City</Text>
                <MyTextInput
                  placeholder={''}
                  inputMode={'email'}
                  secureTextEntry={true}
                  variable={'hello'}
                  style={{width: 150}}
                  // obsecureText={true}
                  setVariable={setCity}></MyTextInput>
              </View>
              <View style={{marginRight: 20}}>
                <Text style={{color: 'black'}}>Pincode</Text>
                <MyTextInput
                  placeholder={''}
                  inputMode={'email'}
                  secureTextEntry={true}
                  variable={'hello'}
                  // obsecureText={true}
                  setVariable={setPincode}
                  style={{width: 150}}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {

                      console.log(pn)
                      
                      console.log(address)
                      
                      console.log(statee)
                      
                      console.log(city)
                      
                      console.log(pincode)
                       
                     const flag = completeMyProfile();   
                     if(flag)
                      {
                        navigation.navigate('LoginScreen');
                      } 
                     
                     // completeProfile();                      
              }}
              style={{
                height: 50,
                marginTop: 50,
                borderRadius: 10,
                backgroundColor: '#6DBD5F',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CompleteProfileScreen;

const styles = StyleSheet.create({});
