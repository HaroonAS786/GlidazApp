import { Row } from 'native-base'
import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'

import ReadOnly from '../../../../../assets/svgs/eyeSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import { themeColors } from '../../../../../config/colors'

const LiveStreamCard = ({ backPress, item, index }) => {

    return (
        <ImageBackground style={styles.container} source={{ uri: "https://assets.videomaker.com/2020/03/Managing-a-Distributed-Team_Blog-Graphic-min-1.jpg" }}>
            <Spacer height={20} />
            <Row alignItems={'center'} justifyContent={'flex-end'} style={{ paddingHorizontal: 16, }}>
                <Row alignItems={'center'} space={2}>
                    <Row alignItems={'center'} space={1} style={styles.readOnly}>
                        <ReadOnly />
                        <CustomText body bold color={'white'}>312</CustomText>
                    </Row>
                    <View style={styles.liveIcon} />
                </Row>
            </Row>
            <View style={{ justifyContent: 'flex-end', flex: 1, paddingHorizontal: 16, paddingBottom: 150 }}>
                <CustomText h4 bold color={'white'}>Event Name</CustomText>
            </View>
        </ImageBackground>
    )
}

export default LiveStreamCard

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    backSvg: {
        width: 40,
        height: 40,
        borderRadius: 100,
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

    liveIcon: {
        width: 20,
        height: 20,
        borderRadius: 100,
        borderColor: themeColors.authPrimary,
        borderWidth: 2,
        backgroundColor: "red",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

    readOnly: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 100,
        padding: 8
    }
})