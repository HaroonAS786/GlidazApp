import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';

import {
    AppLogoSVGComponent,
    EmailSVGComponent,
    FacebookSVGComponent,
    GoogleSVGComponent,
} from '../../../assets/svgs';
import ButtonComponent from '../../../components/ButtonComponent';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import TextInputComponent from '../../../components/TextInputComponent';
import SocialButton from '../../../components/socialButton';
import { themeColors } from '../../../config/colors';
import getStyles from './styles';
import { signInValidation } from '../../../utils/helper';
import CustomModal from '../../../components/customModal';
import { Center } from 'native-base';

const LoginScreen = props => {

    const styles = getStyles();
    const [isChecked, setIsChecked] = useState(false);
    const [isSocialLogin, setIsSocialLogin] = useState(false)
    const [socialLoginText, setSocialLoginText] = useState("")
    const [loading, setLoading] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            props.navigation.navigate('HomeStack');
        }, 1000);
    };

    useEffect(() => {
        if (isSocialLogin) {
            setTimeout(() => {
                setIsSocialLogin(false)
                setSocialLoginText("")
                props.navigation.navigate('HomeStack');
            }, 5000)
        }

    }, [isSocialLogin])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.headerView}>
                <Spacer height={16} />
                <CustomText bold h6>
                    Welcome to
                </CustomText>
                <Spacer height={12} />
                <CustomText bold h1 color={themeColors.white}>
                    Glidaz platform
                </CustomText>
                <Spacer height={16} />
                <CustomText
                    regular
                    h7
                    color={themeColors.white}
                    style={{ textAlign: 'center', width: 340 }}>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </CustomText>
            </View>

            <View style={styles.footerView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Spacer height={40} />
                    <View style={styles.headingView}>
                        <CustomText bold h6 color={themeColors.black}>
                            Login to
                        </CustomText>
                        <Spacer width={6} />
                        <CustomText bold h6 color={themeColors.authPrimary}>
                            Glidaz platform
                        </CustomText>
                    </View>
                    <Spacer height={25} />
                    <Formik
                        onSubmit={values => handleLogin(values)}
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={signInValidation}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => {
                            return (
                                <>
                                    <TextInputComponent
                                        placeholder={'Your email'}
                                        value={values.email}
                                        errors={errors.email}
                                        touched={touched.email}
                                        onBlur={handleBlur('email')}
                                        onChangeText={handleChange('email')}
                                        leftIcon={<EmailSVGComponent />}
                                    />
                                    <View style={styles.rememberForgot}>
                                        <TouchableOpacity
                                            style={styles.checkBoxContainer}
                                            onPress={handleCheckboxChange}
                                            activeOpacity={0.8}>
                                            <View style={styles.checkbox}>
                                                {isChecked && <View style={styles.checkboxInner} />}
                                            </View>
                                            <CustomText body2>Remember</CustomText>
                                        </TouchableOpacity>
                                        <Spacer width={6} />
                                        <TouchableOpacity
                                            onPress={() =>
                                                props.navigation.navigate('ForgotPasswordScreen')
                                            }>
                                            <CustomText
                                                semiBold
                                                body2
                                                color={themeColors.authPrimary}>
                                                Forgot your password?
                                            </CustomText>
                                        </TouchableOpacity>
                                    </View>
                                    <Spacer height={50} />
                                    <ButtonComponent
                                        label={'Continue'}
                                        loader={loading}
                                        onPress={() => {
                                            handleSubmit();
                                        }}
                                        buttonTextColor={themeColors.white}
                                    />
                                </>
                            );
                        }}
                    </Formik>
                    <Spacer height={16} />
                    <CustomText
                        semiBold
                        h7
                        color={themeColors.grey}
                        style={{ textAlign: 'center' }}>
                        OR
                    </CustomText>
                    <Spacer height={16} />
                    <SocialButton
                        label={'Continue with Google'}
                        onPress={() => {
                            setSocialLoginText("Google")
                            setIsSocialLogin(true)
                        }}
                        buttonTextColor={'#696974'}
                        svg={<GoogleSVGComponent />}
                    />
                    <Spacer height={12} />
                    <SocialButton
                        label={'Continue with Facebook'}
                        onPress={() => {
                            setSocialLoginText("Facebook")
                            setIsSocialLogin(true)
                        }}
                        buttonTextColor={'#696974'}
                        svg={<FacebookSVGComponent />}
                    />
                    <Spacer height={25} />
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('RegisterScreen')}>
                        <CustomText
                            bold
                            h7
                            color={themeColors.authPrimary}
                            style={{ textAlign: 'center' }}>
                            Can’t login? Sign up for new user?
                        </CustomText>
                    </TouchableOpacity>
                    <Spacer height={50} />
                    <View style={styles.logoContainer}>
                        <AppLogoSVGComponent />
                    </View>
                    <Spacer height={25} />
                </ScrollView>
                <CustomModal isVisible={isSocialLogin}>
                    <View style={{ width: Dimensions.get('window').width / 2, marginHorizontal: 16 }}>
                        <Center>
                            <CustomText color='black' bold >Logging with {socialLoginText}...</CustomText>
                        </Center>
                        <Spacer height={20} />
                        <ActivityIndicator color={"blue"} />
                    </View>
                </CustomModal>
            </View>

        </SafeAreaView>
    );
};

export default LoginScreen;
