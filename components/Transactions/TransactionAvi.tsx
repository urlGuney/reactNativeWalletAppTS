import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../colors';
import {TransactionAviProps} from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi: FC<TransactionAviProps> = props => {
  return (
    <StyledView style={{backgroundColor: props.background}}>
      <Ionicons name={props.icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;
