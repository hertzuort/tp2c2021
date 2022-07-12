import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components/native";

export const Header = ({navigation}) => {
    return (
        <Container>
            <StyledPressable onPress={()=> navigation.navigate("Profile")}>
                <ProfileImg source={'https://picsum.photos/150?random=11'} />
                <Text>@user</Text>
            </StyledPressable>
            <StyledPressableLogout onPress={()=> navigation.navigate("App")}>
                <Text>Logout</Text>
            </StyledPressableLogout>
        </Container>
    );
}

const Container = styled(View)`
  background-color: #FFFFFF;
  position: absolute;
  width: 100%;
  height: 7vh;
  padding: 10px;
  top: 0;
`;

const StyledPressable = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100px;
`;

const StyledPressableLogout = styled(Pressable)`
  flex-direction: row;
  align-items: right;
  gap: 10px;
  width: 100px;
`;

const ProfileImg = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #178bff;
`;