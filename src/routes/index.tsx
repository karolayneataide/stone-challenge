/* eslint-disable react/no-unstable-nested-components */
import { CartButton } from '@ions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart, Products } from '@screens';
import theme from '@theme';
import React from 'react';
import { Platform } from 'react-native';

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
          headerTintColor: theme.palette.common.white,
          headerStyle: {
            backgroundColor: theme.palette.primary[400],
            height: Platform.OS === 'ios' ? 100 : 118,
          },
        })}
      >
        <Stack.Screen name="Produtos" component={Products} />
        <Stack.Screen name="Meu carrinho" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
