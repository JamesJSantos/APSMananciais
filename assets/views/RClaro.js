import React from 'react';
import {View,Text, Button} from 'react-native';

export default function Rclaro({navigation}){
    return(

      <View>
            <Text> Tela Rio Claro  </Text>
            <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>

    );
}
