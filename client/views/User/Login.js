import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useState } from "react/cjs/react.development";
const SERVER_URL = "http://localhost:3001";

  export default function LoginScreen({ navigation }) {
    function login() {
      navigation.navigate('Posts');
    }

    function register() {
      navigation.navigate('Signup');
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onPress() {
      try {
        validateLogin();
        const rawResponse = await fetch(`${SERVER_URL}/api/users/login`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mail: email, contraseña: password })
        });
        const content = await rawResponse.json();
        await sessionStorage.setItem('user-token', content.accessToken);
        login();
      } catch (e) {
        console.log(e.message)
      }
    }

    function validateLogin() {
      if (email == '' || password == '') throw new Error('Debe ingresar sus datos de login');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ORTwit</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}  onPress={async () => onPress()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signBtn} onPress={() => register()}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#178bff",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#d0d7e8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
    borderColor: "transparent",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#178bff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signBtn: {
    width: "80%",
    backgroundColor: "#178bff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});