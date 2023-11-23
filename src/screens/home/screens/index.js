import React, { useCallback } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';
import { AppLogoSVGComponent } from '../../../assets/svgs';
import CommunityLogoSVGComponent from '../../../assets/svgs/communityLogoSvg';
import UtilityLogoSVGComponent from '../../../assets/svgs/utilityLogoSvg';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import { themeColors } from '../../../config/colors';
import getStyles from './styles';

const HomeScreen = props => {

    const styles = getStyles();

    const LeftSwipeActions = useCallback(() => {
        return (
            <View
                style={styles.leftSwipe}>
                <View style={styles.headerView}>
                    <Spacer height={30} />

                    <CustomText bold h1 color={themeColors.white}>
                        HELLO THERE !
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

                <View style={styles.leftFooterView}>
                    <Spacer height={100} />
                    <UtilityLogoSVGComponent />
                    <Spacer height={50} />
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => props.navigation.navigate('UtilityOnBoard')}>
                        <CustomText h4 semiBold color={themeColors.white}>
                            Glidaz Utility
                        </CustomText>
                    </TouchableOpacity>
                </View>

                <View style={styles.appLogo}>
                    <AppLogoSVGComponent />
                </View>
            </View >
        );
    });

    const rightSwipeActions = useCallback(() => {
        return (
            <View
                style={styles.rightSwipe}>
                <View style={styles.headerView}>
                    <Spacer height={30} />

                    <CustomText bold h1 color={themeColors.white}>
                        HELLO THERE !
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

                <View style={styles.leftFooterView}>
                    <Spacer height={100} />
                    <CommunityLogoSVGComponent />
                    <Spacer height={50} />
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => props.navigation.navigate('CommunityOnBoard')}>

                        <CustomText h4 semiBold color={themeColors.white}>
                            Glidaz Community
                        </CustomText>
                    </TouchableOpacity>
                </View>

                <View style={styles.appLogo}>
                    <AppLogoSVGComponent />
                </View>
            </View>
        );
    });

    return (
        <SafeAreaView style={styles.mainContainer}>

            <Swipeable
                renderLeftActions={LeftSwipeActions}
                renderRightActions={rightSwipeActions}
            >
                <View
                    style={styles.main}>
                    <View style={styles.headerView}>
                        <Spacer height={30} />

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
                        <CommunityLogoSVGComponent />
                        <Spacer height={100} />
                        <UtilityLogoSVGComponent />
                    </View>
                </View>
            </Swipeable>

        </SafeAreaView>
    );
};

export default HomeScreen;
