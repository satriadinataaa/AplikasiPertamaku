import React, {Component} from 'react';  
import {Image, StyleSheet, Text,View,ScrollView} from 'react-native';
import {Profile} from './pages/Profile';
import {ProfileBG} from './pages/Profile';
import Barang from './pages/Barang';
import Flexbox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
const App = () =>{
  return(
    
    <View>
      
      <ProfileBG/>
      <Profile/>
      
    
      <ScrollView style={{ marginTop:60, marginBottom:50 }}>
      <PropsDinamis/>
      <StateDinamis/>
        <Barang/>
        
        <Position/>
         <Flexbox />
      </ScrollView>
    </View>
   
  );
};

export default App;