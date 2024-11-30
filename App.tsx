/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
 
  StyleSheet,
  
} from 'react-native';


import ClaimScreen from './src/screens/ClaimScreen';


function App(): React.JSX.Element {
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ClaimScreen />
  </SafeAreaView>
  );
}



export default App;
