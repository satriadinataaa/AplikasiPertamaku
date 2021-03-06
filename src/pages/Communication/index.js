import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Cart from '../../components/cart'
import Product from '../../components/Product'

const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0)
    return (
        <View style={styles.container}>
            
            <Product onButtonPressed={()=> setTotalProduct(totalProduct+1)}/>
            <Cart quantity={totalProduct}/>
        </View>
    )
}

export default Communication

const styles = StyleSheet.create({
    container:{
        padding:20
    }
})
