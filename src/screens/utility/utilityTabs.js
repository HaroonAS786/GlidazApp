import {
    Avatar,
    Box,
    ChevronDownIcon,
    ChevronRightIcon,
    Row,
    ScrollView,
} from 'native-base';
import React, { useState } from 'react';
import {
    Dimensions,
    ImageBackground,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';

import { useSelector } from 'react-redux';
import CustomText from '../../components/CustomText';
import Spacer from '../../components/Spacer';
import DraggableBottomSheet from '../../components/customDragableBottomSheet';
import { themeColors } from '../../config/colors';
import { RenderUtilityScreens } from '../../utils/helper';
import { IMAGES } from '../../utils/imagesAssets';
import UtilityHomeHeader from './components/UtilityHomeHeader';
import VeitnamCardItem from './components/VeitnamCardItem';

const UtilityScreen = props => {

    const [homeIndex, setHomeIndex] = useState(0);
    const reduxState = useSelector(state => state.auth);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainContainer}>
                    <SafeAreaView>
                        <View style={styles.childContainer}>
                            <Spacer height={15} />
                            <UtilityHomeHeader
                                onNotifyClick={() => props.navigation.navigate('NotificationScreen')}
                                onMenuClick={() => {
                                    setIsBottomSheetVisible(!isBottomSheetVisible);
                                }}
                            />
                            <Spacer height={15} />
                            <>
                                <CustomText
                                    bold
                                    h4
                                    color={themeColors.black}
                                    style={{ paddingLeft: 16 }}>
                                    Good morning
                                </CustomText>
                                <Spacer height={10} />
                                <Row
                                    alignItems={'center'}
                                    space="1"
                                    style={{ paddingHorizontal: 16 }}>
                                    <Avatar size={'xs'}>ODI</Avatar>
                                    <CustomText
                                        regular
                                        h7
                                        body
                                        color={themeColors.black}
                                        style={{ textAlign: 'center' }}>
                                        Good morning
                                    </CustomText>
                                    <ChevronDownIcon />
                                </Row>
                            </>
                            <Spacer height={10} />
                            <ImageBackground
                                source={IMAGES.utilityHomeHeader}
                                style={styles.imageView}
                            />
                            <Spacer height={25} />
                            <Row
                                justifyContent={'space-between'}
                                alignItem={'center'}
                                style={{ paddingHorizontal: 16 }}>
                                <Row>
                                    <CustomText body2 color={'#E3B210'}>
                                        Best price from
                                    </CustomText>
                                    <CustomText body2 color={themeColors.black}>
                                        {' Vietnam'}
                                    </CustomText>
                                    <Spacer width={6} />
                                    <Box>
                                        <ChevronDownIcon />
                                    </Box>
                                </Row>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate("SeeAllFlights")
                                }}>
                                    <CustomText color={themeColors.utilityPrime} bold>
                                        See all
                                    </CustomText>
                                </TouchableOpacity>
                            </Row>
                            <FlatList
                                data={[0, 1, 2, 3, 4]}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    return <VeitnamCardItem />;
                                }}
                            />
                        </View>
                    </SafeAreaView>
                    {reduxState.isBottomSheet && (
                        <TouchableOpacity
                            style={styles.imageFooterView}
                            onPress={() => { }}
                            activeOpacity={1}>
                            <CustomText body2 bold>
                                🎁 Buy 2 get 1 free ❤️ The whole family flies
                            </CustomText>
                            <ChevronRightIcon />
                        </TouchableOpacity>
                    )}
                    <Spacer height={155} />
                </View>
            </ScrollView>
            <DraggableBottomSheet
                currentIndex={index => {
                    if (index !== 0) {
                        RenderUtilityScreens(index, props.navigation)
                    }
                }}
                isBottomSheet={isBottomSheetVisible}
                homeIndex={homeIndex}
            />
        </>
    );
};

export default UtilityScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: themeColors.white,
    },
    childContainer: {
        backgroundColor: 'white',
        width: '100%',
    },
    imageView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
    },
    imageFooterView: {
        zIndex: 10000,
        backgroundColor: themeColors.white,
        height: 33,
        left: 0,
        right: 0,
        top:
            Platform.OS === 'ios'
                ? Dimensions.get('window').height * 0.51
                : Dimensions.get('window').height * 0.45,

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 25,
        paddingHorizontal: 12,
        borderRadius: 100,
        borderColor: themeColors.black,
        borderWidth: 1,
        position: 'absolute',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 2,
    },
});
