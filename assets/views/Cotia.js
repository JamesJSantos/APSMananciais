import React from 'react';
import {View,Text, Button} from 'react-native';

export default function Cotia({navigation}){
    return(

      <View>
            <Text> Tela Cotia  </Text>
            <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}
