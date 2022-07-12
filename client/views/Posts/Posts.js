import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Post} from "./Post";
import styled from 'styled-components/native';
import {Header} from "../Header";
import PostCard from "../Components/PostCard";

export default function Posts({navigation}) {
    const SERVER_URL = "http://localhost:3001";

    const [posts, setPosts] = React.useState();

    React.useState(() => {
        fetch(`${SERVER_URL}/api/posts`)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => setPosts(respuestaJson))
            .catch(error => {
                console.error(error);
            });
    });

    return (
        <Container>
            <Header navigation={navigation} />
            <Post/>
            <_ScrollView showsHorizontalScrollIndicator={false}>
                {posts ? posts.map(post => <PostCard key={post._id} post={post}/>) : <Text>Cargando posts!</Text>}
            </_ScrollView>
        </Container>
    );
}

const Container = styled(View)`
  flex: 1;
  background-color: #3ea8fa;
  align-items: center;
  justify-content: center;
`;

const _ScrollView = styled(ScrollView)`
  max-height: 65vh;
  margin-top: 5px;
`;