import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, TextInput, View,StyleSheet, Text, Image } from 'react-native';
import acessaBackend from '../../api/axios';


interface IResponse{
  status: string;
}
export const Home: React.FC = () => {


  return (
  
  <View style={styles.container}>
   <Image style={styles.logo} source={require('../../../assets/cat.png')} />
  </View>
  
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'#9370DB',
  
  },
 
  input:{
    height:54,
    width:300,
    fontSize:20,
    borderRadius:20,
    borderWidth:1,
    marginBottom:10,
    backgroundColor:'#fff',
  },
  logo:{
    height:50,
    width:200,
    marginBottom:20,
  },
  text:{
    fontSize:30,
  },
  link:{
    fontSize:25,
    color:'#7CFC00',

  }
})


