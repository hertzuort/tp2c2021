import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Post = ({mensajes}) => {
    return (
        <_View>
            <Author>Pepe</Author>
            <Message>{mensajes}</Message>
        </_View>
    )
}

const _View = styled(View)`
    width: 300px;
    height: 125px;
    border: 1px solid #4868dc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    gap: 10px;
`;

const Author = styled(Text)`
    font-size: 15px;
    font-weight: bold;
`;

const Message = styled(Text)`
    font-size: 15px;
    color: gray;
`;
