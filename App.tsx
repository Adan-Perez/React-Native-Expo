import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import React from 'react';

import Menu from './src/screens/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Menu'
                    component={Menu}
                    options={{
                        title: 'My App',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: colors.darkGreen,
                        },
                        headerTintColor: colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}