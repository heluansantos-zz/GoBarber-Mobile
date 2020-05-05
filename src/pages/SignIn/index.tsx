import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Container, Title } from './styles';
import logoImg from '../../assets/logo.png';

const SigIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};
export default SigIn;
