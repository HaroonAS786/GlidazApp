import { View, Animated, Dimensions, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import Swiper from 'react-native-swiper';

import { UtilityOnBoardData } from '../../../../utils/helper';
import { Center, Row, VStack } from 'native-base';
import Spacer from '../../../../components/Spacer';
import CustomText from '../../../../components/CustomText';
import ButtonComponent from '../../../../components/ButtonComponent';
import { themeColors } from '../../../../config/colors';

const UtilityOnBoard = (props) => {

    let swiperRef;

    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleNext = () => {
        if (index < UtilityOnBoardData.length - 1) {
            swiperRef.scrollBy(1, true);
        }
    };

    const handleScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    return (
        <View style={styles.mainContain}>

            <Swiper
                ref={ref => (swiperRef = ref)}
                key={UtilityOnBoardData?.length}
                onIndexChanged={index => {
                    setIndex(index);
                }}
                loop={false}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                dotColor='#CCCCCC'
                activeDotColor='#7F7F7F'
                onScroll={handleScroll}
                showsPagination={true}
                index={0}>
                {UtilityOnBoardData?.map(item => {
                    return (
                        <VStack
                            key={item.key}
                            style={styles.swiperContainer}
                        >
                            <Spacer height={150} />
                            {item.svg}
                            <Spacer height={20} />
                            <Center>
                                <CustomText h1 bold color='black'>{item.label}</CustomText>
                                <Spacer height={50} />
                                <CustomText body2 semiBold color='black'>{item.title}</CustomText>
                            </Center>
                        </VStack>
                    );
                })}
            </Swiper>

            <Row style={index === 2 ? styles.footerView2 : styles.footerView1}>
                {index !== 2 && <ButtonComponent
                    label={'Skip'}
                    onPress={() => {
                        props.navigation.navigate("UtilityWelcomeScreen")
                    }}
                    buttonContainerStyle={styles.skipBtn}
                    buttonTextColor={themeColors.grey}
                />}
                {index === 2 &&
                    <Center>
                        <ButtonComponent
                            label={'Get Started'}
                            onPress={() => {
                                props.navigation.navigate("UtilityWelcomeScreen")
                            }}
                            buttonContainerStyle={styles.getStarted}
                            buttonTextColor={themeColors.white}
                        /></Center>
                }
                {index !== 2 &&
                    <ButtonComponent
                        label={'Next'}
                        onPress={handleNext}
                        buttonContainerStyle={styles.nextBtn}
                        buttonTextColor={themeColors.white}
                    />
                }
            </Row>
        </View>
    )
}

export default UtilityOnBoard


const styles = StyleSheet.create({

    mainContain: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },

    swiperContainer: {
        height: '100%',
        width: "100%",
        alignItems: 'center',
    },

    footerView1: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 40
    },
    footerView2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingBottom: 40
    },

    skipBtn: { width: 78, backgroundColor: 'transparent', alignItems: 'center' },

    nextBtn: { width: 78, backgroundColor: themeColors.utilityPrime, alignItems: 'center' },

    getStarted: { width: 152, backgroundColor: themeColors.utilityPrime, alignItems: 'center' },

    dotStyle: { width: 12, height: 12, borderRadius: 100, marginBottom: 100 },

    activeDotStyle: { width: 12, height: 12, borderRadius: 100, marginBottom: 100 }

})