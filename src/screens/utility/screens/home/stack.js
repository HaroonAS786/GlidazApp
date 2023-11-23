import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UtilityHomeScreen from '.';

const ScreenOptions = { headerShown: false };
const Stack = createStackNavigator();

const UtilityHomeStack = props => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
        >
            <Stack.Screen name="UtilityHomeScreen" component={UtilityHomeScreen} />
        </Stack.Navigator>
    );
};

export default UtilityHomeStack;
