import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Loader} from "../Components/Loader/Loader";
import styled from 'styled-components/native';

export default function Profile({ navigation }) {
    const SERVER_URL = "http://localhost:3001";

    const [info, setInfo] = React.useState();

    React.useEffect(() => {
        fetch(`${SERVER_URL}/api/users/6259b5848de6a57670adb45b`)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => setInfo(respuestaJson))
            .catch(error => {
                console.error(error);
            });
    }, [info]);

    return (
        <Container>
            <Card>
                <Title>Perfil</Title>
                <Info>
                    <Row>
                        <Key>Nombre: </Key>
                        <Value>nombre </Value>
                    </Row>
                    <Row>
                        <Key>Apellido: </Key>
                        <Value>apellido </Value>
                    </Row>
                    <Row>
                        <Key>Email: </Key>
                        <Value>email </Value>
                    </Row>
                </Info>
            </Card>
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