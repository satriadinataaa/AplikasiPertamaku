import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';


const Story = (props) =>{
    return(
        <View style={{ alignItems:"center",marginRight:20 }}>
            <Image
                source={{
                uri: props.Image,
                    
                }}
                style={{width: 60, height: 60, borderRadius:60/2}}
            />
            <Text style={{ maxWidth:70,textAlign:'center' }}>{props.name}</Text>
        </View>
    );
};

const PropsDinamis = () => {
  return (
    <ScrollView horizontal>
        <View style={{ flexDirection:'row' }}>
            <Story name="Satria" Image="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/121034814_3165949766848556_1379219579011606484_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=Tb37Ic4zkdAAX83qvtI&oh=c3580a5c4d42f595cebcb972bc3c112a&oe=5FBBDD75"/>
            <Story name="Atan" Image="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/121716650_795413804627874_7420160929239428412_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=_fEuxlGEa7EAX88hf2v&oh=b5aaaaebbc6a27f1a5b571f0b3dc42e2&oe=5FBCE0B8"/>
            <Story name="akujuara.id" Image="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/121739108_386556839421096_3437349220583297653_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=wu9iX8-xsnUAX92iuPH&oh=f9eabea14d5c4476341e28c4d4825f79&oe=5FBAC2F2"/>
            <Story name="billy" Image="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/120217682_373217300730049_2233195975049417051_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=_jJYzy4ws1kAX9IPyl0&oh=91b5941fb6739305247737319170a8a0&oe=5FBC7B12"/>
            <Story name="bwa" Image="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/117433132_243995179961570_1655394567354609851_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=j_BPVVDIO-AAX9YeXmL&oh=4c789305204f03141aab16d34ff5fcac&oe=5FBC9082"/>
            <Story name="faizsadad" Image="https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s150x150/104467094_308345673523355_6513937640844175973_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_ohc=D2fPGvOJkrIAX8OovAI&oh=027d9f3c22bf02b2ed9aa638b477b397&oe=5FBB8034"/>
        </View>
    </ScrollView>
   
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
