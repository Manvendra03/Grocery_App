import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  Image,
  TouchableOpacity,
  View,
  Platform,
  Dimensions,
  useWindowDimensions,
  Alert,
} from 'react-native';
import CartCard from '../Components/CartCard';
import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import SizedBox from '../Components/SizedBox';
import cartList, {getCartList} from '../Data/MyCartItems';
import {useFocusEffect, useIsFocused, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Counting from '../Components/Counting ';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  // const [cartItem, setcartItem] = useState(cartList);
  
  const [d,setD] = useState(0);
  const [t,setT] = useState(0);
  
  const [Dis,setDis] = useState(0);
  
  const [ta,setTa] = useState(0);

   const [userID , setUserId] = useState(0);


  const isFocusedScreen = useIsFocused();
  const [openBill, setOpenBill] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  async function placeMyOrder()
  {
    await getUserId();
    const response = await axios.post('https://nbp8qssq-4090.inc1.devtunnels.ms/api/placeorder', {
        "customer_id": userID,
        "total_amount": ta,
        "order_details": cartItems.length
},);

     console.log("ORDER PALCED --------- >>>>>> ");
     console.log(response.data);
     if(response.status == 200)
      {
     Alert.alert('Order Placed', 'Order has been placed with order Id : '+ response.data.order_id);
        
      }
      else
      {
        console.log("status code eeeee" + response.status)
      }
  }

  const getUserId = async () => {
    console.log("----")
    try {
      const value = await AsyncStorage.getItem('USER');
      console.log(value);
      setUserId(value);
       // Return an empty array if no items are 
    } catch (error) {
      console.error('Error retrieving cart items:', error);
      return []; // Return an empty array on error
    }
  };
  
  async function getMyBill()
  {
    console.log("??????>>>");
    
    // const Jobj = JSON.stringify(arrayOfIdsWithQuantity)
    // console.log(Jobj);
   const response = await axios.post('https://nbp8qssq-4090.inc1.devtunnels.ms/api/calculate_order', {
           order : arrayOfIdsWithQuantity
    },);

    console.log(response.data);
    
    if(response.status == 200)
      {
        setD(response.data.delivery_Charge);
        setT(response.data.total_Amount);
        setTa(response.data.total_to_pay);
        setDis(response.data.discount);
        setOpenBill(true);

      }
    console.log("??????");

  }
  


  // useEffect(()=>{
  // retrieveCartItems();
  // },)

  useFocusEffect(
    React.useCallback(() => {
      retrieveCartItems();
      setOpenBill(false);
    }, []),
  );

  // Function to retrieve cart items from AsyncStorage
  const retrieveCartItems = async () => {
    try {
      const value = await AsyncStorage.getItem('CART');
      if (value !== null) {
        setCartItems(JSON.parse(value));
      }
    } catch (error) {
      console.error('Error retrieving cart items:', error);
    }
  };

  const arrayOfIdsWithQuantity = cartItems.map(obj => ({
    item_id: obj.item_id,
    quantity: 1, // Set default quantity to 1 or adjust as needed
  }));

  const removeItemById = idToRemove => {
    console.log('Removing.....' + idToRemove);
    const updatedList = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].item_id !== idToRemove) {
        updatedList.push(cartItems[i]);
      }
    }

    setCartItems(updatedList);
  };

  // isFocusedScreen
  //   ? () => {
  //       fetchCartItem();
  //     }
  //   : {};

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#F5F5F5',
      }}>
      <ScrollView>
        <View
          style={{
            height: Platform.OS === 'ios' ? 150 : 120,
            width: '100%',
            backgroundColor: '#009746',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: Platform.OS === 'ios' ? 45 : 50,
              alignSelf: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: '700', color: 'white'}}>
              My Cart
            </Text>
            <Text style={{fontSize: 12, color: 'white', marginTop: 5}}>
              Approximate Delivery in 30 days
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            // height: Platform.OS === 'ios' ? height - 130 : height - 90,
            paddingTop: 5,
            backgroundColor: '#F5F5F5',
            borderRadius: 20,
            marginTop: Platform.OS === 'ios' ? -35 : -40,
          }}>
          {cartItems?.map(i => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SingleItemScreen', {item_id: i.item_id});
                }}
                style={{
                  height: 130,
                  margin: 10,
                  // backgroundColor: '#E2FFD3',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '32%',
                    backgroundColor: '#BABABA',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  <Image
                    source={{
                      uri: i.image_url,
                    }}
                    style={{
                      height: '100%',
                      width: '100',
                      backgroundColor: 'grey',
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      color: 'black',
                      lineHeight: 25,
                    }}>
                    {i.item_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'grey',
                      lineHeight: 20,
                    }}>
                    Price : {i.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'grey',
                      lineHeight: 20,
                      marginBottom: 10,
                    }}>
                    Weight : {i.unit}
                  </Text>
                  <Counting />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    removeItemById(i.item_id);
                  }}
                  style={{
                    height: 15,
                    width: 15,
                    position: 'absolute',
                    top: 15,
                    right: 15,
                  }}>
                  <Image
                    source={require('../assets/close.png')}
                    style={{height: 15, width: 15}}></Image>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}

          {openBill === false ? (
            <TouchableOpacity
              onPress={async () => {
                console.log('999000999');

                console.log('Done --- >>>>>');

                try {
                  // Update cart items in AsyncStorage
                  await AsyncStorage.setItem('CART', JSON.stringify(cartItems));
                } catch (error) {
                  console.error('Error adding item to cart:', error);
                  Alert.alert(
                    'Error',
                    'Failed to gernrate bill. Please try again.',
                  );
                }

                console.log(arrayOfIdsWithQuantity);
                
                getMyBill();
             
              }}
              style={{
                height: 50,
                marginVertical: 10,
                borderRadius: 10,
                backgroundColor: '#6DBD5F',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
                Check Out
              </Text>
            </TouchableOpacity>
          ) : (
            <View>
              <View
                style={{
                  height: 150,
                  width: '100%',
                  backgroundColor: '#D4D4D4',
                  borderRadius: 20,
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  justifyContent: 'space-evenly',
                }}>
                {/* //total Amount */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                  }}>
                  <Text style={{color: 'black', fontWeight: '700'}}>Total</Text>
                  <Text style={{color: 'black', fontWeight: '700'}}>{t}</Text>
                </View>
                {/* // Delivery charges */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                  }}>
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    Delivery charges
                  </Text>
                  <Text style={{color: 'black', fontWeight: '700'}}>{d}</Text>
                </View>
                {/* // discount charges */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                  }}>
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    Discount
                  </Text>
                  <Text style={{color: 'black', fontWeight: '700'}}>{Dis}</Text>
                </View>

                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: 'black',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                  }}>
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    Total Amount
                  </Text>
                  <Text style={{color: 'black', fontWeight: '700'}}>{ta}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setOpenBill(false);
                  placeMyOrder(); 
                }}
                style={{
                  height: 50,
                  marginVertical: 10,
                  borderRadius: 10,
                  backgroundColor: '#6DBD5F',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: '800', fontSize: 18, color: 'white'}}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <SizedBox height={100} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

{
  /* <CartCard
navigation={navigation}
image={i.image}
tittle={i.title}
price={i.price}
description={i.description}
itemId={i.id}
/> */
}
