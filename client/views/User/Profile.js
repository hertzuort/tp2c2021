import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Loader} from "../Components/Loader/Loader";

export default function Profile({ navigation }) {
    const SERVER_URL = "http://localhost:3001";

    const [info, setInfo] = React.useState();

    React.useEffect(() => {
        fetch(`${SERVER_URL}/api/users/6259b5848de6a57670adb45b`)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => setInfo(respuestaJson))
            .catch(error => {
                console.error(error);
            });
    }, [info]);

    return (
        <>
            {
                info ?
                    <View style={styles.container}>
                        <Text style={{ marginTop: 10, alignSelf: 'center', fontWeight: 'bold', fontSize: 20 }}>Perfil</Text>
                        <View style={{
                            marginHorizontal: 20,
                            marginTop: 20,
                            paddingVertical: 40,
                            shadowColor: 'gray',
                            shadowOpacity: 0.5,
                            shadowOffset: {
                                height: 3,
                                width: 3
                            },
                            shadowRadius: 4,
                            elevation: 4,
                            backgroundColor: 'white',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={styles.prefix}>Nombre: {info.nombre}</Text>
                                <Text style={styles.content}></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={styles.prefix}>Apellido: {info.apellido}</Text>
                                <Text style={styles.content}></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={styles.prefix}>Email: {info.mail}</Text>
                                <Text style={styles.content}></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 15 }} >
                                <Text onPress={() => navigation.goBack()} >Go back</Text>
                            </View>
                        </View>
                    </View> :
                    <Loader />
            }
        </>
      );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea",
    },
    title: {
      flex: 3,
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
    photo: {
      flex: 2,
      height: 200,
      resizeMode: "center",
      margin: 5,
    },
});
