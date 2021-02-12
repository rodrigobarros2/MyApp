import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.png'

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';

const LogIn: React.FC = () => {
	const navigation = useNavigation();

	return (
		<>
			{/* Teclado não evita a visão */}
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				// Platform entende a paltaforma que vamos mecher. behavior = comportamento
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

				{/*
					ScrollView = comportamento de rolagem da tela, só vai ser ativado se estrapolar muito
					keyboardShouldPersistTaps comportamento do teclado ao clicar fora
				*/}

				<ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>

					<Container>
						<Image source={logoImg} />

						{/* Coloca o title dentro de um view para o teclado não bugar o texto */}
						<View>
							<Title>Faça seu logon</Title>
						</View>

						<Input name="email" icon="mail" placeholder="E-mail" />
						<Input name="password" icon="lock" placeholder="Senha" />

						<Button onPress={() => { }}>Entrar</Button>

						<ForgotPassword onPress={() => { }}>
							<ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
						</ForgotPassword>
					</Container>
				</ScrollView>
			</KeyboardAvoidingView>

			<CreateAccountButton onPress={() => { navigation.navigate('Register') }}>
				<Icon name="log-in" size={20} color="#ff9000" />
				<CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
			</CreateAccountButton>

		</>
	);
};

export default LogIn;
