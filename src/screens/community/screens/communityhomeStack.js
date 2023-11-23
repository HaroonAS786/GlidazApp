import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from './homeScreen';
import ChatScreen from './chat';
import FriendsScreen from './friends';
import PeopleUserProfileScreen from './userProfile/PeopleProfile';

const ScreenOptions = { headerShown: false };
const Stack = createStackNavigator();

const CommunityHomeStack = props => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
            <Stack.Screen name="PeopleUserProfileScreen" component={PeopleUserProfileScreen} />

        </Stack.Navigator>
    );
};

export default CommunityHomeStack;
