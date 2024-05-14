import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewItemCard = ({image_url,name,price,id}) => {
  const navigation = useNavigation();

  
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SingleItemScreen', {item_id: id});
      }}>
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
              uri: image_url,
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
          {name}
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            margin: 5,
            alignItems: 'center',
          }}>
          $ {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewItemCard;

const styles = StyleSheet.create({});
