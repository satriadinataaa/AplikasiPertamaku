import React, {Component} from 'react';  
import {Image, StyleSheet, Text,View,ScrollView} from 'react-native';

export const Profile = () =>{
    return(
        <View  style={{ height:100, backgroundColor:'#2e5094',marginHorizontal:40,borderRadius:20,marginVertical: -50,padding:10,flexDirection: 'row'}}>
        
          <Image 
                  source={{ uri: 'https://scontent.fplm4-1.fna.fbcdn.net/v/t1.0-9/76675736_3100801629936431_3403251790936801280_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_eui2=AeGhyeoYi44KFjpwuRAyOP_eoNmoDrqTPdqg2agOupM92oxatp4qEutKx7YlDtbagXVzg8629Vt5o93D1bNJHN8t&_nc_ohc=4CKMddqNqEwAX8VzFck&_nc_ht=scontent.fplm4-1.fna&oh=52d34f01751adef5b61704296853b4c4&oe=5FAC7AE8' }}
                  style={{ width:75,height:75,borderRadius:50,marginLeft:10,marginVertical:5}} 
          />
          <View style={{ flexDirection:'column' }}>
          <Text style={{ marginLeft:10,fontSize:18,marginTop:20,color:'white' }}>Satriadinata</Text>
          <Text style={{ marginLeft:10,fontSize:9,color:'white' }}>Saldo: Rp 100.000.000</Text>
          
          </View>
          
      </View>
    );
};
export const ProfileBG = () =>{
    return(
        <View  style={{ height:100, backgroundColor:'#0d1b36' }}></View>
    );
};
//export default Profile;