import React from 'react';
import {ScrollView, Text, View} from "react-native";
import styled from 'styled-components/native';
import {Header} from "../Header";
import {Post} from "../Posts/Post";

export default function Profile({ navigation }) {
    const SERVER_URL = "http://localhost:3001";

    const [posts, setPosts] = React.useState([]);

    React.useState(() => {
        fetch(`${SERVER_URL}/api/users/61930ebf991ebc698ff2c7ee/posts`)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => setPosts(respuestaJson))
            .catch(error => {
                console.error(error);
            });
    });

    return (
        <Container>
            <Text>Profile</Text>
            <Text onPress={() => navigation.goBack()} >Go back</Text>
            <Header navigation={navigation} />
            <_ScrollView showsHorizontalScrollIndicator={false}>
                {posts ? posts.map(post => <Post key={post._id} post={post}/>) : <Text>Cargando posts!</Text>}
            </_ScrollView>
        </Container>
    );
}

const Container = styled(View)`
  flex: 1;
  background-color: #C1E4F0;
  align-items: center;
  justify-content: center;
`;

const _ScrollView = styled(ScrollView)`
  max-height: 70vh;
`;