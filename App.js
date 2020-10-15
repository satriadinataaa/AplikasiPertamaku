import React, {Component} from 'react';  
import {Image, StyleSheet, Text,View,ScrollView} from 'react-native';
import macbook from './macbook.jpg';

const App = () =>{
  return(
    
    <View>
      
      <View  style={{ height:100, backgroundColor:'#0d1b36' }}></View>
      <View  style={{ height:100, backgroundColor:'#2e5094', marginHorizontal:40,borderRadius:20,marginVertical: -50,padding:10,flexDirection: 'row'}}>
        
          <Image 
                  source={{ uri: 'https://scontent.fplm4-1.fna.fbcdn.net/v/t1.0-9/76675736_3100801629936431_3403251790936801280_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_eui2=AeGhyeoYi44KFjpwuRAyOP_eoNmoDrqTPdqg2agOupM92oxatp4qEutKx7YlDtbagXVzg8629Vt5o93D1bNJHN8t&_nc_ohc=4CKMddqNqEwAX8VzFck&_nc_ht=scontent.fplm4-1.fna&oh=52d34f01751adef5b61704296853b4c4&oe=5FAC7AE8' }}
                  style={{ width:75,height:75,borderRadius:50,marginLeft:10,marginVertical:5}} 
          />
          <View style={{ flexDirection:'column' }}>
          <Text style={{ marginLeft:10,fontSize:18,marginTop:20,color:'white' }}>Satriadinata</Text>
          <Text style={{ marginLeft:10,fontSize:9,color:'white' }}>Saldo: Rp 100.000.000</Text>
          
          </View>
          
      </View>
      <ScrollView style={{marginTop:60}}>
        <View style={{ 
                   marginLeft:10,
                   padding:12 , 
                   backgroundColor:'#F2F2F2',
                   width:212,
                   borderRadius:8 }} >
          <Image source={macbook} 
                  style={{width:188,height:107,borderRadius:8 }}
                  ></Image>
          <Text style={{ fontSize:14,fontWeight: 'bold', marginTop:16 }} >New Macbook Pro 2019</Text>
          <Text style={{ fontSize:12,fontWeight: 'bold', color:"#F2994A",marginTop:12 }} >Rp. 25.000.000</Text>
          <Text style={{ fontSize:12,fontWeight: '300', marginTop:12 }} >Jakarta Barat</Text>
          <View style={{ backgroundColor:"#6FCF97",paddingVertical:6,borderRadius:25,marginTop:20}}>
            <Text style={{ fontSize:14,fontWeight:'600',color:'white',textAlign:"center" }}>Beli</Text>
          </View>
        </View>
      </ScrollView>
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