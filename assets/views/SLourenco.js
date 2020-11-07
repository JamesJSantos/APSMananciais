import React from 'react';
import {View,Text, Button} from 'react-native';

export default function SLourenco({navigation}){
    return(

      <View>
            <Text> Tela Sao Lourenço </Text>
            <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}
