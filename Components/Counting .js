import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'



const Counting  = () => {


    const add = ()=> {
        setCount(count+1);
    }
    

let [count, setCount] = useState(1);

    const sub = ()=> {

        if(count == 0 )
         {
             return;
         }
         else
         {
            setCount(count-1);
         }
    }

    return (
    <View flexDirection = 'row' width = {100} > 
        <TouchableOpacity onPress={add}>
       <View style ={styles.addButton}>
        <Text style = {{ fontWeight :"bold" , fontSize: 16 , color : "white" , alignSelf: "center" ,}} >+</Text>
       </View>
       </TouchableOpacity>
        <Text style = {{ fontWeight :"bold" , fontSize: 18 , color : "black" ,marginRight: 15}} >{count}</Text>
        
        
        <TouchableOpacity onPress={sub}>
        <View style ={styles.addButton}>
        <Text style = {{ fontWeight :"bold" , fontSize: 18 , color : "white" , alignSelf: "center" ,}}>-</Text>
        </View>
        </TouchableOpacity>
      </View>
  )
}

export default Counting 

const styles = StyleSheet.create({

    addButton : {height : 22 , width: 22 , backgroundColor: 'green' ,borderRadius : 5 , justifyContent: "center" , alignItems: "center",marginRight: 15}
   
})