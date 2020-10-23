import React, {useState,Component} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Counter = () => {
    const [angka, setAngka] = useState(0)
    return(
        <View>
             <Text>{angka}</Text>
            <View style={{ flexDirection:'column'  }}>
                <Button title="Tambah"  onPress={()=> setAngka(angka+1)}/>
                <Text style={{ marginTop:1 }}></Text>
                <Button title="Kurang"  color="#b30b0b" onPress={()=> setAngka(angka-1)}/>
            </View>
        </View>
    )
}

class CounterClass extends Component{
    state={
        number : 0
    }
    render(){
        return(
            <View>
            <Text style={styles.judulText}>{this.state.number}</Text>
            <View style={{ flexDirection:'column' }}>
                <Button title="Tambah" onPress={()=> this.setState({
                number: this.state.number +1
            })}/>
            <Text style={{ marginTop:1 }}></Text>
                <Button title="Kurang" color="#b30b0b" onPress={()=> this.setState({
                number: this.state.number -1
            })}/>
            </View>
          
           
       </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Dynamic State</Text>
            <Counter/>
            <CounterClass/>
        </View>
    )
}

export default StateDinamis

const styles = StyleSheet.create({
    wrapper:{
        padding:20
    },
    textTitle:{
        textAlign:"center"
    },
    judulText:{
        marginTop:20
    }
})
