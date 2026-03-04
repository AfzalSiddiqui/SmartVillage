import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import YellowPagesHomeScreen from './src/screens/YellowPagesHomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import ContactDetailScreen from './src/screens/ContactDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="YellowPagesHome" component={YellowPagesHomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
