import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import UserProfileScreen from '.';
import ChatScreen from '../chat';
import FriendsScreen from '../friends';


const ScreenOptions = { headerShown: false };
const Stack = createStackNavigator();

const UserStack = props => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
        >
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
        </Stack.Navigator>
    );
};

export default UserStack;
