import { View, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

import { IMAGES } from '../../../../../utils/imagesAssets'
import FlightTrackingCard from './FlightTrackingCard'
import ButtonComponent from '../../../../../components/ButtonComponent'
import { themeColors } from '../../../../../config/colors'
import { Center, ChevronLeftIcon } from 'native-base'
import { opacity } from 'react-native-reanimated'
import MapView, { Marker } from 'react-native-maps';
import Spacer from '../../../../../components/Spacer'

const SeeTrackingScreen = (props) => {

    return (
        <ImageBackground source={IMAGES.map} style={{ flex: 1 }}>
            <TouchableOpacity onPress={() =>
                props.navigation.goBack()

            }>
                <Center style={styles.backSvg}>
                    <ChevronLeftIcon color={'white'} />
                </Center>
            </TouchableOpacity>
            <Spacer height={150} />
            <Center>
                <Image style={{ width: 300, height: 100, backgroundColor: 'transparent', borderWidth: 0 }} source={IMAGES.GeoLoc} />
            </Center>
            <View style={styles.mainContainer}>
                <View style={{ paddingHorizontal: 18 }}>
                    <FlightTrackingCard />
                </View>
                <View style={styles.btnContainer}>
                    <ButtonComponent
                        label={'See tracking '}
                        // loader={loading}
                        onPress={() => {

                        }}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={styles.btnView}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

export default SeeTrackingScreen

const styles = StyleSheet.create({
    btnView: {
        borderRadius: 20,
        backgroundColor: '#D2A53A',
        width: 340,
        height: 48,
    },

    mainContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        paddingVertical: 20,
    },

    btnContainer: {
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },

    backSvg: {
        width: 44,
        height: 44,
        borderRadius: 20,
        top: Platform.OS === 'ios' ? 60 : 40,
        left: 16,
        backgroundColor: "#075985",
        opacity: .4
    }

})