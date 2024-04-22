import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import CategoryScreen from './CategoryScreen';
import AppBar from '../Components/AppBar';
import ContactUsScreen from './ContactUsScreen';
import ProfileScreen from './ProfileScreen';
import ItemCard from '../Components/ItemCard';
import ItemScreen from './itemScreen';
import SingleITemScreen from './SingleItemScreen';

const Tab = createBottomTabNavigator();

const BottomBarScreen = () => {

  const [showBottomBar, setBottomBar ] = useState(true); 
   
  function changeBottomBar(flag)
  {
    setBottomBar(flag);
  }


  return (
    <View style={{flex: 1 , zIndex: 1}}>
      {/* <AppBar /> */}
      <Tab.Navigator
        initialRouteName="Home"

        screenOptions={{
          textAlignVertical: 'center',
        
          tabBarShowLabel: false,
           tabBarStyle: {
            display: showBottomBar?'flex' : 'none',
            position: 'absolute',
            bottom: 20,
            right: 15,
            left: 15,
            borderRadius: 20,
            // backgroundColor: '#333945',
            backgroundColor: "#192B25",
    
            height: 75,
            ...styles.shadow,
          },
          tabBarActiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          //  component={SingleITemScreen}
 
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <Image
                  source={require('../assets/icons/home.png')}
                  style={[
                    styles.tabIcons,
                    {tintColor: focused ? 'white' : 'grey'},
                  ]}
                />

                <Text
                  style={[
                    styles.tabtext,
                    {color: focused ? 'white' : 'grey'},
                  ]}>
                  Home
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Category"
          component={CategoryScreen}

          options={{
            headerShown: false,

            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <Image
                  source={require('../assets/icons/categories.png')}
                  style={[
                    styles.tabIcons,
                    {tintColor: focused ? 'white' : 'grey'},
                  ]}
                />

                <Text
                  style={[
                    styles.tabtext,
                    {color: focused ? 'white' : 'grey'},
                  ]}>
                  Categories
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <Image
                  source={require('../assets/icons/cart.png')}
                  style={[
                    styles.tabIcons,
                    {tintColor: focused ? 'white' : 'grey'},
                  ]}
                />

                <Text
                  style={[
                    styles.tabtext,
                    {color: focused ? 'white' : 'grey'},
                  ]}>
                  Cart
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{bottobBarHideFunction: changeBottomBar}}
          options={{
            headerShown: false,

            tabBarIcon: ({focused}) => (
              <View style={styles.iconView}>
                <Image
                  source={require('../assets/icons/user.png')}
                  style={[
                    styles.tabIcons,
                    {tintColor: focused ? 'white' : 'grey'},
                  ]}
                />
                <Text
                  style={[
                    styles.tabtext,
                    {color: focused ? 'white' : 'grey'},
                  ]}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
        {/* Add more screens as needed */}
      </Tab.Navigator>
    </View>
  );
};

export default BottomBarScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  iconView:
    Platform.OS === 'ios'
      ? {alignItems: 'center', top: 10}
      : {alignItems: 'center'},
  tabIcons: {height: 30, width: 30, tintColor: 'black'},
  tabtext: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});
