import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../types/RootStackParams';
import {Home} from '../views/home';
import {Details} from '../views/details';

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#0C0666',
  },
  headerTitleStyle: {
    color: '#F8F8F8',
  },
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
