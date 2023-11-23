import { Formik } from 'formik';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';

import {
    AlertSVGComponent,
    AppLogoSVGComponent,
    BackArrowSVGComponent,
    EmailSVGComponent,
    ImNotRobotSVGComponent,
    OtpLockSVGComponent,
} from '../../../assets/svgs';
import ButtonComponent from '../../../components/ButtonComponent';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import TextInputComponent from '../../../components/TextInputComponent';
import { themeColors } from '../../../config/colors';
import { signInValidation } from '../../../utils/helper';
import getStyles from './styles';

const ForgotPasswordScreen = props => {
    const styles = getStyles();
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleForgotPassword = () => {
        setLoading(true);
        setTimeout(() => {
            props.navigation.navigate('OtpScreen');
        }, 5000);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Spacer height={20} />
            <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => props.navigation.goBack()}>
                <BackArrowSVGComponent />
            </TouchableOpacity>
            <Spacer height={20} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerView}>
                    <AppLogoSVGComponent />
                    <Spacer height={30} />
                    <OtpLockSVGComponent />
                </View>
                <View style={styles.bodyContainer}>
                    <Spacer height={25} />
                    <Formik
                        onSubmit={values => handleForgotPassword(values)}
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
                                        placeholder={'Email'}
                                        value={values.email}
                                        errors={errors.email}
                                        touched={touched.email}
                                        onBlur={handleBlur('email')}
                                        onChangeText={handleChange('email')}
                                        leftIcon={<EmailSVGComponent />}
                                        inputStyle={{ borderRadius: 18, height: 50 }}
                                    />
                                    <Spacer height={25} />
                                    <View style={styles.notRobotContainer}>
                                        <TouchableOpacity
                                            style={styles.checkBoxContainer}
                                            onPress={handleCheckboxChange}
                                            activeOpacity={0.8}>
                                            <View style={styles.checkbox}>
                                                {isChecked && <View style={styles.checkboxInner} />}
                                            </View>
                                            <Spacer width={8} />
                                            <CustomText body2 regular>
                                                I’m not a robot
                                            </CustomText>
                                        </TouchableOpacity>
                                        <ImNotRobotSVGComponent />
                                    </View>
                                    <Spacer height={25} />
                                    <View style={styles.alertView}>
                                        <AlertSVGComponent />
                                        <Spacer width={8} />
                                        <CustomText body regular>
                                            We will send an OTP to this email if it exists in our
                                            database
                                        </CustomText>
                                    </View>
                                    <Spacer height={100} />
                                    <ButtonComponent
                                        label={'Send OTP'}
                                        loader={loading}
                                        onPress={() => {
                                            handleSubmit();
                                        }}
                                        buttonTextColor={themeColors.white}
                                        buttonContainerStyle={styles.sendOtpButton}
                                    />
                                </>
                            );
                        }}
                    </Formik>
                    <Spacer height={18} />
                    <View style={styles.headingView}>
                        <CustomText body h7 color={themeColors.black}>
                            Don’t have an account?
                        </CustomText>
                        <Spacer width={6} />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('RegisterScreen')}>
                            <CustomText body h7 color={themeColors.authPrimary}>
                                Register Now!
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;
