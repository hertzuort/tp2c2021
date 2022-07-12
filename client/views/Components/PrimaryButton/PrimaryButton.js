import styled from "styled-components/native";
import {Text, View} from "react-native";

export const PrimaryButton = ({text}) => {
    return <Button>
        <_Text>{text}</_Text>
    </Button>
}

const Button = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background-color: #178bff;
  border-radius: 50px;
  margin-top: 10px;
`;

const _Text = styled(Text)`
  color: #FFFFFF;
`;