import React, {Component} from 'react';  
import {Image, StyleSheet, Text,View,ScrollView} from 'react-native';

class Flexbox extends Component{
    render(){
        return(
            <View style={{marginTop:60}}>
            {/*<View style={{ flexDirection:"row", backgroundColor:"grey", alignItems:"center",justifyContent:"space-between" }}>
                
                <View style={{ backgroundColor: "red",width:50,height:50   }}></View>
                <View style={{ backgroundColor: "green",width:50,height:50   }}></View>
                <View style={{ backgroundColor: "blue",width:50,height:50   }}></View>
                <View style={{ backgroundColor: "yellow",width:50,height:50   }}></View>
        </View>*/}
            <View style={{ flexDirection:"row", justifyContent:"space-around" }}>
                <Text>Home</Text>    
                <Text>Favorites</Text> 
                <Text>For You</Text>
            </View>
         </View>
        );
    }
}

export default Flexbox;