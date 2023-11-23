import { Avatar, Center, Input, Row, VStack } from 'native-base'
import React, { useRef } from 'react'
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import Camera2 from '../../../../../assets/svgs/camera2svg'
import EventMenu from '../../../../../assets/svgs/eventMenu'
import Pin from '../../../../../assets/svgs/pinSvg'
import SendComment from '../../../../../assets/svgs/sendComment'
import SmileEmoji from '../../../../../assets/svgs/smileEmoji'
import BottomSheetModal from '../../../../../components/BottomSheetModal'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import { themeColors } from '../../../../../config/colors'
import { eventData } from '../../../../../utils/helper'
import CommunityHeader from '../../components/CommunityHeader'

const EventStarted = (props) => {

    const refChatSheet = useRef(null)

    return (
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
            <ImageBackground style={styles.imageCon}
                source={{ uri: "https://assets.videomaker.com/2020/03/Managing-a-Distributed-Team_Blog-Graphic-min-1.jpg" }}>
                <Spacer height={20} />
                <Row alignItems={'center'} space={3} justifyContent={'space-evenly'}>
                    <Row style={{ backgroundColor: "grey", borderRadius: 100, width: 120, paddingVertical: 4 }} alignItems={'center'} justifyContent={'center'} space={2}>
                        <Avatar size={"sm"} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" }} />

                        <CustomText color='white' bold h5>Oni</CustomText>
                    </Row>
                    <Avatar.Group max={3} _avatar={{
                        size: "sm"
                    }}>
                        {[0, 1, 2, 3, 4, 5, 6].map((val, index) => <Avatar size={"sm"} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" }} />
                        )}
                    </Avatar.Group>
                    <TouchableOpacity style={{ backgroundColor: 'rgba(75, 62, 56, 0.6)', borderRadius: 100, padding: 6 }}>
                        <EventMenu />
                    </TouchableOpacity>
                </Row>
                <View style={{ justifyContent: "flex-end", paddingBottom: 25, flex: 1 }}>
                    <Row alignItems={'center'} justifyContent={'center'} space={2}>
                        {eventData.map((val, index) =>
                            <TouchableOpacity onPress={() => {
                                if (index === 2) {
                                    refChatSheet.current.open()
                                } else if (index === eventData.length - 1) {
                                    props.navigation.goBack()
                                }
                            }}>
                                <Center style={index === eventData.length - 1 ? styles.footerActiveSvg : styles.footerSvg}>
                                    {val}
                                </Center>
                            </TouchableOpacity>
                        )}
                    </Row>
                </View>
            </ImageBackground>
            <BottomSheetModal refRBSheet={refChatSheet} height={Dimensions.get('window').height * 0.5} modalStyle={{ backgroundColor: 'transparent' }}>
                <VStack style={{ width: Dimensions.get('window').width, paddingHorizontal: 16, backgroundColor: 'transparent' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {[0, 1, 2, 3].map((val, index) => <Row space={2} marginTop={'4'} >
                            <Avatar source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" }} />
                            <VStack space={1}>
                                <CustomText>Darrell Steward</CustomText>
                                <CustomText body2 regular style={{ width: 280 }}>Lorem ipsum dolor sit amet consectetur. Lectus suspendisse vestibulum eget lacus nisl nec odio facilisi. Ornare phasellus curabitur egestas lectus facilisis hac. Scelerisque amet varius accumsan proin erat tincidunt sit id.</CustomText>
                            </VStack>
                        </Row>)}
                        <Spacer height={100} />
                        <Row space={1}>
                            <Avatar flex={1} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" }} />
                            <Row flex={5} style={{ backgroundColor: 'lightgrey', borderRadius: 100, paddingHorizontal: 10 }} justifyContent={'space-between'}>
                                <Input width={120} variant={'unstyled'} placeholder='message' />
                                <Row space={1}>
                                    {
                                        [<Pin />, <Camera2 />, <SmileEmoji />].map((val, index) => {

                                            return <Center>{val}</Center>
                                        })
                                    }
                                </Row>
                            </Row>
                            <Center flex={1} style={{ backgroundColor: themeColors.authButtonPrimary, borderRadius: 100 }}>
                                <TouchableOpacity onPress={() => {
                                    refChatSheet.current.close()
                                }}>
                                    <SendComment />
                                </TouchableOpacity>
                            </Center>
                        </Row>
                        <Spacer height={50} />
                    </ScrollView>
                </VStack>
            </BottomSheetModal>
        </View>
    )
}

export default EventStarted


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white', flex: 1

    },
    imageCon: {
        flex: 1,
        paddingHorizontal: 16
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