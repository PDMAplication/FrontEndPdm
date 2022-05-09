import React from 'react';
import { StyleSheet, SafeAreaView,Text } from 'react-native';
import { Login } from './src/Pages/Login/index';
import { Cadastro } from './src/Pages/CadastroUsuario';
import  Routes  from './src/Routes/Routes';


export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
      {/*<Cadastro/>*/ }
      {/*<Login/>*/}
      {/* <ValidationManual/> */}
      {/* <Validation2 /> */}
     {/*  <ValidationFormik /> */}
     {/*<ValidationReactHookForm />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
