import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './assets/views/Home';
import Cantareira from './assets/views/Cantareira';
import Guarapiranga from './assets/views/Guarapiranga';
import RClaro from './assets/views/RClaro';
import ATiete from './assets/views/ATiete';
import Cotia from './assets/views/Cotia';
import SLourenco from './assets/views/SLourenco';
import RGrande from './assets/views/RGrande';



const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      

        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cantareira" component={Cantareira}/>
        <Stack.Screen name="Guarapiranga" component={Guarapiranga}/>
        <Stack.Screen name="Rio Claro" component={RClaro}/>
        <Stack.Screen name="Alto Tietê" component={ATiete}/>
        <Stack.Screen name="Cotia" component={Cotia}/>
        <Stack.Screen name="São Lourenço" component={SLourenco}/>
        <Stack.Screen name="Rio Grande" component={RGrande}/>



      </Stack.Navigator>
    </NavigationContainer>

  );
}