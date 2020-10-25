import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity } from 'react-native'
import macbook from '../../assets/images/macbook.jpg';
const Product = (props) => {
    return (
        <View style={styles.wrappper} >
            <Image source={macbook} 
                style={styles.ImageBarang}
            ></Image>
            <Text style={styles.fontTitle} >New Macbook Pro 2019</Text>
            <Text style={styles.Price} >Rp. 25.000.000</Text>
            <Text style={styles.City} >Jakarta Barat</Text>
            <TouchableOpacity onPress={props.onButtonPressed}>
                <View style={styles.Jarak}>
                    <Text style={styles.buttonBeli}>Beli</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    wrappper:{ 
        marginLeft:10,
        padding:12 , 
        backgroundColor:'#F2F2F2',
        width:212,
        borderRadius:8,
        marginTop:10 },
    ImageBarang:{width:188,height:107,borderRadius:8 },
    fontTitle:{ fontSize:14,fontWeight: 'bold', marginTop:16 },
    Price:{fontSize:12,fontWeight: 'bold', color:"#F2994A",marginTop:12},
    City:{ fontSize:12,fontWeight: '300', marginTop:12 },
    Jarak:{ backgroundColor:"#6FCF97",paddingVertical:6,borderRadius:25,marginTop:20},
    buttonBeli:{ fontSize:14,fontWeight:'600',color:'white',textAlign:"center" }
    

})
