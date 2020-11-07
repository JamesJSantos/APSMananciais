import React from 'react';
import {View,Text, Button} from 'react-native';

export default function Cantareira({navigation}){
    return(

      <View>
            <Text> Tela Cantareira  </Text>
            <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}
