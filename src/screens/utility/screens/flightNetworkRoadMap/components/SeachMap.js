import { View, Image, ImageBackground, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

import { Center, Row, ChevronLeftIcon } from 'native-base';
import Spacer from '../../../../../components/Spacer';
import { CommonActions } from '@react-navigation/native';
import { themeColors } from '../../../../../config/colors';
import { MapMenuSVGComponent } from '../../../../../assets/svgs';
import { IMAGES } from '../../../../../utils/imagesAssets';


const SearchMapScreen = (props) => {

    return (
        <ImageBackground style={styles.mainContainer} source={IMAGES.map}>
            <Row justifyContent={'space-between'} width={Dimensions.get('window').width} style={{ paddingHorizontal: 16, marginTop: Platform.OS === 'ios' ? 60 : 20 }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Center style={styles.headerSvgView}>
                        <ChevronLeftIcon color={themeColors.utilityPrime} />
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    // props.navigation.goBack()
                }}>
                    <Center style={styles.headerSvgView}>
                        <MapMenuSVGComponent color={themeColors.utilityPrime} />
                    </Center>
                </TouchableOpacity>
            </Row>
            <Spacer height={150} />
            <Center>
                <Image style={{ width: 300, height: 400, backgroundColor: 'transparent', borderWidth: 0 }} source={IMAGES.Direction} />
            </Center>
        </ImageBackground>
    );
};

export default SearchMapScreen;

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: themeColors.white,
    },
    headerSvgView: {
        width: 44,
        height: 44,
        borderRadius: 100,
        // position: 'absolute',
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
})
