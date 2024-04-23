import { Image, StyleSheet, Text, View ,TouchableOpacity, Platform} from 'react-native'
import React from 'react'
import Counting from '../Components/Counting '
import { useNavigation } from '@react-navigation/native'


const SingleITemScreen = () => {

const navigation = useNavigation();

  return (
    <View style ={{height: "100%" , width: "100%" , backgroundColor: "#F5F5F5"}}>
       <View style ={{height: "70%" , width: "100%" , backgroundColor: "grey"}}>
       <Image 
                        source={{
                          //  uri: 'https://lh3.googleusercontent.com/proxy/I4O9fSq4Yc0IImGGpHJrvUX-HAqLkbnI75hGL_X7l7UQukhExMMFw0H1FiK6kEilbeXzrYDBHildb3hGfaSAzhbJbgkj5h8D0_b-HAkSTesqoYoFiQ'
                          uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400',
                        }}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          backgroundColor: 'grey',
                          
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
        </View>
        <View style ={{height: "40%" ,marginTop: -30 ,paddingHorizontal: 20 , paddingVertical: 20 ,width :"100%", backgroundColor: "white" , borderRadius: 25 }}>
            <Text style ={{fontSize: 25,color: "black" , fontWeight: "bold"}}>Monago Fruit</Text>
            <View style ={{flexDirection: "row" ,alignItems: "center", marginBottom: 15}}> 
                <Image 
                     source={ require('../assets/star.png')}
                     style = {{height: 20 , width: 20}}
                />
                <Text style ={{fontSize: 12 , color: "grey" ,marginLeft: 10}}>4.5 rating</Text>

            </View>

            <Text numberOfLines={3} style={{fontSize: 12, color: "grey" , marginBottom: 20}}> 
                The fruit is a well known large drupe, but shows a great variation in shape and size. It contains a thick yellow pulp, single seed and thick yellowish – red skin when ripe. The seed is solitary, ovoid or oblong, encased in a hard, compressed fibrous endocarp.
                </Text>

             <Counting/>   

<TouchableOpacity style ={{height: 50,marginVertical: 10 ,marginTop: 20 ,borderRadius: 10 , backgroundColor: "#6DBD5F" , justifyContent: "center" , alignItems: "center"}}>
                    <Text style ={{fontWeight: "800" , fontSize: 18 , color: "white"}}>Add to Cart</Text>
            </TouchableOpacity> 
       </View>
       <TouchableOpacity
         onPress={()=>{navigation.goBack()}
         }
       style={{height: 30 , width: 30 ,justifyContent: "center" , alignItems: "center" ,backgroundColor : "white" , position: "absolute" ,top: Platform.OS === 'ios'? 60 : 25 , left: 30, borderRadius: 10}}>
         <Image source={require("../assets/back.png")}
            style ={{height: 20 , width: 20}}
         />
       </TouchableOpacity>
    </View>
  )
}

export default SingleITemScreen

const styles = StyleSheet.create({})