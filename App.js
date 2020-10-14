import React, {Component} from 'react';  
import {Image, StyleSheet, Text,View} from 'react-native';


const App = () =>{
  return(
    <View>
      <Text>Satria</Text>
      <Dinata/>
      <Photo/>
      <BoxGreen/>
    </View>
  );
};

const Dinata =()=>{
  return <Text>Dinata</Text>;
};

const Photo =()=>{
  return(
      <Image 
              source={{ uri: 'http://placeimg.com/100/100/tech' }}
              style={{ width:100,height:100 }} 
      />
  );
};

const style = StyleSheet.create({
  text:{
    fontWeight: 'bold',
    fontSize: 18
  },
});
class BoxGreen extends Component{
    render(){
      return(
        <Text>Halo</Text>
      );
    }
}

export default App;