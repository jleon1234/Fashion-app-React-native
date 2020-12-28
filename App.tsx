import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding';

const AuthnticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthnticationStack.Navigator headerMode="none" >
      <AuthnticationStack.Screen  name="Onboarding" component={Onboarding} />
    </AuthnticationStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}