import React, {Component} from 'react';  
import {Image, StyleSheet, Text,View,ScrollView} from 'react-native';
import {Profile} from './pages/Profile';
import {ProfileBG} from './pages/Profile';
import Barang from './pages/Barang';
import Flexbox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
const App = () =>{
  return(
    
    <View>
      
      <ProfileBG/>
      <Profile/>
      
    
      <ScrollView style={{ marginTop:80 }}>
      <PropsDinamis/>
            {/*<StateDinamis/>*/}

      {/*<Barang/>*/}
        <Communication/>
        {/*<Position/>*/}
         
      </ScrollView>
    </View>
   
  );
};

export default App;