import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SERVER_URL = "http://localhost:3001";

export default function App() {

  const [mensaje, setMensaje] = React.useState(null);

  React.useEffect(() => {
    fetch(`${SERVER_URL}/api`)
      .then(respuesta => respuesta.json())
      .then(respuestaJson => setTimeout(() => setMensaje(respuestaJson.mensaje), 2000))
      .catch(error => {
        setMensaje("Hubo un error al obtener el mensaje del servidor.");
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{!mensaje ? "Cargando mensaje del servidor..." : mensaje}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
