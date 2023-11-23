import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from './screens';
import UtilityStack from '../utility/stack';
import CommunityStack from '../community/stack';
import CommunityWelcomeScreen from '../community/screens/welcome';
import UtilityWelcomeScreen from '../utility/screens/welcome';
import CommunityOnBoard from '../community/screens/onBoard';
import UtilityOnBoard from '../utility/screens/onBoard';

const ScreenOptions = { headerShown: false };
const Stack = createStackNavigator();

const HomeStack = props => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="UtilityStack" component={UtilityStack} />
            <Stack.Screen name="CommunityStack" component={CommunityStack} />
            <Stack.Screen
                name="UtilityOnBoard"
                component={UtilityOnBoard}
            />
            <Stack.Screen
                name="CommunityOnBoard"
                component={CommunityOnBoard}
            />
            <Stack.Screen
                name="UtilityWelcomeScreen"
                component={UtilityWelcomeScreen}
            />
            <Stack.Screen
                name="CommunityWelcomeScreen"
                component={CommunityWelcomeScreen}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
