import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  setState,
  View,
  Platform,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

import SizedBox from '../Components/SizedBox';
import OfferCard from '../Components/OfferCard';
import ItemCard from '../Components/ItemCard';

import axios from 'axios';
import AppBar from '../Components/AppBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import NewItemCard from '../Components/NewItemCard';
import {base_url} from '../API/BaseUrl';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const HomeScreen = ({navigation}) => {
  const [searchString, SetSearchString] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({list1: [], list2: [], list3: []});

  const [arrivals, setArrivals] = useState([
    {
      img: 'https://www.bigbasket.com/media/uploads/p/xxl/40015993_11-uncle-chips-spicy-treat.jpg',
      name: 'Uncle Chips',
      price: '210',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kQFwtv72JbqerZzH43IvxOn9uSA6dSEgoDs-h6KlUA&s',
      name: 'Ruffles Chips',
      price: '250',
    },
    {
      img: 'https://i5.walmartimages.com/seo/Lay-s-Potato-Chips-Limon-Flavor-7-75-oz-Bag_5f090e6d-fd82-4f8a-99a3-dc41d556211e.6dcea6a65421632ac8b8621c759a61a5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
      name: 'Lays Chips',
      price: '210',
    },

    {
      img: 'https://5.imimg.com/data5/SELLER/Default/2021/1/RV/HV/BH/121836789/bourbon-biscuit.jpg',
      name: 'bourbon',
      price: 300,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_9ZinS_cb64Gj7OnCSNEFATpQAjQdWnLABvCM2yijw&s',
      name: 'Marie Gold',
      price: 450,
    },
  ]);

  const [catList, setCatList] = useState([
    {
      name: 'fruits',
      img: 'https://static.toiimg.com/photo/105938708.cms',
    },
    {
      name: 'vegggies',
      img: 'https://c.ndtvimg.com/2022-10/d75l0jpo_green-vegetables-plant-diet_625x300_16_October_22.jpg',
    },
    {
      name: 'snacks',
      img: 'https://images-cdn.ubuy.co.in/65cb168db14ac961f949efe4-fun-flavors-box-favorite-american-snack.jpg',
    },
    {
      name: 'food',
      img: 'https://media.self.com/photos/622912847b959736301bfb91/master/pass/GettyImages-1301412050.jpg',
    },
    {
      name: 'masala',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFVKTqhbF7IdO8OVAejT6vS4iEGsH2hIcLDySVRtVGw&s',
    },
    {
      name: 'toppings',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxW3VLmcAKhUYSI_qHa7Td8R9dFf1jsGmcNdgzXWxuqQ&s',
    },
  ]);

  const [fruits, setFruits] = useState([
    {
      img: 'https://cdn.pixabay.com/photo/2016/11/18/13/47/apple-1834639_1280.jpg',
      name: 'Apple',
      price: '210 /Kg',
    },
    {
      img: 'https://grosav.com/assets/img/items/15985275313rtzeTRNjZ.jpg',
      name: 'Banana',
      price: '20 / KG',
    },
    {
      img: 'https://www.mashed.com/img/gallery/apparently-one-pineapple-is-not-a-single-fruit-heres-why/intro-1694898682.jpg',
      name: 'PineApple',
      price: '210 / 1psc',
    },

    {
      img: 'https://qph.cf2.quoracdn.net/main-qimg-fc794ca1a36edd0a822b67e7a3cbe7df-lq',
      name: 'Strawberrys',
      price: '120 / KG',
    },
  ]);

  const fetchAPI = async () => {
    try {
      console.log('calling -------- >');
      var response = await axios.get(
        'https://nbp8qssq-4090.inc1.devtunnels.ms/api/homepage',
      );
      // console.log(response.data);
      const catList = response.data.categories;

      if(response.status != 200)
        {
          console.log("/////////////////////////////////////////////////////")
          console.log("/////////////////////////////////////////////////////")
          console.log("/////////////////////////////////////////////////////")
          console.log("Wrong status code !!!!!!!!"+response.status);
                
        }

        
      setCatList(catList);
      setArrivals(response.data.items_list1);
      setFruits(response.data.items_list2);
      console.log('setting Ture -------- >');
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <View
      style={{height: '100%'}}
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            height: Platform.OS === 'ios' ? 165 : 120,
            backgroundColor: '#009746',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              width: '100%',
              height: 90,

              position: 'absolute',

              bottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 10,
                  backgroundColor: 'white',
                  borderRadius: 20,
                }}
              />
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                  Manvendra Patidar
                </Text>
                <Text style={{fontSize: 12, color: 'white'}}>
                  47, scheme vijaynagar
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 35,
                marginTop: 10,
                borderRadius: 25,
                width: '90%',
                justifyContent: 'center',
                paddingHorizontal: 15,
                alignSelf: 'center',
                backgroundColor: 'white',
              }}>
              <TextInput
                style={{
                  height: 50,
                  width: '90%',
                }}
                placeholder="Search..."
                placeholderTextColor="#9E9E9E" // Placeholder text color
                value={searchString}
                onChangeText={ch => {
                  SetSearchString(ch);
                }}
              />
            </View>
          </View>
        </View>

        <SizedBox height={20} />
        <View
          style={{
            height: 200,
            marginHorizontal: 20,
            alignItems: 'center',
            paddingHorizontal: 'auto',
          }}>
          <OfferCard />
        </View>

        <View
          style={{
            // paddingTop: 20,
            backgroundColor: '#F5F5F5',
            paddingHorizontal: 20,
            alignItems: 'flex-start',
          }}>
          <SizedBox height={25} />
          <View
            style={{height: 120, alignItems: 'center', alignItems: 'center'}}>
            {/* <SizedBox height={6}></SizedBox> */}
            <ScrollView
              horizontal={true}
              style={{flexDirection: 'row', direction: 'ltr', height: 90}}
              showsHorizontalScrollIndicator={false}>
              {catList?.map(i => {
                const id = i.category_id;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('>>>>' + id);
                      navigation.navigate('ProductListScreen', {
                        cat_name: i.category_name,
                      });
                    }}
                    style={{
                      height: 90,
                      width: 75,
                      marginHorizontal: 8,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 60,
                        width: 60,
                        marginBottom: 6,
                        // backgroundColor: 'white',
                        alignItems: 'center',
                        borderRadius: 30,
                      }}>
                      <ShimmerPlaceholder
                        style={{
                          height: 60,
                          width: 60,
                          marginBottom: 6,
                          backgroundColor: 'white',
                          borderRadius: 30,
                          marginHorizontal: 10,
                        }}
                        duration={1500}
                        visible={!isLoading}>
                        <Image
                          source={{
                            uri: i.image_url,
                          }}
                          style={{height: 60, width: 60, borderRadius: 30}}
                        />
                      </ShimmerPlaceholder>
                    </View>
                    {isLoading ? (
                      <View
                        style={{
                          height: 12,
                          width: 50,
                          backgroundColor: '#BABABA',
                        }}
                      />
                    ) : (
                      <Text
                        numberOfLines={2}
                        style={{
                          fontWeight: '600',
                          color: 'black',
                          overflow: 'hidden',
                        }}>
                        {i.category_name}
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <SizedBox height={10} />
          <View style={{height: 260}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Fresh Food
            </Text>
            <SizedBox height={10}></SizedBox>
            <ScrollView
              horizontal={true}
              style={{flexDirection: 'row', direction: 'ltr'}}
              showsHorizontalScrollIndicator={false}>
              {arrivals?.map(i => {
                return (
                  <ShimmerPlaceholder
                    style={{
                      height: 200,
                      width: 150,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginHorizontal: 10,
                      alignItems: 'center',
                      // paddingVertical: 10,
                      elevation: 10,

                      shadowColor: 'black',
                      shadowOffset: {
                        width: 0,
                        height: 7,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.5,
                    }}
                    duration={1500}
                    visible={!isLoading}>
                    <NewItemCard
                      image_url={i.image_url}
                      name={i.item_name}
                      price={i.price}
                      id={i.item_id}
                    />
                  </ShimmerPlaceholder>
                );
              })}
            </ScrollView>
          </View>
          <View style={{height: 260}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Popular
            </Text>
            <SizedBox height={10}></SizedBox>
            <ScrollView
              horizontal={true}
              style={{flexDirection: 'row', direction: 'ltr'}}
              showsHorizontalScrollIndicator={false}>
              {fruits?.map(i => {
                return (
                  <ShimmerPlaceholder
                    style={{
                      height: 200,
                      width: 150,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginHorizontal: 6,
                      alignItems: 'center',
                      // paddingVertical: 10,
                      elevation: 10,

                      shadowColor: 'black',
                      shadowOffset: {
                        width: 0,
                        height: 7,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.5,
                    }}
                    duration={1500}
                    visible={!isLoading}>
                    <NewItemCard
                      image_url={i.image_url}
                      name={i.item_name}
                      price={i.price}
                      id={i.item_id}
                    />
                  </ShimmerPlaceholder>
                );
              })}
            </ScrollView>
          </View>

          <SizedBox height={120}></SizedBox>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  greet: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

{
  /* <ItemCard
navigation={navigation}
itemName={i.title}
itemPrice={i.price}
itemId={i.id}
itemImage={i.image}
itemDesc={i.description}
isFetched={isFetched}
/>
 */
}

{
  /* <View style={{height: 280}}>
<Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
  Recently Viewed
</Text>
<SizedBox height={6}></SizedBox>
<ScrollView
  horizontal={true}
  style={{flexDirection: 'row', direction: 'ltr'}}
  showsHorizontalScrollIndicator={false}>
  {data.list3?.map(i => {
    // console.log(i.id)
    return (
      <ItemCard
        navigation={navigation}
        itemName={i.title}
        itemPrice={i.price}
        itemImage={i.image}
        itemId={i.id}
        itemDesc={i.description}
        isFetched={isFetched}
      />
    );
  })}
</ScrollView>
</View> */
}
