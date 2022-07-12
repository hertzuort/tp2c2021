import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components/native";

export const Header = ({navigation}) => {
    return (
        <Container>
            <_Pressable onPress={()=> navigation.navigate("Profile")}>
                <ProfileImg source={require('./Posts/profile.jpg')} />
                <Text>@user</Text>
            </_Pressable>
        </Container>
    );
}

const Container = styled(View)`
  background-color: #faf8f0;
  position: absolute;
  width: 100%;
  height: 7vh;
  padding: 10px;
  top: 0;
`;

const _Pressable = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ProfileImg = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #353739;
`;