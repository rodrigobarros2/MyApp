import React from 'react';
import Routes from './routes';

import { StatusBar, View } from 'react-native';

const App = () => {
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="#312e38" />
			<View style={{ flex: 1, backgroundColor: '#312e38' }}>
				<Routes />
			</View>
		</>
	);
};

export default App;
