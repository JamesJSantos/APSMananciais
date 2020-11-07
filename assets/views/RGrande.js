import React from 'react';
import {View,Text, Button} from 'react-native';

export default function RGrande({navigation}){
    return(

      <View>
            <Text> Tela Rio Grande  </Text>
            <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}
