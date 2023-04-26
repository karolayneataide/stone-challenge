/* eslint-disable react/no-unstable-nested-components */
import { CartButton } from '@ions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart, Products } from '@screens';
import theme from '@theme';
import React from 'react';

const Stack = createStackNavigator();

export const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerRight: ({ tintColor }) => (
            <CartButton navigation={navigation} tintColor={tintColor} />
          ),
          headerShadowVisible: false,
          headerTintColor: theme.palette.common.white,
          headerStyle: {
            backgroundColor: theme.palette.primary[400],
          },
        })}
      >
        <Stack.Screen name="Produtos" component={Products} />
        <Stack.Screen name="Meu carrinho" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
