import { Formik } from 'formik';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';

import {
    AlertSVGComponent,
    BackArrowSVGComponent,
    PasswordResetSuccessSVGComponent,
    PasswordSVGComponent,
} from '../../../assets/svgs';
import ResetPasswordLogoSVGComponent from '../../../assets/svgs/resetPasswordLogoSvg';
import ButtonComponent from '../../../components/ButtonComponent';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import TextInputComponent from '../../../components/TextInputComponent';
import CustomModal from '../../../components/customModal';
import { themeColors } from '../../../config/colors';
import { resetValidation } from '../../../utils/helper';
import getStyles from './styles';

const ResetPasswordScreen = props => {
    const styles = getStyles();
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isPasswordHide, setIsPasswordHide] = useState(true);
    const [isConfirmPasswordHide, setIsConfirmPasswordHide] = useState(true);

    const handleResetPassword = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
                props.navigation.navigate('LoginScreen');
            }, 3000);
        }, 5000);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <CustomModal isVisible={isVisible}>
                <PasswordResetSuccessSVGComponent />
                <CustomText
                    color="#49566E"
                    h5
                    bold
                    style={{ width: 200, textAlign: 'center' }}>
                    Password Reset Successfully
                </CustomText>
            </CustomModal>

            <Spacer height={20} />
            <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => props.navigation.goBack()}>
                <BackArrowSVGComponent />
            </TouchableOpacity>
            <Spacer height={20} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerView}>
                    <ResetPasswordLogoSVGComponent />
                    <Spacer height={30} />
                    <CustomText bold h2>
                        Reset password
                    </CustomText>
                </View>
                <View style={styles.bodyContainer}>
                    <Spacer height={25} />
                    <View style={styles.alertView}>
                        <AlertSVGComponent />
                        <Spacer width={8} />
                        <CustomText h7 regular>
                            Please do not close or navigate away from this page until you have
                            reset your password !
                        </CustomText>
                    </View>
                    <Spacer height={50} />
                    <Formik
                        onSubmit={values => handleResetPassword(values)}
                        initialValues={{
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={resetValidation}>
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
                                        label={'New Password'}
                                        placeholder={'New Password'}
                                        value={values.password}
                                        errors={errors.password}
                                        touched={touched.password}
                                        onBlur={handleBlur('password')}
                                        onChangeText={handleChange('password')}
                                        rightIcon={<PasswordSVGComponent />}
                                        inputStyle={{ borderRadius: 100, height: 50 }}
                                        inputChildContainer={{ width: 290 }}
                                        rightIconPress={() => {
                                            setIsPasswordHide(!isPasswordHide);
                                        }}
                                        password={isPasswordHide ? true : false}
                                    />
                                    <TextInputComponent
                                        label={'Confirm Password'}
                                        placeholder={'Confirm Password'}
                                        value={values.confirmPassword}
                                        errors={errors.confirmPassword}
                                        touched={touched.confirmPassword}
                                        onBlur={handleBlur('confirmPassword')}
                                        onChangeText={handleChange('confirmPassword')}
                                        rightIcon={<PasswordSVGComponent />}
                                        inputStyle={{ borderRadius: 100, height: 50 }}
                                        inputChildContainer={{ width: 290 }}
                                        rightIconPress={() => {
                                            setIsConfirmPasswordHide(!isConfirmPasswordHide);
                                        }}
                                        password={isConfirmPasswordHide ? true : false}

                                    />
                                    <Spacer height={150} />
                                    <ButtonComponent
                                        label={'Save Password'}
                                        loader={loading}
                                        onPress={() => {
                                            handleSubmit();
                                        }}
                                        buttonTextColor={themeColors.white}
                                        buttonContainerStyle={styles.savePassword}
                                    />
                                </>
                            );
                        }}
                    </Formik>
                    <Spacer height={18} />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default ResetPasswordScreen;

// ResetPasswordScreen;
