import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import SizedBox from '../Components/SizedBox';
import AdvanceCard from '../Components/AdvanceCard';
import {delay} from './HomeScreen';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
const CategoryScreen = ({navigation}) => {
  const [isFetched, setFetched] = useState(false);

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

  const [advanceList, setAdvanceList] = useState([]);

  const getAdvanceList = async () => {
    try {
      var response = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing",
      );

      let arr = response.data;

      setAdvanceList(arr);

      await delay(1500);
      setFetched(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAdvanceList();
  }, []);

  return (
    <View >
       <View style= {{height: Platform.OS === 'ios'? 80:50 , backgroundColor: "#009746"}}></View>
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
              {advanceList.map(i => {
                return (
                  <View
                    style={{
                      height: 200,
                      width: 150,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginHorizontal: 6,
                      alignItems: 'center',
                      paddingVertical: 10,
                      elevation: 10,

                      shadowColor: 'black',
                      shadowOffset: {
                        width: 0,
                        height: 7,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.5,
                    }}>
                    <View
                      style={{
                        height: 120,
                        width: 120,
                        backgroundColor: 'grey',
                        marginBottom: 5,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}>
                      <Image
                        source={{
                          uri: 'https://lh3.googleusercontent.com/proxy/I4O9fSq4Yc0IImGGpHJrvUX-HAqLkbnI75hGL_X7l7UQukhExMMFw0H1FiK6kEilbeXzrYDBHildb3hGfaSAzhbJbgkj5h8D0_b-HAkSTesqoYoFiQ',
                        }}
                        style={{
                          height: 120,
                          width: 120,
                          backgroundColor: 'grey',
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                    </View>
                    <Text
                      numberOfLines={2}
                      style={{
                        width: 120,
                        fontWeight: '500',
                        color: 'black',
                        alignSelf: 'center',
                        textAlign: 'center',
                      }}>
                      Mustard Oil
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        margin: 5,
                        alignItems: 'center',
                      }}>
                      {'$ ' + 20}
                    </Text>
                  </View>
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
              <View style={styles.sectionCard}>
                <ImageBackground
                  source={{
                    uri: items?.img,
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
                    colors={
                      ['transparent',
                    //  '#333945',
                    //   'black', 
                      '#1C4B35',
                    ]
                  }
                    style={{
                      height: '100%',
                      width: '100%',
                      opacity: 0.99,
                      borderRadius: 10,
                      justifyContent: 'flex-end',
                    }}>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'white',
                        alignSelf: 'center',
                        marginBottom: 20,
                      }}>
                      {' '}
                      {items?.name}{' '}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            );
          })}
        </View>
        <SizedBox height={100} />
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
    marginVertical: 5,
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
