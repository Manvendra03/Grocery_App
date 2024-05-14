import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import SizedBox from '../Components/SizedBox';
import AdvanceCard from '../Components/AdvanceCard';
import {delay} from './HomeScreen';
import axios from 'axios';
import NewItemCard from '../Components/NewItemCard';
import {base_url} from '../API/BaseUrl';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const CategoryScreen = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(true);
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
  const [imageurls, setimageurls] = useState([
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

  const getAdvanceList = async () => {
    try {
      var response = await axios.get(base_url + '/category');
      // console.log(response.data);
      
      if(response.status != 200)
        {
          console.log("/////////////////////////////////////////////////////")
          console.log("/////////////////////////////////////////////////////")
          console.log("/////////////////////////////////////////////////////")
          console.log("Wrong status code !!!!!!!!"+response.status);
                
        }

      setArrivals(response.data.new_arrivals);
      setimageurls(response.data.categories);
      // await delay(1500);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAdvanceList();
  }, []);

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);


  return (
    <View>
      <View
        style={{
          height: Platform.OS === 'ios' ? 80 : 50,
          backgroundColor: '#009746',
        }}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#F5F5F5',
          height: '100%',
          width: '100%',
          paddingLeft: 20,
        }}>
        <SizedBox height={10} />
        <View
          style={{
            backgroundColor: '#1C4B35',
            paddingLeft: 25,
            paddingTop: 15,
            marginLeft: 10,
            marginTop: 10,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: 'white',
              paddingLeft: 8,
              marginBottom: 2,
            }}>
            New Arrivals
          </Text>
          <View style={{height: 220, marginVertical: 10}}>
            <ScrollView
              horizontal={true}
              style={{flexDirection: 'row', direction: 'ltr'}}
              showsHorizontalScrollIndicator={false}>
              {arrivals.map(i => {
                return (
                  //   <TouchableOpacity  onPress={()=>{
                  //     navigation.navigate('SingleItemScreen')
                  //  }}>
                  //   <View
                  //     style={{
                  //       height: 200,
                  //       width: 150,
                  //       backgroundColor: 'white',
                  //       borderRadius: 10,
                  //       marginHorizontal: 6,
                  //       alignItems: 'center',
                  //       paddingVertical: 10,
                  //       elevation: 10,

                  //       shadowColor: 'black',
                  //       shadowOffset: {
                  //         width: 0,
                  //         height: 7,
                  //       },
                  //       shadowOpacity: 0.3,
                  //       shadowRadius: 4.5,
                  //     }}>
                  //     <View
                  //       style={{
                  //         height: 120,
                  //         width: 120,
                  //         backgroundColor: 'grey',
                  //         marginBottom: 5,
                  //         borderTopLeftRadius: 10,
                  //         borderTopRightRadius: 10,
                  //       }}>
                  //       <Image
                  //         source={{
                  //           uri: i?.img,
                  //         }}
                  //         style={{
                  //           height: 120,
                  //           width: 120,
                  //           backgroundColor: 'grey',
                  //           borderTopLeftRadius: 10,
                  //           borderTopRightRadius: 10,
                  //         }}
                  //       />
                  //     </View>
                  //     <Text
                  //       numberOfLines={2}
                  //       style={{
                  //         width: 120,
                  //         fontWeight: '500',
                  //         color: 'black',
                  //         alignSelf: 'center',
                  //         textAlign: 'center',
                  //       }}>
                  //       {i.name}
                  //     </Text>
                  //     <Text
                  //       style={{
                  //         color: 'black',
                  //         fontWeight: 'bold',
                  //         margin: 5,
                  //         alignItems: 'center',
                  //       }}>
                  //       {'$ ' + i.price}
                  //     </Text>
                  //   </View>
                  //   </TouchableOpacity>

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
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            paddingLeft: 10,
            color: 'black',
          }}>
          Sections
        </Text>
        <SizedBox height={10} />

        <View style={styles.grid}>
          {imageurls.map(items => {
            return (

              <ShimmerPlaceholder
              style={ {
                height: 160,
                width: 160,
                backgroundColor: 'grey',
                borderRadius: 10,
                marginVertical: 5,
                elevation: 20,
                shadowColor: 'black',
                shadowOffset: {
                  width: -10,
                  height: 10,
                },
                shadowOpacity: 0.28,
                shadowRadius: 5,
              }}

              duration={1000}
              visible={!isLoading}>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProductListScreen',{cat_name: items.category_name});
                }}
                style={styles.sectionCard}>
                <ImageBackground
                  source={{
                    uri: items?.image_url,
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: 20,
                    maxHeight: '100%',
                    maxWidth: '100%',
                  }}
                  imageStyle={{borderRadius: 10}}>
                  <LinearGradient
                    colors={[
                      'transparent',
                      //  '#333945',
                      //   'black',
                      '#1C4B35',
                    ]}
                    style={{
                      height: '100%',
                      width: '100%',
                      opacity: 0.99,
                      borderRadius: 10,
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        paddingHorizontal: 10,
                        fontWeight: '700',
                        color: 'white',
                        textAlign: 'center',
                        alignSelf: 'center',
                        marginBottom: 20,
                      }}>
                      {' '}
                      {items?.category_name}{' '}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
             </ShimmerPlaceholder>
            );
          })}
        </View>
        <SizedBox height={150} />
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  sectionCard: {
    height: 160,
    width: 160,
    backgroundColor: 'grey',
    borderRadius: 10,
    // marginVertical: 5,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowOpacity: 0.28,
    shadowRadius: 5,
  },
  grid: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',

    // gap: 20, /* Gap between grid items */
    // padding: 20,
    // numColumns: 2,
  },
});

// <AdvanceCard
// navigation={navigation}
// image={i.image}
// title={i.title}
// itemId= {i.id}
// price={i.price}
// description={i.description}
// isFetched={isFetched}
// />
