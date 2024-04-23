import {Image, Platform, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SizedBox from '../Components/SizedBox';
import ProfileOptions from '../Components/ProfileOptions';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  
  const navigation = useNavigation();


  const [options, setoption] = useState([
    {icon: require('../assets/profile_icons/user-2.png'), tittle: 'Profile'},
    {icon: require('../assets/profile_icons/heart.png'), tittle: 'My WishList'},
    {
      icon: require('../assets/profile_icons/shopping-cart.png'),
      tittle: 'My Cart',
    },
    {icon: require('../assets/profile_icons/bar-chart.png'), tittle: 'Stats'},
    {icon: require('../assets/profile_icons/setting.png'), tittle: 'setting'},
    {icon: require('../assets/profile_icons/logout.png'), tittle: 'Log out'},
  ]);
  return (
     <View style= {{height : "100%" , width: "100%" ,}}>
    {/* <AppBar/> */}
    <View
          style={{
            height: Platform.OS === 'ios' ? 100 : 60,
            width: '100%',
            backgroundColor: '#009746',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: Platform.OS === 'ios' ? 10 :15,
              alignSelf: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: '700', color: 'white'}}>
              Profile 
            </Text>
          </View>
    </View>
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 30,
        // paddingLeft: 25,

      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25,paddingLeft: 20}}>
        <Image
          source={{
            uri: 'https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png',
          }}
          style={{ marginLeft: 20, height: 50, width: 50, borderRadius: 100}}></Image>
        <View style={{width: 10}}></View>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Manvendra Patidar
          </Text>
          <Text style={{fontSize: 12,fontWeight: '500', color: 'grey'}}>
            Android Developer
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      {/* seprator  */}
      <View
        style={{
          height: 1,
          width: '85%',
          backgroundColor: 'grey',
          opacity: 0.5,
          alignSelf: 'center',
          marginBottom: 30,
        }}></View>

      {options?.map(option => {
        return <ProfileOptions image={option?.icon} tittle={option?.tittle} />;
      })}
    </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
