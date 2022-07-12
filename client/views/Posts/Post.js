import { TextInput, View, Pressable } from 'react-native';
import styled from 'styled-components/native';
import {useState} from "react/cjs/react.development";
import {PrimaryButton} from "../Components/PrimaryButton/PrimaryButton";
import React from "react";
import * as ReactDOM from "react-dom";

export const Post = () => {
    const SERVER_URL = "http://localhost:3001";
    const [text, setText] = useState('');

    async function onPress() {
        if (text != '') {
            const token = localStorage.getItem('user-token');
            if (!token) return
            await fetch(`${SERVER_URL}/api/posts`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ mensaje: text })
            });
        } else {
            console.log("Mensaje vacío");
        }
        setText("");
    }

    return (
        <_View>
            <Message
                placeholder="Que estas pensando?"
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <StyledPressable onPress={async () => onPress()}>
                <PrimaryButton text="Post!"/>
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
