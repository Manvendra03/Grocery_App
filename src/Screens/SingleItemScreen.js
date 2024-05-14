import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import Counting from '../Components/Counting ';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingleITemScreen = () => {
  const navigation = useNavigation();

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const route = useRoute();
  const {item_id , obj} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const [array , setArray] = useState([]);
  
  const [cartItems, setCartItems] = useState([]);

const retrieveCartItems = async () => {
  try {
    const value = await AsyncStorage.getItem('CART');
    return value !== null ? JSON.parse(value) : []; // Return an empty array if no items are found
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    return []; // Return an empty array on error
  }
};

// Function to add item to cart

const addToCart = async () => {
  try {
    // Retrieve cart items from AsyncStorage
    const existingCartItems = await retrieveCartItems();

    // Combine existing cart items with the new item
    const updatedCartItems = [...existingCartItems, item];

    // Update cart items in AsyncStorage
    await AsyncStorage.setItem('CART', JSON.stringify(updatedCartItems));

    // Update state
    setCartItems(updatedCartItems);

    // Show success message
    Alert.alert('Success', 'Item added to cart!');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    Alert.alert('Error', 'Failed to add item to cart. Please try again.');
  }
};

  console.log('*****' + item_id);

  const fetchAPI = async () => {
    try {
      // console.log('---------------------------------------------------called');
      var response = await axios.get(
        'https://nbp8qssq-4090.inc1.devtunnels.ms/api/item_details/' + item_id,
      );

      // console.log(response.data);

      setItem(response.data);
      setIsLoading(false);

      if (response.status != 200) {

        console.log('Wrong status code !!!!!!!!' + response.status);
      } else {
        // console.log('else' + response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#F5F5F5'}}>
      <ShimmerPlaceholder
        style={{
          height: '70%',
          width: '100%',
          backgroundColor: 'grey',
        }}
        duration={1500}
        visible={!isLoading}>
        <View style={{height: '100%', width: '100%', backgroundColor: 'grey'}}>
          <Image
            source={{
              //  uri: 'https://lh3.googleusercontent.com/proxy/I4O9fSq4Yc0IImGGpHJrvUX-HAqLkbnI75hGL_X7l7UQukhExMMFw0H1FiK6kEilbeXzrYDBHildb3hGfaSAzhbJbgkj5h8D0_b-HAkSTesqoYoFiQ'
              uri: item.image_url,
            }}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              backgroundColor: 'grey',

              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>
      </ShimmerPlaceholder>
      <View
        style={{
          height: '40%',
          marginTop: -30,
          paddingHorizontal: 20,
          paddingVertical: 20,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 10,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {item.item_name}
          </Text>

          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            $ {item.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Image
            source={require('../assets/star.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={{fontSize: 12, color: 'grey', marginLeft: 10}}>
            {item.rating}.00 rating
          </Text>
        </View>

        <Text
          numberOfLines={3}
          style={{fontSize: 12, color: 'grey', marginBottom: 20}}>
          {item.description}
        </Text>
        <Counting />

        <TouchableOpacity
          onPress={() => {
            // GetOldData();
              //  AddthisItemToCart();
              addToCart();
            // navigation.navigate("Cart");
          }}
          style={{
            height: 50,
            marginVertical: 10,
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: '#6DBD5F',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          position: 'absolute',
          top: Platform.OS === 'ios' ? 60 : 25,
          left: 30,
          borderRadius: 10,
        }}>
        <Image
          source={require('../assets/back.png')}
          style={{height: 20, width: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SingleITemScreen;

const styles = StyleSheet.create({});
