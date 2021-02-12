import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#312e38' } }}
				initialRouteName="LogIn"
			>
				<Screen name="LogIn" component={LogIn} />
				<Screen name="Register" component={Register} />
			</Navigator>
		</NavigationContainer>
	);
};

export default AuthRoutes;

/* headerShown = cabeçalho */
