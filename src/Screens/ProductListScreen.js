import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import { useRoute } from '@react-navigation/native';

const ProductListScreen = ({navigation}) => {
  const route = useRoute();

  const {cat_name} = route.params;
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  
  console.log("*************"+cat_name);
  const [isLoading, setIsLoading] = useState(true);

  const [categoryName, setCategoryName] = useState(cat_name);
  // setCategoryName(cat_nam);
  const [cat_List, setCat_List] = useState([12,3,4,5,6,7,72,1,2,3,4]);
  const fetchAPI = async () => {
    try {
      console.log('---------------------------------------------------called');
      var response = await axios.post(
        'https://nbp8qssq-4090.inc1.devtunnels.ms/api/items_by_category',
        {
          category_name: categoryName,
        },
      );

      if(response.status != 200)
        {
          console.log("/////////////////////////////////////////////////////")
          console.log("/////////////////////////////////////////////////////")
          console.log("/////////////////////////////////////////////////////")
          console.log("Wrong status code !!!!!!!!"+response.status);
                
        }

     
      console.log(
        '---------------------------------------------------' + categoryName,
      );
      setCat_List(response.data.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <View>
      <View
        style={{
          height: Platform.OS === 'ios' ? 100 : 60,
          backgroundColor: '#009746',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            height: 25,
            width: 25,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: Platform.OS === 'ios' ? 65 : 25,
            left: 20,
            borderRadius: 10,
          }}>
          <Image
            source={require('../assets/back.png')}
            style={{height: 20, width: 20}}
            tintColor={'white'}
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
          {categoryName}
        </Text>
      </View>
     <View style={{alignItems:  isLoading ? null:"center" , height: "100%", width: "100%"}}>
     <ScrollView style ={{width:"95%"}} showsVerticalScrollIndicator={false}>
        {cat_List?.map(i => {
          return (
            
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SingleItemScreen', {item_id: i.item_id});
                }}
                style={{
                  height: 130,
                  margin: 10,
                  // backgroundColor: '#E2FFD3',
                  // width: "100%",
                  backgroundColor: 'white',
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                  <ShimmerPlaceholder
              style={{
                paddingVertical: 5,
                height: 130,
                  marginHorizontal: 15,
                  // backgroundColor: '#E2FFD3',
                  width: 120,
                  borderRadius: 16
              }}
              duration={1500}
              visible={!isLoading}>
                 
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#BABABA',
// backgroundColor: "red",
                    borderRadius: 10,
                    marginRight: 20,
                  }}>
                 
                 
                  <Image
                    source={{
                      uri: i.image_url,
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: 'grey',
                      borderRadius: 10,
                    }}
                  />
                </View>
                
                </ShimmerPlaceholder>
              
              {
                isLoading ?<View></View> :<View style={{width: "50%"}}>
                <Text
                numberOfLines={2}
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                    overflow: "hidden",
                    lineHeight: 20,
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
                  Price : $ {i.price}
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
              }
              </TouchableOpacity>
          );
        })}
      </ScrollView>
     </View>
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({});
