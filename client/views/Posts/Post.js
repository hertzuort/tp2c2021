import { TextInput, Text, View, Pressable } from 'react-native';
import styled from 'styled-components/native';
import {useState} from "react/cjs/react.development";

export const Post = () => {
    const SERVER_URL = "http://localhost:3001";
    const [text, setText] = useState('');

    async function onPress() {
        if (text != '') {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjU5YjU4NDhkZTZhNTc2NzBhZGI0NWIiLCJtYWlsIjoicGVwaXRvQGJvdGVsbGl0YS5jb20iLCJpYXQiOjE2NTc2NDIxOTgsImV4cCI6MTY1NzY0NTc5OH0.t5GCflTXlfFwD1RLv7r5SDKRhhlCoBYTrjhmFcYWD5Y";
            const rawResponse = await fetch(`${SERVER_URL}/api/posts`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ mensaje: text })
            });
            const content = await rawResponse.json();
            console.log(content);
        } else {
            throw new Error("mensaje vacío");
        }
    }



    return (
        <_View>
            <Message
                placeholder="Que estas pensando?"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <StyledPressable onPress={async () => onPress()}>
                <Text>Postear!</Text>
            </StyledPressable>
        </_View>
    )
}

const _View = styled(View)`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 600px;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Message = styled(TextInput)`
  border-width: 1px;
  padding: 5px;
  height: 50px;
  width: 100%;
`;

const StyledPressable = styled(Pressable)`
  width: 60px;
`;

const _Text = styled(Text)`
  color: #696f79;
`;
