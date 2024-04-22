import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import SizedBox from '../Components/SizedBox';
import KeyboardAvoidingComponent from './KeyboardAvoidingComponent';

const ContactUsScreen = ( {route}) => {
   const [show, setShow] = useState(false);
   
   function changeShowMode() 
   {
    setShow(!show);

   }

   useEffect(() => {
    temp = !show;
    route.params.bottobBarHideFunction(temp);
  }, [show]);

   return (
    <View style={styles.container}>
      <SizedBox height={30} />
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xNAxJRTaNu3gRuc24Cr75DS64KjsaccxxodCyzS-WQ&s',
        }} // Placeholder image URL
        style={styles.image}
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Introducing our cutting-edge eCommerce app, designed to revolutionize
        your online shopping experience. With seamless functionality and a
        user-friendly interface, our app brings the world of retail to your
        fingertips like never before. Browse through an extensive catalogue of
        products spanning various categories, from fashion and electronics to
        home decor and beyond. Our intuitive search and filter options ensure
        you can easily find exactly what you're looking for, while personalized
        recommendations cater to your unique preferences and interests.
      </Text>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => {  
          setShow(true);
        }}
        >
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Contact Us
          </Text>
        </View>
      </TouchableOpacity>

      {/* <HelpComponent /> */}
      {show? <KeyboardAvoidingComponent  changeFunction = {changeShowMode}/>: <View/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingHorizontal: 20,
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    marginBottom: 20,
    color: 'grey',
    textAlign: 'center',
  },
  social: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7B0323',
    marginTop: 10,
    // position: "absolute",
    bottom: 4,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default ContactUsScreen;
