import React from 'react';
import { Text, View } from "react-native";
import styled from 'styled-components/native';

export default function Profile({ navigation }) {
    return (
        <_View>
            <Text onPress={() => navigation.goBack()} >Go back</Text>
            <Title>Profile</Title>
        </_View>
    );
}

const _View = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Title = styled(Text)`
    font-size: 20px;
`;
