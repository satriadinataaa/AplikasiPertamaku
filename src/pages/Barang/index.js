import React, {Component} from 'react';  
import {Image, StyleSheet, Text,View,ScrollView} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';
const Barang = () =>{
    return(
        <View style={{ 
            marginLeft:10,
            padding:12 , 
            backgroundColor:'#F2F2F2',
            width:212,
            borderRadius:8,
            marginTop:10 }} >
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
    );
};
export default Barang;