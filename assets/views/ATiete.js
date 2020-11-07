import React from 'react';
import {View,Text, Button} from 'react-native';

export default function ATiete({navigation}){
    return(

      <View>
            <Text> Tela Tiete  </Text>
            <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}
