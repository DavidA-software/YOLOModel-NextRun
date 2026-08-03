import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import BallHoopScreen from '../screens/BallHoopScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{ title: 'NextRun' }}
                />
                <Stack.Screen
                    name="BallHoop"
                    component={BallHoopScreen}
                    options={{ title: 'Ball & Hoop Detection' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}