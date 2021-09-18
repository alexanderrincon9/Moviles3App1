import { bold } from 'ansi-colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={Estilos.container}>
        <Text>Bienvenido a mi app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />

        <View>
            <Text style={[Estilos.azulGrande]}>hola</Text>
            <Text style={[Estilos.azulGrande,Estilos.colorRojo]}>App de pruebas</Text>
        </View>
        <View>
          <Button title="Presionar" onPress={()=>Alert.alert('Presiono boton')}></Button>
        </View>
        <View>
          <TextInput>Ingresa</TextInput>
        </View>
    </View>

    
  );
}

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  azulGrande:{
    color:'blue',
    fontWeight:'bold',
    fontSize:50,
  },
  colorRojo:{
    color:'red',
  },
  correoInput:{
    underlineColorAndroid: 'Transparent',
    placeholder:'Email',
    onChangeText: this.handleEmail,
  },
  datoNumerico:{

  },
  alfanumerico:{

  },
  passwordC:{
    underlineColorAndroid: 'Transparent',
    placeholder:'Contraseña',
    placeholderTextColor:'green',
    onChangeText:this.handlePassword,
  },


});


