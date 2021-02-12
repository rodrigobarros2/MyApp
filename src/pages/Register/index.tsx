import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import Input from '../../components/Input'

import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import { Container, Title, BackToLogIn, BackToLogInText } from './styles';

const Register: React.FC = () => {
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
							<Title>Crie sua conta</Title>
						</View>

						<Input name="name" icon="user" placeholder="E-mail" />
						<Input name="email" icon="mail" placeholder="Senha" />
						<Input name="password" icon="lock" placeholder="Senha" />

						<Button onPress={() => { }}>Entrar</Button>

					</Container>
				</ScrollView>
			</KeyboardAvoidingView>

			<BackToLogIn onPress={() => { navigation.goBack() }}>
				<Icon name="arrow-left" size={20} color="#fff" />
				<BackToLogInText>Voltar para logon</BackToLogInText>
			</BackToLogIn>

		</>
	);
};

export default Register;


