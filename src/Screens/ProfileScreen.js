import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SizedBox from '../Components/SizedBox';

import MyTextInput from '../Components/TextInput';
import ProfileOptions from '../Components/ProfileOptions';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [showCard, setShowCard] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const [options, setoption] = useState([
    {
      icon: require('../assets/profile_icons/user-2.png'),
      tittle: 'Profile',
      functionn: () => {
        setShowCard(true);
      },
    },
    {
      icon: require('../assets/profile_icons/heart.png'),
      tittle: 'My WishList',
      functionn: () => {
        navigation.navigate('Cart');
      },
    },
    {
      icon: require('../assets/profile_icons/shopping-cart.png'),
      tittle: 'My Cart',
      functionn: () => {
        navigation.navigate('Cart');
      },
    },
    {
      icon: require('../assets/profile_icons/bar-chart.png'),
      tittle: 'Order History',
      functionn: () => {
        navigation.navigate('OrderHistoryScreen');
      },
    },
    {icon: require('../assets/profile_icons/setting.png'), tittle: 'setting', functionn: () => {
      setShowSetting(true);
    },},
    {
      icon: require('../assets/profile_icons/logout.png'),
      tittle: 'Log out',
      functionn: () => {
        navigation.goBack();
        navigation.goBack();
      },
    },
  ]);
  return (
    <View style={{height: '100%', width: '100%'}}>
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
            bottom: Platform.OS === 'ios' ? 10 : 15,
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25,
            paddingLeft: 20,
          }}>
          <Image
            source={{
              uri: 'https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png',
            }}
            style={{
              marginLeft: 20,
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />
          <View style={{width: 10}}></View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Manvendra Patidar
              </Text>
              <Text style={{fontSize: 12, fontWeight: '500', color: 'grey'}}>
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
          return (
            <ProfileOptions
              image={option?.icon}
              tittle={option?.tittle}
              // setShowCardd={setShowCard}
              onTap={option?.functionn}
            />
          );
        })}
      </View>

      {showCard ? (
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(52, 52, 52,0.8)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 500,
              width: '85%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowCard(false);
              }}
              style={{
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                width: 25,
                borderWidth: 2,
                position: 'absolute',
                top: 10,
                right: 10,
                borderRadius: 20,
              }}>
              <Image
                source={require('../assets/close.png')}
                style={{height: 10, width: 10}}
              />
            </TouchableOpacity>

            <Image
              source={{
                uri: 'https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png',
              }}
              style={{
                marginLeft: 20,
                height: 80,
                width: 80,
                borderRadius: 100,
                bottom: 30,
              }}
            />
            <MyTextInput
              placeholder={'Manvendra Patidar'}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              editable={isEdit}
              style={{borderColor: isEdit ? "black": '#BABABA', width: '80%'}}
              placeholderTextColorr={isEdit? 'black': "#BABABA"}
              // obsecureText={true}
              setVariable={() => {}}
            />

            <MyTextInput
              placeholder={'+91 9617474953'}
              inputMode={'numeric'}
              secureTextEntry={true}
              variable={'hello'}
              editable={isEdit}
             
              style={{borderColor: isEdit ? "black": '#BABABA', width: '80%'}}
              placeholderTextColorr={isEdit? 'black': "#BABABA"}
             // obsecureText={true}
              setVariable={() => {}}
            />

            <MyTextInput
              placeholder={'manvendrapatidar@gmail.com'}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              editable={isEdit}
              style={{borderColor: isEdit ? "black": '#BABABA', width: '80%'}}
              placeholderTextColorr={isEdit? 'black': "#BABABA"}
              // obsecureText={true}
              setVariable={() => {}}
            />

            <MyTextInput
              placeholder={'ward no. 3 gulzara dhamnod '}
              inputMode={'email'}
              secureTextEntry={true}
              variable={'hello'}
              editable={isEdit}
              style={{borderColor: isEdit ? "black": '#BABABA', width: '80%'}}
              placeholderTextColorr={isEdit? 'black': "#BABABA"}
              // obsecureText={true}
              setVariable={() => {}}
            />

            <TouchableOpacity
              onPress={()=>{setIsEdit(!isEdit)}}
              style={{
                height: 50,
                // marginBottom: 0,
                paddingHorizontal: 20,
                marginTop: 60,
                backgroundColor: isEdit ? "#6DBD5F" :'red',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
                {
                  isEdit? "Update Profile" : "Edit Profile"
                }
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View />
      )}




{showSetting ? (
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(52, 52, 52,0.8)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 500,
              width: '85%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowSetting(false);
              }}
              style={{
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                width: 25,
                borderWidth: 2,
                position: 'absolute',
                top: 10,
                right: 10,
                borderRadius: 20,
              }}>
              <Image
                source={require('../assets/close.png')}
                style={{height: 10, width: 10}}
              />
            </TouchableOpacity>
            <Text style={{fontWeight: '800', fontSize: 23, color: 'black',marginBottom: 40}}>
                Setting
            </Text>

            <TouchableOpacity style ={{flexDirection: "row" , alignItems: "center" , width: "80%" , height: 40 }}>
            <Image
                source={require('../assets/profile_icons/user-2.png')}
                tintColor={"black"}
                style={{height: 15, width: 15, marginRight: 15}}
              />
              <Text style ={{fontSize: 18 , fontWeight: "30" , color: "black"}}>Account</Text>
            </TouchableOpacity>

            <View style = {{backgroundColor: "grey" , height: 1.5, width: "85%" , alignSelf: "center" ,position: "relative" ,opacity: .4 ,marginBottom: 20 } } ></View> 
  
            <TouchableOpacity style ={{flexDirection: "row" , alignItems: "center" , width: "80%" , height: 40 }}>
            <Image
                source={require('../assets/profile_icons/setting.png')}
                tintColor={"black"}
                style={{height: 20, width: 20, marginRight: 15}}
              />
              <Text style ={{fontSize: 18 , fontWeight: "30" , color: "black"}}>Notification</Text>
            </TouchableOpacity>
            <View style = {{backgroundColor: "grey" , height: 1.5, width: "85%" , alignSelf: "center" ,position: "relative" ,opacity: .4 ,marginBottom: 20 } } ></View> 
  

            <TouchableOpacity style ={{flexDirection: "row" , alignItems: "center" , width: "80%" , height: 40 }}>
            <Image
                source={require('../assets/profile_icons/wallet.png')}
                tintColor={"black"}
                style={{height: 20, width: 20, marginRight: 15}}
              />
              <Text style ={{fontSize: 18 , fontWeight: "30" , color: "black"}}>Payment</Text>
            </TouchableOpacity>

            <View style = {{backgroundColor: "grey" , height: 1.5, width: "85%" , alignSelf: "center" ,position: "relative" ,opacity: .4 ,marginBottom: 20 } } ></View> 
  
            <TouchableOpacity style ={{flexDirection: "row" , alignItems: "center" , width: "80%" , height: 40 }}>
            <Image
                source={require('../assets/profile_icons/user-2.png')}
                tintColor={"black"}
                style={{height: 15, width: 15, marginRight: 15}}
              />
              <Text style ={{fontSize: 18 , fontWeight: "30" , color: "black"}}>Account</Text>
            </TouchableOpacity>
            
            <View style = {{backgroundColor: "grey" , height: 1.5, width: "85%" , alignSelf: "center" ,position: "relative" ,opacity: .4 ,marginBottom: 20 } } ></View> 
  
            <TouchableOpacity
              onPress={()=>{}}
              style={{
                height: 40,
                // marginBottom: 0,
                paddingHorizontal: 30,
                marginTop: 50,
                backgroundColor: "#6DBD5F" ,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
                Save
               </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
