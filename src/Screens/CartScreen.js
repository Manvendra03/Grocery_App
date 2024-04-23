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
} from 'react-native';
import CartCard from '../Components/CartCard';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import SizedBox from '../Components/SizedBox';
import cartList, {getCartList} from '../Data/MyCartItems';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Counting from '../Components/Counting ';

const CartScreen = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const [cartItem, setcartItem] = useState(cartList);
  const isFocusedScreen = useIsFocused();
  const [openBill , setOpenBill ] = useState(false);
  const arr = [1, 23, 4, 5, 6, 6, 5, 3, 3, 2];
  
  const fetchCartItem = () => {
    setcartItem(cartList);
  };

  isFocusedScreen
    ? () => {
        fetchCartItem();
      }
    : {};

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
          {arr?.map(i => {
            return (
              <TouchableOpacity
             
                 onPress={()=>{navigation.navigate("SingleItemScreen")}}
             
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
                      uri: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg',
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
                    Fresh Oranges
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'grey',
                      lineHeight: 20,
                    }}>
                    Price : $20
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'grey',
                      lineHeight: 20,
                      marginBottom: 10,
                    }}>
                    Weight : 2Kg
                  </Text>
                  <Counting />
                </View>
              </TouchableOpacity>
            );
          })}
        
        
        {
     openBill === false? <TouchableOpacity onPress={()=>{setOpenBill(true)}} style ={{height: 50,marginVertical: 10 ,borderRadius: 10 , backgroundColor: "#6DBD5F" , justifyContent: "center" , alignItems: "center"}}>
                    <Text style ={{fontWeight: "800" , fontSize: 18 , color: "white"}}>Check Out</Text>
            </TouchableOpacity>   : <View><View
            style={{
              height: 150,
              width: '100%',
              backgroundColor: '#D4D4D4',
              borderRadius: 20,
              paddingVertical: 5,
              paddingHorizontal: 20,
              justifyContent : "space-evenly"
            }}>
            {/* //total Amount */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: 30, }}>
              <Text style={{color: 'black', fontWeight: '700'}}>Total</Text>
              <Text style={{color: 'black', fontWeight: '700'}}>399</Text>
            </View>
            {/* // Delivery charges */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: 30,}}>
              <Text style={{color: 'black', fontWeight: '700'}}>
                Delivery charges
              </Text>
              <Text style={{color: 'black', fontWeight: '700'}}>50</Text>
            </View>
            {/* // discount charges */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: 30,}}>
              <Text style={{color: 'black', fontWeight: '700'}}>
                Discount
              </Text>
              <Text style={{color: 'black', fontWeight: '700'}}>10%</Text>
            </View>

            <View style ={{height: 1 , width: "100%" , backgroundColor: "black"}}></View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: 30,}}>
              <Text style={{color: 'black', fontWeight: '700'}}>
                Total Amount
              </Text>
              <Text style={{color: 'black', fontWeight: '700'}}>200</Text>
            </View>
          </View>
           <TouchableOpacity onPress={ ()=>{setOpenBill(false)}} style ={{height: 50,marginVertical: 10 ,borderRadius: 10 , backgroundColor: "#6DBD5F" , justifyContent: "center" , alignItems: "center"}}>
                    <Text style ={{fontWeight: "800" , fontSize: 18 , color: "white"}}>Buy Now</Text>
            </TouchableOpacity> 
            </View>
           }
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
