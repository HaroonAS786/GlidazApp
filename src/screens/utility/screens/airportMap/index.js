import { CommonActions } from '@react-navigation/native';
import { Center, ChevronLeftIcon, Row } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

import { MapMenuSVGComponent } from '../../../../assets/svgs';
import Spacer from '../../../../components/Spacer';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import { themeColors } from '../../../../config/colors';
import { RenderUtilityScreens } from '../../../../utils/helper';
import { IMAGES } from '../../../../utils/imagesAssets';
import getStyles from './styles';

const AirportMapScreen = (props) => {

    const styles = getStyles()
    const [homeIndex, setHomeIndex] = useState(8);

    return (
        <ImageBackground style={styles.mainContainer} source={IMAGES.map}>
            <Row justifyContent={'space-between'} width={Dimensions.get('window').width} style={{ paddingHorizontal: 16, marginTop: Platform.OS === 'ios' ? 60 : 20 }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'UtilityStack' }],
                        }),
                    );
                }}>
                    <Center style={styles.headerSvgView}>
                        <ChevronLeftIcon color={themeColors.utilityPrime} />
                    </Center>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => null}>
                    <Center style={styles.headerSvgView}>
                        <MapMenuSVGComponent color={themeColors.utilityPrime} />
                    </Center>
                </TouchableOpacity>
            </Row>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer height={150} />
                <Center>
                    <Image style={{ width: 300, height: 400, backgroundColor: 'transparent', borderWidth: 0 }} source={IMAGES.Direction} />
                </Center>
                <Spacer height={150} />
            </ScrollView>
            <DraggableBottomSheet
                currentIndex={index => {
                    RenderUtilityScreens(index, props.navigation)
                    setHomeIndex(index)
                }}
                homeIndex={homeIndex}
            />
        </ImageBackground>
    );
};

export default AirportMapScreen;
