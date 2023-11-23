import { Center, Column, Divider, Row } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView, Share, StyleSheet, TouchableOpacity, View } from 'react-native'

import Edit from '../../../../../assets/svgs/edit'
import SendEventMessage from '../../../../../assets/svgs/sendEventMessage'
import ShareSVGComponent from '../../../../../assets/svgs/shareSvg'
import ButtonComponent from '../../../../../components/ButtonComponent'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import TextInputComponent from '../../../../../components/TextInputComponent'
import Header from '../../../../../components/common/Header'
import CustomModal from '../../../../../components/customModal'
import { themeColors } from '../../../../../config/colors'
import CommunityHeader from '../../components/CommunityHeader'

const EventSummary = (props) => {

    const [isMessageInvite, setIsMessageInvite] = useState(false)

    const shareQRCode = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (<>
        <View style={styles.container}>
            <SafeAreaView />
            <CommunityHeader navigation={props.navigation}
                event onEvent={(index) => {
                    if (index == 0) {
                        props.navigation.navigate("CreateEventScreen")
                    } else if (index === 1) {
                        props.navigation.navigate("EventCategory")
                    }
                    else if (index === 2) {
                        props.navigation.navigate("LiveStreamVedio")
                    }
                }} />
            <Spacer height={20} />
            <Header isHeader2 backPress={() => props.navigation.navigate("CreateEventScreen")
            } />
            <Spacer height={20} />
            <View style={styles.eventDetail}>
                <Spacer height={20} />
                <Row alignSelf={'flex-end'} style={{ paddingRight: 16 }} space={2}>
                    {[<SendEventMessage />, <ShareSVGComponent />, <Edit />].map((val, index) => {
                        return (
                            <Center style={{ backgroundColor: "white", width: 30, height: 30, borderRadius: 100 }}>
                                <TouchableOpacity onPress={() => {
                                    if (index == 0) {
                                        setIsMessageInvite(true)
                                    } else if (index == 1) {
                                        shareQRCode()
                                    } else {
                                        props.navigation.navigate("CreateEventScreen")
                                    }
                                }}>{val}</TouchableOpacity>
                            </Center>
                        )
                    })}
                </Row>
                <Spacer height={20} />
                <Center>
                    <CustomText bold body>Event summary information</CustomText>
                </Center>
                <Spacer height={20} />
                <Column style={{ paddingHorizontal: 16 }}>
                    <Spacer height={10} />
                    <Row justifyContent={'space-between'} alignItems={'center'} >
                        <CustomText>Time</CustomText>
                        <CustomText>August 24, 2023</CustomText>
                    </Row>
                    <Spacer height={10} />
                    <Divider _light={{
                        bg: themeColors.black
                    }} />
                    <Spacer height={10} />
                    <Row justifyContent={'space-between'} alignItems={'center'} >
                        <CustomText>Organizer</CustomText>
                        <CustomText>Oni Ade</CustomText>
                    </Row>
                    <Spacer height={10} />
                    <Divider _light={{
                        bg: themeColors.black
                    }} />
                    <Spacer height={10} />
                    <Row justifyContent={'space-between'} alignItems={'center'} >
                        <CustomText>No of participants</CustomText>
                        <CustomText>100+</CustomText>
                    </Row>
                    <Spacer height={10} />
                    <Divider _light={{
                        bg: themeColors.black
                    }} />
                    <Spacer height={10} />
                    <Row justifyContent={'space-between'} alignItems={'center'} >
                        <CustomText>Category</CustomText>
                        <CustomText>Category name</CustomText>
                    </Row>
                    <Spacer height={10} />
                    <Divider _light={{
                        bg: themeColors.black
                    }} />
                    <Spacer height={150} />
                </Column>
            </View>
            <Spacer height={25} />
            <Center>
                <ButtonComponent
                    label={"Start event now"}
                    // loader={loading}
                    onPress={() => {
                        props.navigation.navigate("LiveStreamVedio")
                    }}
                    buttonTextColor={themeColors.white}
                    buttonContainerStyle={{ backgroundColor: themeColors.authButtonPrimary, padding: 6, width: 200, }}
                />
                <Spacer height={10} />
                <ButtonComponent
                    label={"Start event later"}
                    // loader={loading}
                    onPress={() => {
                        props.navigation.navigate("EventScreen")
                    }}
                    buttonTextColor={themeColors.white}
                    buttonContainerStyle={{ backgroundColor: themeColors.authButtonPrimary, padding: 6, width: 200, }}
                />
                <Spacer height={10} />
                <ButtonComponent
                    label={'cancel'}
                    // loader={loading}
                    onPress={() => {
                        props.navigation.navigate("EventScreen")
                    }}
                    buttonTextColor={themeColors.black}
                    buttonContainerStyle={{ backgroundColor: 'white', padding: 0 }}
                />
            </Center>
        </View>
        <CustomModal isVisible={isMessageInvite} >
            <View style={{ width: "100 %" }}>

                <Header label={'Send Invitation'} isHeader2 backPress={() => setIsMessageInvite(false)} />

                <Column>
                    <TextInputComponent
                        label={"Email Address"}
                        placeholder={"Your email address"}
                    />

                    <ButtonComponent
                        label={'Send'}
                        // loader={loading}
                        onPress={() => {
                            setIsMessageInvite(false)
                        }}

                        buttonTextColor={themeColors.black}
                        buttonContainerStyle={{ backgroundColor: '#BFDBFE', padding: 0 }}

                    />
                </Column>
            </View>
        </CustomModal>
    </>
    )
}

export default EventSummary


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1
    },

    eventDetail: {
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        marginHorizontal: 16,


    }
})