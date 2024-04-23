import {
  Image,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const AdvanceCard = ({
  navigation,
  image,
  title,
  itemId,
  price,
  description,
  isFetched,
}) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <TouchableOpacity
      onPress={
        // console.log("Item Screen --------------")
        () =>
        
        navigation.navigate('ItemScreen', {
            image: image,
            name: title,
            price: price,
            itemId: itemId,
            description: description,
          })
      }>
      <View>
        <ShimmerPlaceholder
          duration={2000}
          visible={isFetched}
          style={
            isFetched
              ? {
                  height: 230,
                }
              : {
                  marginHorizontal: 20,
                  height: 200,
                  width: 180,
                  borderRadius: 10,
                  backgroundColor: 'grey',
                }
          }>
          <View style={styles.advanceCard.outerCard}>
            <Image
              source={{
                uri: image,
              }}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'fill',
                borderRadius: 10,
                maxHeight: '100%',
                maxWidth: '100%',
              }}></Image>
          </View>
        </ShimmerPlaceholder>

        <ShimmerPlaceholder
          duration={1500}
          visible={isFetched}
          style={
            isFetched
              ? 
styles.advanceCard.innerCard
              : {
                  height: 80,
                  width: 160,
                  top: 150,

                  left: 32,
                  borderRadius: 15,
                  position: 'absolute',
                  backgroundColor: 'white',
                }
          }>
          <View >
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: 'black',
                height: 38,
                alignSelf: 'center',
                textAlign: 'center',
                overflow: 'hidden',
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              {'$ ' + price}
            </Text>
          </View>
        </ShimmerPlaceholder>
      </View>
    </TouchableOpacity>
  );
};

export default AdvanceCard;

const styles = StyleSheet.create({
  advanceCard: {
    outerCard: {
      shadowColor: 'black',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.95,
      shadowRadius: 5.5,
      elevation: 40,
      marginHorizontal: 20,
      height: 200,
      width: 180,
      borderRadius: 10,
      backgroundColor: 'grey',
    },
    innerCard: {
      height: 80,
      width: 160,
      top: 150,

      left: 32,
      borderRadius: 15,
      position: 'absolute',
      backgroundColor: 'white',
      elevation: 60,

      padding: 10,
      shadowColor: 'black',
      shadowOffset: {
        width: -10,
        height: 20,
      },
      shadowOpacity: 0.28,
      shadowRadius: 10,

      justifyContent: 'space-evenly',
    },
  },
});
