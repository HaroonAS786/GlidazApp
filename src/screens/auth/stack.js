import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { screenAnimation } from '../../utils/helper';
import HomeStack from '../home/stack';
import ForgotPasswordScreen from './forgotPassword';
import LoginScreen from './login';
import OtpScreen from './otp';
import RegisterScreen from './register';
import ResetPasswordScreen from './resetPassword';

const ScreenOptions = { headerShown: false, animations: screenAnimation };
const Stack = createStackNavigator();

const AuthStack = props => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
            initialRouteName={"LoginScreen"}>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
            <Stack.Screen name={'HomeStack'} component={HomeStack} />
            <Stack.Screen
                name={"RegisterScreen"}
                component={RegisterScreen}
            />
            <Stack.Screen
                name={"ResetPasswordScreen"}
                component={ResetPasswordScreen}
            />
            <Stack.Screen
                name={"ForgotPasswordScreen"}
                component={ForgotPasswordScreen}
            />
            <Stack.Screen name={"OtpScreen"} component={OtpScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
