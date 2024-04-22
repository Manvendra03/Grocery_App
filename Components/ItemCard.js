import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ItemCard = ({
  navigation,
  itemImage,
  itemPrice,
  itemName,
  itemId,
  itemDesc,
  isFetched,
}) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        // props.navigation.navigate(ItemScreen, {
        navigation.navigate('ItemScreen', {
          image: itemImage,
          name: itemName,
          price: itemPrice,
          itemId: itemId,
          description: itemDesc,
        })
      }>
      <View style={{alignItems: 'center'}}>
        <ShimmerPlaceholder
          style={
            isFetched?{
              borderRadius: 7
            }:{
              marginBottom: 10,
              height: 170,
              marginHorizontal: 10,
              elevation: 20,
              width: 150,
              borderRadius: 10,
              backgroundColor: '#DAE0E2',
            }
          }
          duration={2000}
          visible={isFetched}>
          <View style={styles.itemCard}>
            <Image
              source={{uri: itemImage}}
              style={{height: '100%', width: '100%', borderRadius: 10}}
            />
          </View>
        </ShimmerPlaceholder>

        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'black',
            height: 35,
            width: 100,
            alignSelf: 'center',
            textAlign: 'center',
            overflow: 'hidden',
          }}>
          {itemName}
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            margin: 5,
            alignItems: 'center',
          }}>
          {'$ ' + itemPrice}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  itemCard: {
    marginBottom: 10,
    height: 170,

    shadowColor: 'black',
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowOpacity: 0.28,
    shadowRadius: 2.5,

    marginHorizontal: 10,
    elevation: 20,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#DAE0E2',
  },
});
