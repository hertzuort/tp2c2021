import React from 'react';
import styled from 'styled-components/native';
import {View, Image, Text, Pressable} from 'react-native';

export default function PostCard(props) {
    const SERVER_URL = 'http://localhost:3001';
    const [likes, setLikes] = React.useState([]);
    const [info, setInfo] = React.useState([]);

    React.useState(() => {
        const session = localStorage.getItem('session');
        setInfo(JSON.parse(session));
    });


    React.useEffect(() => {
        fetch(`${SERVER_URL}/api/posts/${props.post._id}/likes`)
            .then(response => response.json())
            .then(jsonResponse => setLikes(jsonResponse))
            .catch(error => {
                console.error(error);
            });
    }, [likes]);


    async function onPress() {
        const token = localStorage.getItem('user-token');
        if (!token) return
        await fetch(`${SERVER_URL}/api/posts/${props.post._id}/like`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    }

    return (
        <Card>
            <Header>
                <Img source={'https://picsum.photos/150?random=11'}/>
                <p>@{props.post.autor.nombre}</p>
            </Header>
            <Text>{props.post.mensaje}</Text>
            <Footer onPress={async () => onPress()}>
                {(likes[0] && likes[0].filter(like => like === info.id)[0]) ? <LikeIcon source={require('./red-like.png')}/> :
                    <LikeIcon source={require('./black-like.png')}/>}
                <p>{ likes[0] ? likes[0].length : 0}</p>
            </Footer>
        </Card>
    );
}

const Card = styled(View)`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 600px;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

const Header = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Img = styled(Image)`
  border-radius: 5px;
  width: 25px;
  height: 25px;
`;

const Footer = styled(Pressable)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const LikeIcon = styled(Image)`
  width: 15px;
  height: 15px;
  color: red;
`;

