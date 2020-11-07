import React, {Component} from 'react';
import {View, Text, Button,Image, ScrollView} from 'react-native';



//class Home extends Component{
export default function Home ({navigation}){
 // render({navigation}){

      return(
        
      <View style={{flex:1,backgroundColor:"#E0FFFF"}}>
        
          <View style={{width:'100%',height:40,backgroundColor:"#00BFFF"}}>
            <Text style={{fontSize:28, textAlign: 'center', }}>
            Sistema de Mananciais
            </Text>
          </View>
          
          <View>
           <Image style={{marginVertical:20,width:150,height:150,alignSelf:'center'}}
            source={require('./assets/image/sabesp.png')}
            />
          </View>
            
        <ScrollView>

            <View style={{marginTop:8, margin:15,}}>
              <Button
                title="Nível Cantareira"
                onPress={() => navigation.navigate('Cantareira')}
                color="#1E90FF"
                textAlign="center"
              />
              </View>

              <View style={{marginTop:2, margin:15}}>
                <Button
                  onPress={() => navigation.navigate('Guarapiranga')}
                  title="Nível Guarapiranga"
                  color="#808080"
                  textAlign="center"
                />
              </View>

              <View style={{marginTop:2, margin:15}}>
                <Button
                  onPress={() => navigation.navigate('Rio Claro')}
                  title="Nível Rio Claro"
                  color="#1E90FF"
                  textAlign="center"
                />
              </View>

              <View style={{marginTop:2, margin:15}}>
                <Button
                  onPress={() => navigation.navigate('Alto Tietê')}
                  title="Nível Alto Tietê"
                  color="#808080"
                  textAlign="center"
                />
              </View>

              <View style={{marginTop:2, margin:15}}>
                <Button
                  onPress={() => navigation.navigate('Cotia')}
                  title="Nível Cotia"
                  color="#1E90FF"
                  textAlign="center"
                />
              </View>

              <View style={{marginTop:1, margin:15}}>
                <Button
                  onPress={() => navigation.navigate('São Lourenço')}
                  title="Nível São Lourenço"
                  color="#808080"
                  textAlign="center"
                />
              </View>

              <View style={{marginTop:1, margin:15}}>
                <Button
                  onPress={() => navigation.navigate('Rio Grande')}
                  title="Nível Rio Grande"
                  color="#1E90FF"
                  textAlign="center"
                />
              </View>

        </ScrollView>
      
      
      
      </View>
      );
  
    }
    
  //}
  