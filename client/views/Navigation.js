import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Expo from "expo";
import HomeScreen from './App';
import PostsScreen from './Posts/Posts';
import ProfileScreen from './User/Profile.js';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="App" component={HomeScreen} />
                <Stack.Screen name="Posts" component={PostsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Expo.registerRootComponent(App);