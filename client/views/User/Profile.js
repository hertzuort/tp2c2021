import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Profile({ navigation }) {
    return (
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
              <Text style={styles.prefix}>Nombre:</Text>
              <Text style={styles.content}></Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.prefix}>Apellido:</Text>
              <Text style={styles.content}></Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={styles.prefix}>Email:</Text>
              <Text style={styles.content}></Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }} >
      <Text onPress={() => navigation.goBack()} >Go back</Text>
          </View>
      </View>
  </View>
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