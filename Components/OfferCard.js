import { StyleSheet, Text, Touchable, TouchableOpacity, View,Image } from 'react-native'

import React from 'react'
import SizedBox from './SizedBox'

const OfferCard = () => {
  return (
    <View style = {{flexDirection :'row'}}>
    <View style = {styles.offerCard}>
           
    <Text style ={{ fontWeight :"bold" , fontSize: 18 , color : "#DAE0E2"}}>
      Dec 16- Dec31
    </Text>

    <Text style ={{ fontWeight :"bold",width: 150 , fontSize: 18 , color : "#DAE0E2"}}>
      30 % OFF
    </Text>

    <Text style ={{ fontWeight :"bold" , fontSize: 13 , color : "#DAE0E2"}}>
      Super Discount
    </Text>
    <SizedBox height={10}/>
    <TouchableOpacity style = {{backgroundColor: "#192B25", width: 100, paddingVertical: 7, paddingHorizontal: 6 , borderRadius: 20 , alignItems: "center"}}>
     <Text style ={{ fontWeight :"bold" , fontSize: 15 , color : "#DAE0E2"}}>Avail Now</Text>
    </TouchableOpacity>

    </View>
     <View> 
     <Image
     source={require('../assets/shopping.png') }
     style ={{height: 140 , width: 200 ,position: "absolute" , bottom: 0 ,right: 0 , objectFit: "contain"}} 
     />
      </View>
</View>
  )
}

export default OfferCard

const styles = StyleSheet.create({
    offerCard: {
        justifyContent : 'space-evenly', 
        paddingVertical : 10,
        paddingHorizontal:20,
        height : 150,
        width: "100%",
        
        // elevation: 5,
        borderRadius: 20,
        shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.5,
            // backgroundColor: "#47535E"
            backgroundColor : "#6DBD5F",
      }
})