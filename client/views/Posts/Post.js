import { TextInput, Text, View, Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Post = () => {
    return (
        <_View>
            <Text>Qué estas pensando?</Text>
            <Message/>
            <StyledPressable>
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
  background-color: #FFFFF5;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Message = styled(TextInput)`
  border-width: 1px;
  padding: 5px;
`;

const StyledPressable = styled(Pressable)`
  width: 60px;
`;