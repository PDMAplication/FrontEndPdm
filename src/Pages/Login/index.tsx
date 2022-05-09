import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, TextInput, View,StyleSheet, Text, Image } from 'react-native';
import acessaBackend from '../../api/axios';


interface IResponse{
  status: string;
}
export const Login: React.FC = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [status, setStatus]= useState('');
const handleLogar = async () => {
const data ={
  email,
  password
}

  const response = await acessaBackend.post('loginsimples',data);
  const {status} = response.data as IResponse;
  if(status === 'error'){
    setStatus('Erro: acesso negado');
  }else{
    setStatus('logado');
  }
}

  return (
  
  <View style={styles.container}>
   <Image style={styles.logo} source={require('../../../assets/singIn.png')} />
    <TextInput 
      style={styles.input}
      placeholder="   E-mail"
      value={email}
      onChangeText={setEmail}
    />
     <TextInput 
      style={styles.input}
      placeholder="   Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
    />
    <Button title="logar" onPress={handleLogar}/>

    <Text>{status}</Text>
    <Text style={styles.text}>Não possui conta?</Text>
    <Link style={styles.link} to="/Cadastro/">Cadastro-se</Link>
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


