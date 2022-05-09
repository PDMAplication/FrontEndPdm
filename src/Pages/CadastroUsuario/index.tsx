import React, {useState} from 'react';
import {View, StyleSheet, Alert, Image} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {TextInputMask,TextInputMasked} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useForm, Controller} from'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {InputForm} from '../../components/InputForm';
import validationYup from '../../utils/validationYup';


interface FormData{
  email:string;
  cpf:string;
  nome:string;
  senha:string;
}

export const Cadastro: React.FC = () => {
    const {
      control, 
      handleSubmit,
      formState: { errors } 
    } = useForm({
      resolver:yupResolver(validationYup)
    });

  const salvar = (formData:FormData) => {
    Alert.alert(
      'Success',
      `${formData.email} ${formData.cpf} ${formData.nome}`,
      [{text: 'ok'}],
    );
  };
  return (
    <View style={styles.Container}>
      <Image style={styles.logo} source={require('../../../assets/register.png')} />
      <InputForm style={styles.Input}
        name="email"
        control={control}
        placeholder="  E-mail"
        keyboardType="email-address"
        error={errors.email? errors.email.message :''}
      />

      <InputForm style={styles.Input}
        name="nome"
        control={control}
        placeholder="  Nome"
        error={errors.nome? errors.nome.message :''}
      />
      
      <InputForm style={styles.Input}
        name="senha"
        control={control}
        placeholder="  Senha"
        error={errors.senha? errors.senha.message :''}
      />

      <Controller
          control={control}
          render={({field:{onChange, onBlur,value}})=>(
            <View style={styles.containerMask}>
              <TextInputMask 
                placeholder="                  cpf"
                type={'cpf'}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="number-pad"
                style={styles.maskedInput}        
              />
            </View>
          )}
          name="cpf"
        />
      {
        errors.cpf && (
          <View style={{marginVertical:10}}>
              <Text style={{color:'red'}}>{errors.cpf.message}</Text>
          </View>
        )
      }
      <Button 
        title="Register"
        icon={<Icon name="check" size={15} color="white"/>}
        iconRight
        onPress={handleSubmit(salvar)}
        titleStyle={{marginHorizontal:30}}
        buttonStyle={{marginTop:50, marginHorizontal:30}}
      />
     </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#9370DB',
  },
  containerMask: {
    height:55,
    width:380,
    borderRadius:20,
    borderWidth:1,
    marginBottom:20,
    backgroundColor:'#fff',
  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#f00',
    fontSize: 12,
  },
  logo:{
    height:60,
    width:300,
    marginBottom:20,
  },
  maskedInput: {
    flex: 1,
    fontSize: 20,
    height:54,
    width:300,
    borderBottomColor: '#fff',
    borderStyle: 'solid',
    textAlign:'center',
  },
  Input:{
    height:54,
    width:200,
    fontSize:20,
    borderRadius:20,
    borderWidth:1,
    marginBottom:10,
    backgroundColor:'#fff',
    textAlign:'center',
  },
 
});
