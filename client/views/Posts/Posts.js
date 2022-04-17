import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Post} from "./Post";
import styled from 'styled-components/native';
import {Header} from "../Header";

export default function Posts({navigation}) {
    const SERVER_URL = "http://localhost:3001";

    const [posts, setPosts] = React.useState();

    React.useEffect(() => {
        fetch(`${SERVER_URL}/api/posts`)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => setPosts(respuestaJson))
            .catch(error => {
                //setMensaje("Hubo un error al obtener posts del servidor.");
                console.error(error);
            });
    });

    return (
        <Container>
            <Header navigation={navigation} />
            <_ScrollView showsHorizontalScrollIndicator={false}>
                {posts ? posts.map(it => <Post key={it._id} mensajes={it.mensajes}/>) : <Text>Cargando posts!</Text>}
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