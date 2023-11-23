import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';

import { AlertSVGComponent, BackArrowSVGComponent } from '../../../assets/svgs';
import ResetPasswordLogoSVGComponent from '../../../assets/svgs/resetPasswordLogoSvg';
import ButtonComponent from '../../../components/ButtonComponent';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import ConfirmationCodeInput from '../../../components/codeConfirmationPin';
import TimeComponent from '../../../components/timer';
import { themeColors } from '../../../config/colors';
import getStyles from './styles';

const OtpScreen = props => {
    const styles = getStyles();
    const [loading, setLoading] = useState(false);

    const handleOtp = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            props.navigation.navigate('ResetPasswordScreen');
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
            <Spacer height={25} />
            <View style={styles.headerView}>
                <ResetPasswordLogoSVGComponent />
                <Spacer height={30} />
                <CustomText bold h2>
                    Reset password
                </CustomText>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    <Spacer height={25} />

                    <CustomText h7 regular style={{ textAlign: 'center' }}>
                        Fill with the OTP code you recieved on omark@microwize.com
                    </CustomText>
                    <Spacer height={100} />
                    <ConfirmationCodeInput codeLength={6} />
                    {/* Adjust the code length as needed */}
                    <Spacer height={150} />
                    <ButtonComponent
                        label={'Submit'}
                        loader={loading}
                        onPress={handleOtp}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={styles.sendOtpButton}
                    />
                    <Spacer height={18} />
                    <View style={styles.countTimer}>
                        <TimeComponent durationInSeconds={60} />
                    </View>
                    <Spacer height={18} />
                    <View style={styles.headingView}>
                        <CustomText body h7 color={themeColors.black}>
                            Didn’t recieve an e-mail?
                        </CustomText>
                        <Spacer width={6} />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('RegisterScreen')}>
                            <CustomText body h7 color={themeColors.authPrimary}>
                                Resend OTP
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                    <Spacer height={100} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default OtpScreen;
