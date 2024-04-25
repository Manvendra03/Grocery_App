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
import React from 'react';
import MyTextInput from '../Components/TextInput';
import SizedBox from '../Components/SizedBox';

const CompleteProfileScreen = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : -10; // Adjust the value as per your need

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
        <View  >
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
          <View style ={{ paddingHorizontal:15, backgroundColor: 'rgba(144, 238, 144,0.3)', borderRadius: 10 , paddingVertical :15}}>
            <Text style={{color: 'black'}}>Name</Text>
            <MyTextInput
              placeholder={'Manvendra Patidar'}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              editable={false}
              style={{borderColor: '#BABABA'}}
              // obsecureText={true}
              setVariable={() => {}}></MyTextInput>

            <SizedBox height={10}></SizedBox>
            <Text style={{color: 'black'}}>Email Address</Text>
            <MyTextInput
              placeholder={'manvendrapatidar03@gmail.com'}
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
              placeholder={'+91 9617474952'}
              inputMode={'numeric'}
              secureTextEntry={true}
              style={{borderColor: '#BABABA'}}
              variable={'hello'}
              editable={false}
              // obsecureText={true}
              setVariable={() => {}}></MyTextInput>
            <SizedBox height={10}></SizedBox>

            <View style={{flexDirection: 'row' , justifyContent: "space-evenly"}}>
              <View style={{marginRight: 20}}>
                <Text style={{color: 'black'}}>Pincode</Text>
                <MyTextInput
                  placeholder={'Pincode'}
                  inputMode={'email'}
                  secureTextEntry={true}
                  variable={'hello'}
                  // obsecureText={true}
                  setVariable={() => {}}
                  style={{width: 150}}
                />
              </View>
              <View>
                <Text style={{color: 'black'}}>City</Text>
                <MyTextInput
                  placeholder={'Indore'}
                  inputMode={'email'}
                  secureTextEntry={true}
                  variable={'hello'}
                  style={{width: 150}}

                  // obsecureText={true}
                  setVariable={() => {}}></MyTextInput>
              </View>
            </View>

            <SizedBox height={10}></SizedBox>
            <Text style={{color: 'black'}}>Address</Text>
            <MyTextInput
              placeholder={'Pincode'}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              // obsecureText={true}
              setVariable={() => {}}></MyTextInput>

            <SizedBox height={10}></SizedBox>
            <Text style={{color: 'black'}}>State</Text>
            <MyTextInput
              placeholder={'State'}
              inputMode={'Madhya Pradesh '}
              secureTextEntry={true}
              variable={'hello'}
              // obsecureText={true}
              setVariable={() => {}}></MyTextInput>
            <TouchableOpacity
              onPress={() => {}}
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
