import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigator>
				<Screen name="SignUp" component={SignUp} />
				<Screen name="Discover" component={SignIn} />
				<Screen name="Browse" component={SignUp} />
				<Screen name="Esports" component={SignIn} />
			</Navigator>
		</NavigationContainer>
	);
};

export default Routes;
