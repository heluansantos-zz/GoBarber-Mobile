import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigIn from '../pages/SignIn';
import SigUp from '../pages/SingUp';

const Auth = createStackNavigator();

const AutRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SingIn" component={SigIn} />
    <Auth.Screen name="SingUp" component={SigUp} />
  </Auth.Navigator>
);

export default AutRoutes;
