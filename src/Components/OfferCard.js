import { StyleSheet, Text, Touchable, TouchableOpacity, View,Image } from 'react-native'

import React from 'react'
import SizedBox from './SizedBox'
import { SliderBox } from "react-native-image-slider-box";


const OfferCard = () => {
 const imagess = [
  require("../assets/slider/sl1.jpg")
  ,require("../assets/slider/sl2.jpeg")  
  ,require("../assets/slider/sl3.png")   
  ,require("../assets/slider/sl4.jpg")  
  ,require("../assets/slider/sl5.jpg")   
  // Network image 
  ]

  return (
    <View >
    {/* <View style = {styles.offerCard}>
           
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
      </View> */}
     <SliderBox
  // ImageComponent={imagess}
  images={imagess}
  sliderBoxHeight={200}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#009746"
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'cover'}
  autoplayInterval = {2000}
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
  imageLoadingColor="#2196F3"
/>
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