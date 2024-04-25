import {StyleSheet, Text, View,TextInput, Platform} from 'react-native';
import React from 'react';

const MyTextInput = ({style,placeholder,inputMode,maxLength,secureTextEntry,variable, editable,setVariable , obsecureText}) => {
  return (
      <TextInput
        cursorColor={'black'}
        selectionColor={'black'}
        placeholder={placeholder ?? ''} 
        editable ={editable ?? true}
        inputMode= {inputMode??'default'}
        secureTextEntry={obsecureText??false}
        onChangeText={(text)=>{
          setVariable(text)
        }}
        maxLength={maxLength}
        // secureTextEntry ={secureTextEntry??'false'}
        numberOfLines={1}
        style={[
            {
                width: '100%',
                borderWidth: 2,
                borderRadius: 5,
                // borderColor: "#DBF7D3",
                borderColor: '#6DBD5F',
                fontSize: 15,
                fontWeight: 'normal',
                paddingHorizontal: 10,
                paddingVertical: Platform.OS === 'ios'? 10:7,
                alignSelf: "center",
                color: 'black',
                marginVertical: 5,
              },
              style
        ]}
      />
  );
};

export default MyTextInput;

const styles = StyleSheet.create({});
