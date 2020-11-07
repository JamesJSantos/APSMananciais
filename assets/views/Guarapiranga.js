import React from 'react';
import {View,Text, Button} from 'react-native';

export default function Guarapiranga({navigation}){
    return(

      <View>
            <Text> Tela Guarapiranga  </Text>
            <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}
