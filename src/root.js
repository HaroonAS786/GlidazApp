import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import store from './redux/store/store';
import AuthStack from './screens/auth/stack';

const ScreenOptions = { headerShown: false };
LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

const Root = () => {

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    }, []);

    const MainStack = () => {
        return (
            <Stack.Navigator screenOptions={ScreenOptions}>
                <Stack.Screen name={"AuthStack"} component={AuthStack} />
            </Stack.Navigator>
        );
    };

    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <MainStack />
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    );
};

export default Root;
