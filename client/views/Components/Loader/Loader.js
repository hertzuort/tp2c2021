import {ActivityIndicator, View} from "react-native";
import styled from 'styled-components/native';
import * as React from "react";

export const Loader = () => {
    return <_ActivityIndicator size={'large'} color="blue" />
};

const _ActivityIndicator = styled(ActivityIndicator)`
  margin-top: 50%;
`;
