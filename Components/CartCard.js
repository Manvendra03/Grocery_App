import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Counting from './Counting ';

const CartCard = props => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('ItemScreen', {
          image: props.image,
          name: props.tittle,
          price: props.price,
          itemId: props.itemId,
          description: props.description,
          isCart: true,
        })
      }>
      <View style={styles.cart}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: props.image,
            }}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 10,
              objectFit: 'fill',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-evenly',
            height: '100%',
            paddingLeft: 12,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 14,
              color: 'black',
              height: 38,
              width: 210,
              overflow: 'hidden',
            }}>
            {/* {props.tittle} */}
            This is title of productThis is title of product
          </Text>
          <Text style={{fontWeight: '700', fontSize: 18, color: 'black'}}>
            {'$ ' + props.price}
          </Text>
          <Counting />

          <TouchableOpacity
            style={{
              height: 37,
              width: 120,
              backgroundColor: '#333A73',
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: '600', fontSize: 15, color: 'white'}}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cart: {
    shadowColor: 'black',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.5,

    elevation: 5,
    marginVertical: 10,
    padding: 10,
    height: 170,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },

  imageContainer: {
    height: '100%',
    width: 130,
    backgroundColor: '#333A73',
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: -3,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.5,
  },
});
