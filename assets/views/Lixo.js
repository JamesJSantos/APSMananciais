import React from 'react';
import {View,Text, Button} from 'react-native';
import Guarapiranga from './Guarapiranga'

export default function Home({navigation}){
    return(

      <View>
            <Text> Tela Home </Text>
            <Button
            title="Guarapiranga"
            onPress={() => navigation.navigate('Guarapiranga')}
            />
        </View>

    );
}


            <View>
            
            <Image style={{marginVertical:20,width:150,height:150,alignSelf:'center'}}
            source={require('./assets/image/sabesp.png')}
            />
            </View>
          
          