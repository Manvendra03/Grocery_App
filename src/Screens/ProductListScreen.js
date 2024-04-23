import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ProductListScreen = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          height: Platform.OS === 'ios' ? 100 : 60,
          backgroundColor: '#009746',
        }}>   
         <TouchableOpacity
         onPress={()=>{navigation.goBack()}
         }
       style={{height: 25 , width: 25 ,justifyContent: "center" , alignItems: "center" , position: "absolute" ,top: Platform.OS === 'ios'? 65 : 25 , left: 20, borderRadius: 10}}>
         <Image source={require("../assets/back.png")}
            style ={{height: 20 , width: 20}}
            tintColor={"white"}
         />
       </TouchableOpacity> 
        <Text
          style={{
            fontSize: 22,
            fontWeight: '700',
            color: 'white',
            position: 'absolute',
            bottom: 10,
            alignSelf: 'center',
          }}>
          Category Name
        </Text>
      </View>
      <ScrollView>
        {[12, 3, 2, 2, 1, 23, 2, 4, 2]?.map(i => {
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
              <View style ={{}}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                    lineHeight: 20,
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

                <TouchableOpacity
                  style={{
                    height: 30,
                    // marginVertical: 10,
                    borderRadius: 5,
                    backgroundColor: '#6DBD5F',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontWeight: '500', fontSize: 14, color: 'white'}}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({});
