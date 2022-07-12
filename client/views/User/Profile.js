import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Loader} from "../Components/Loader/Loader";
import styled from 'styled-components/native';
import {Header} from "../Header";
import {PrimaryButton} from "../Components/PrimaryButton/PrimaryButton";

export default function Profile({ navigation }) {
    const [info, setInfo] = React.useState();

    React.useState(() => {
        const session = localStorage.getItem('session');
        setInfo(JSON.parse(session));
    });

    return (
        <Container>
            <Header navigation={navigation} />
            {
                info ?
                    <Card>
                        <Title>Perfil</Title>
                        <Info>
                            <Row>
                                <Key>Nombre:</Key>
                                <Value>{info.name}</Value>
                            </Row>
                            <Row>
                                <Key>Apellido:</Key>
                                <Value>{info.lastName}</Value>
                            </Row>
                            <Row>
                                <Key>Email:</Key>
                                <Value>{info.email}</Value>
                            </Row>
                        </Info>
                    </Card> :
                    <Loader />
            }
            <Pressable onPress={() => navigation.goBack()}>
                <PrimaryButton text="Go back!"/>
            </Pressable>
        </Container>
      );
}

const Container = styled(View)`
  flex: 1;
  background-color: #3ea8fa;
  align-items: center;
  justify-content: center;
`;

const Card = styled(View)`
  display: flex;
  gap: 25px;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  width: 70vw;
  height: 60vh;
`;

const Title = styled(Text)`
  align-self: center;
  font-size: 30px;
  font-weight: bold;
`;

const Info = styled(View)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
`;

const Row = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Key = styled(Text)`
    font-weight: bold;
`;

const Value = styled(Text)`
  color: grey;
`;