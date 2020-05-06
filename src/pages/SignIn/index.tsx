import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Container, Title } from './styles';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SigIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Button onPress={() => {}}>Entrar</Button>
    </Container>
  );
};
export default SigIn;
