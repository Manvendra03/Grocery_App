import {StyleSheet,} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from './src/Navigation/MainNavigation';

const MyApp = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <MainNavigation/>
    </SafeAreaView>
  );
};

export default MyApp;

const styles = StyleSheet.create({});
