import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import SizedBox from '../Components/SizedBox';
import LinearGradient from 'react-native-linear-gradient';
import Counting from '../Components/Counting ';
import {useNavigation} from '@react-navigation/native';
import {addItemToCart} from '../Data/MyCartItems';

const ItemScreen = ({navigation, route}) => {
  // const navigation = useNavigation();

  const [seeAll, set] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{zIndex: 2}}>
        <Image
          source={require('../assets/icons/arrow.png')}
          style={{
            tintColor: 'black',
            height: 45,
            width: 45,
            position: 'absolute',
            top: Platform.OS == 'ios' ? 50 : 10,
            left: 10,
            zIndex: 2,
          }}
        />
      </TouchableOpacity>
      <View style={{height: '70%'}}>
        <ImageBackground
          source={{
            uri: route.params.image,
          }}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'fill',
            maxHeight: '100%',
            maxWidth: '100%',
          }}>
          <LinearGradient
            colors={['grey', 'black', 'black']}
            style={{
              height: '100%',
              width: '100%',
              opacity: 0.6,
            }}></LinearGradient>
        </ImageBackground>
      </View>
      <View style={[styles.detailsCard, {height: seeAll ? '50%' : '40%'}]}>
        <Text style={styles.tittle}> {route?.params?.name} </Text>
        {/* <Text style={styles.tittle}> {name} </Text> */}

        <Text style={styles.tittle}> {'$ ' + route?.params?.price}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
            Colors :{' '}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'red',
              borderRadius: 12,
              marginLeft: 10,
            }}
          />
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'orange',
              borderRadius: 12,
              marginLeft: 15,
            }}
          />
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'pink',
              borderRadius: 12,
              marginLeft: 15,
            }}
          />
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'tomato',
              borderRadius: 12,
              marginLeft: 15,
            }}
          />
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'grey',
              borderRadius: 12,
              marginLeft: 15,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            set(!seeAll);
          }}>
          <Text style={[styles.description, {height: seeAll ? 150 : 70}]}>
            {route.params.description}
          </Text>
        </TouchableOpacity>

        <Counting />
        <TouchableOpacity
          onPress={() => {
 
           addItemToCart({

              image: route.params.image,
              title: route?.params?.name,
              price: route?.params?.price,
              description: route?.params?.description,
              id: route?.params?.itemId,  
            });
          }}
          style={[
            styles.button,
            {backgroundColor: route.params.isCart ? 'green' : '#333945'},
          ]}>
          <View>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              {route.params.isCart ? 'Buy Now' : 'Add To Cart'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  detailsCard: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,

    paddingTop: 10,
    width: '100%',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#DAE0E2',
    position: 'absolute',
    bottom: 0,
  },

  tittle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    textOverflow: 'ellipsis',
    overlayColor: 'black',
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#333945',
    marginTop: 10,
    // position: "absolute",
    bottom: 4,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
