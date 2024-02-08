import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Registration Screen"
          component={RegistrationScreen}
          options={{title: 'Registration'}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App