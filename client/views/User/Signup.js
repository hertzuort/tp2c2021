import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import {useState} from "react/cjs/react.development";

export default function LoginScreen({navigation}) {
    const SERVER_URL = "http://localhost:3001";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    function validateSignup() {
        if (email === '' || password === '' || name === '' || lastName === '') throw new Error('Debe ingresar sus datos de signup');
    }

    async function register() {
        try {
            validateSignup();
            await fetch(`${SERVER_URL}/api/users`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mail: email,
                    contraseña: password,
                    fechaDeNacimiento: Date.now().toString(),
                    fechaDeRegistro: Date.now().toString(),
                    nombre: name,
                    apellido: lastName
                })
            });
            navigation.navigate('App');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>ORTwit</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nombre"
                    placeholderTextColor="black"
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Apellido"
                    placeholderTextColor="black"
                    onChangeText={(text) => setLastName(text)}
                />
            </View>
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
            <TouchableOpacity style={styles.loginBtn} onPress={async () => register()}>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signBtn} onPress={() => navigation.navigate('App')}>
                <Text style={styles.loginText}>Volver</Text>
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