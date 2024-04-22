import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Touchable,
  TouchableOpacity,
  TextInputBase,
  ScrollView,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
} from 'react-native';

const KeyboardAvoidingComponent = ({changeFunction}) => {
  const [username, setUsername] = useState('');
  const [email, setComplaint] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : '0'}
      style={styles.container }>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '112%',
            backgroundColor: 'transparent',
            zIndex: 2,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: Platform.OS === 'ios'? 410:350,
              width: '100%',
              backgroundColor: '#722F37',
              bottom: -23,
              position: 'absolute',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=>{changeFunction()}}>
              <Image
                source={require('../assets/icons/arrow.png')}
                style={{
                  tintColor: 'white',
                  height: 35,
                  width: 35,

                  position: 'relative',
                  top: Platform.OS == 'ios' ? 50 : 10,
                  left: 10,
                  top: 15,
                  marginRight: 60,
                }}
              />
              </TouchableOpacity>
               <Text style={styles.complaint}>Complaint Box </Text>
             
            </View>

            <Text style={styles.tittle}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={text => setUsername(text)}
              value={username}
              keyboardType="email-address"
            />

            <Text style={styles.tittle}>Complaint</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={text => setComplaint(text)}
              value={email}
            />
            <TouchableOpacity
              onPress={() => {
                setComplaint('');
                setUsername('');
              }}
              style={styles.button}>
              <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                Register Complaint
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 99,
    bottom: 20,
    // backgroundColor: "green",
    width: '100%',
    height: '40%',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  complaint: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
  },
  tittle: {
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 50,
    marginVertical: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KeyboardAvoidingComponent;
