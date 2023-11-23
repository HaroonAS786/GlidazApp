import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Avatar, Center, Column, Row, VStack } from 'native-base';
import CustomText from '../../../../../components/CustomText';
import Spacer from '../../../../../components/Spacer';
import Header from '../../../../../components/common/Header';
import { callData, } from '../../../../../utils/helper';

const PhoneCallScreen = (props) => {
    return (
        <ImageBackground
            source={{ uri: "https://assets.videomaker.com/2020/03/Managing-a-Distributed-Team_Blog-Graphic-min-1.jpg" }}
            style={styles.container}
        >
            <Spacer height={22} />
            <Header isHeader1 backPress={() => props.navigation.goBack()} />
            <Spacer height={22} />
            <VStack space={1}>
                <Row alignItems={'center'} justifyContent={'space-between'} style={{ paddingHorizontal: 16 }}>
                    <Row space={2} alignItems={'center'}>

                        <Avatar bg="lightBlue.400" source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }} size="md">
                            NB
                            <Avatar.Badge bg="green.500" />
                        </Avatar>
                        <Column space={.5}>
                            <CustomText body color={'black'}>Brandon</CustomText>
                            <CustomText body2 color={'grey'}>Online</CustomText>
                        </Column>
                    </Row>
                </Row>
            </VStack>


            <View style={{ justifyContent: "flex-end", paddingBottom: 25, flex: 1 }}>
                <Row alignItems={'center'} justifyContent={'center'} space={2}>
                    {callData.map((val, index) =>
                        <TouchableOpacity onPress={() => {
                            if (index === 2) {

                            } else if (index === callData.length - 1) {

                            }
                        }}>
                            <Center style={index === callData.length - 1 ? styles.footerActiveSvg : styles.footerSvg}>
                                {val}
                            </Center>
                        </TouchableOpacity>
                    )}
                </Row>
            </View>
        </ImageBackground>
    )
}

export default PhoneCallScreen


const styles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 16
    },
    noOfMessage: {
        width: 14,
        height: 14,
        borderRadius: 100,
        backgroundColor: "#FC685D"

    },
    footerSvg: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(148, 148, 148, 0.4)',
        borderRadius: 100
    },
    footerActiveSvg: {
        backgroundColor: '#FC685D',
        height: 52,
        width: 100,
        borderRadius: 20
    }

})