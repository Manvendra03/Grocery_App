import { StyleSheet, Text, View ,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileOptions = (
    {image,tittle}) => {
  return (
<View >
    <TouchableOpacity  onPress={()=>{}}    style ={{height: 40  ,marginHorizontal: 5 , marginLeft: 35 , flexDirection:"row" , alignItems:"center" } }>
        
    <Image
          source={image}
          style={{tintColor:"grey", height: 15, width:15, }}
        />
    <View style ={{width :10}} />
      <Text style ={{fontSize: 16, fontWeight:"500" , color: "black"}}>{tittle}</Text>
    </TouchableOpacity> 
     <View style = {{backgroundColor: "grey" , height: 1.5, width: "85%" , alignSelf: "center" ,position: "relative" ,opacity: .4 ,marginBottom: 20 } } ></View> 
   </View>
  )
}

export default ProfileOptions

const styles = StyleSheet.create({})