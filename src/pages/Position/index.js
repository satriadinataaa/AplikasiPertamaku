import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import cart from '../../assets/icons/cart.png';
const Position = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}/>
                <Text style={styles.notif}>12</Text>
            </View>
            <Text style={styles.TextBelanja}>Keranjang Belanja Anda</Text>
        </View>
    )
}

export default Position

const styles = StyleSheet.create({
    notif:{
        fontSize:12,
        color:"white",
        backgroundColor:"#6FCF97",
        borderRadius:25,
        height:24,
        width:24,
        padding:4,
        position:"absolute",
        top:0,
        right:0


    },
    TextBelanja:{
        fontSize:12,
        color:'#777777',
        fontWeight:'700',
        marginTop:8
    },
    wrapper:{
        padding:20,
        alignItems:"center"
    },
    iconCart: {
        width:50,
        height:50
    },
    cartWrapper:{
        position:"relative",
        borderWidth:1,
        borderColor:'#439801',
        width:93,
        height:93,
        borderRadius:93/2,
        justifyContent:"center",
        alignItems:"center"
    }
});
