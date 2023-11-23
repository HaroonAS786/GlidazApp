import { Avatar, ChevronLeftIcon, Divider, Menu, Row, VStack } from 'native-base'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, Share, SafeAreaView } from 'react-native'

import CommentSVGComponent from '../../../../../assets/svgs/commentSvg'
import Date from '../../../../../assets/svgs/dateSvg'
import EventMenu from '../../../../../assets/svgs/eventMenu'
import LikesEmoji from '../../../../../assets/svgs/likeEmoji'
import LikeSVGComponent from '../../../../../assets/svgs/likeSvg'
import SaveEvent from '../../../../../assets/svgs/saveEvent'
import ShareSVGComponent from '../../../../../assets/svgs/shareSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import { themeColors } from '../../../../../config/colors'
import { Reactions } from '../../../../../utils/helper'
import JoinEvent from '../../../../../assets/svgs/joinEvent'

const EventDetails = (props) => {

    const { eventName } = props?.route?.params ?? {}
    const [showLikesEmoji, setShowLikesEmoji] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)

    const shareCode = async () => {
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

    return (
        <View style={styles.container} >
            <SafeAreaView />
            <Spacer height={25} />
            <Row justifyContent={'space-between'}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <ChevronLeftIcon size={22} color={'black'} />
                </TouchableOpacity>
                <Menu backgroundColor={"rgba(0, 0, 0, 0.6)"} style={{ borderRadius: 12, alignSelf: 'flex-end', top: 20, right: 30 }}
                    trigger={triggerProps => {
                        return (

                            <TouchableOpacity {...triggerProps}>

                                <EventMenu />

                            </TouchableOpacity>

                        );
                    }}>
                    <VStack>
                        {[

                            {
                                svg: <SaveEvent />,
                                label: "Save Event"
                            },
                            {
                                svg: <JoinEvent />,
                                label: "Join event",
                            },
                            {
                                svg: <Date stroke={'white'} />,
                                label: "Set a reminder",
                            },
                            {
                                svg: <ShareSVGComponent stroke={'white'} />,
                                label: "Share",
                            },

                        ].map((val, index) => {
                            return (

                                <View>
                                    <Menu.Item onPress={() => {
                                        if (index == 1) {
                                            return props.navigation.navigate("JoinEvent")
                                        }
                                        else if (index == 2) {
                                            props.navigation.navigate("RemindersScreen")
                                        }
                                        else if (index == 3) {
                                            shareCode()
                                        }
                                        else if (index == 0) {
                                            props.navigation.navigate("SavedEventScreen")
                                        }

                                    }} >

                                        <Row space={1} alignItems={'center'} justifyContent={'flex-start'}>
                                            {val.svg}
                                            <Spacer width={6} />
                                            <CustomText body color={themeColors.white}>{val.label}</CustomText>

                                        </Row>


                                    </Menu.Item>
                                    {val.label !== "Share" && <Divider />}

                                </View>
                            )
                        })}
                    </VStack>


                </Menu>
            </Row>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer height={25} />
                <CustomText body> July 27, 2023 09:41</CustomText>
                <Spacer height={20} />
                <CustomText caption color={'black'}> Courtney Henry-3517 W. Gray St. Utica, Pennsylvania 57867</CustomText>
                <Spacer height={20} />
                <CustomText h4 bold>{eventName}</CustomText>
                <Spacer height={12} />
                <CustomText h4 regular>Lorem ipsum dolor sit amet consectetur. Varius odio purus sociis commodo. Eros aliquam nunc varius tortor ullamcorper volutpat pretium auctor. Iaculis cursus pellentesque sed placerat quis nibh non id.</CustomText>
                <Spacer height={10} />
                <View style={styles.image}>
                    <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2QfJLljRS80FDfIEAsGg9VogNj8br8xGdJIKpEub-GXD-WxSEiPTraf9BqZU6jYsBj4&usqp=CAU" }} />
                </View>
                <Spacer height={10} />
                <VStack space={2}>
                    <Divider />
                    <Row justifyContent={'space-between'}>
                        <TouchableOpacity
                            onPress={() => {
                            }}>
                            <Row space={1}>
                                <LikeSVGComponent />
                                <CustomText color='black' body2 >Like</CustomText>
                            </Row>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Row space={1}>
                                <CommentSVGComponent />
                                <CustomText color='black' body2>Comment</CustomText>
                            </Row>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            shareCode()
                        }}>
                            <Row space={1}>
                                <ShareSVGComponent />
                                <CustomText color='black' body2>Share</CustomText>
                            </Row>
                        </TouchableOpacity>
                    </Row>
                    <Divider />
                    <Row alignItems={'center'} space={1}>
                        <LikesEmoji />
                        <CustomText caption>10</CustomText>
                    </Row>
                </VStack>
                <Spacer height={10} />
                <VStack>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, index) => <Row space={2}>
                        <VStack alignItems={'center'}>
                            <Avatar size={'sm'} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzQLUoyIbxhgqaAyJ7RpKYIkBmCvARZL62yUYGMATQIKv4KlGz2S4JeN91izl4DDWGck&usqp=CAU" }} />
                            <Divider orientation='vertical' height={10} />
                        </VStack>
                        <VStack space={2}>
                            <VStack style={{ backgroundColor: '#E5E7EB', borderRadius: 10, padding: 4 }} justifyContent={'center'} >
                                <CustomText body color={themeColors.black}>{index % 2 === 0 ? "ONI" : "Ade"}</CustomText>
                                <CustomText caption color={themeColors.black}>{index % 2 === 0 ? "Oh, Nice" : "Keep it up man!, You have done well in your recent assignmnets."}</CustomText>

                            </VStack>
                            <Row space={3} alignItems={'center'}>
                                <CustomText caption color={'grey'}>16 h</CustomText>
                                <TouchableOpacity onPress={() => {
                                    setActiveIndex(index)
                                    setShowLikesEmoji(!showLikesEmoji)
                                }}>
                                    <CustomText body2 color={themeColors.black}>Like</CustomText>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <CustomText body2 color={themeColors.black}>Reply</CustomText>
                                </TouchableOpacity>
                                <Row alignItems={'center'}>
                                    <CustomText caption color={themeColors.black}>8</CustomText>
                                    <LikeSVGComponent />
                                </Row>
                            </Row>
                            <View
                                style={[styles.emoji, { display: index === activeIndex ? 'flex' : 'none' },]}>
                                {Reactions.map((reaction, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={{
                                                paddingHorizontal: 5,
                                            }}
                                            onPress={() => {
                                                setActiveIndex(-1)
                                            }}>
                                            <Image
                                                source={reaction.gif}
                                                resizeMode="contain"
                                                style={{ width: 35, height: 40 }}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </VStack>

                    </Row>)}


                </VStack>
                <Spacer height={100} />
            </ScrollView>
        </View>
    )
}

export default EventDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop: 10,
    },
    image: {
        height: 200,
        borderRadius: 10
    },
    emoji: {
        borderRadius: 100,
        padding: 2,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        left: 0,
        backgroundColor: themeColors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }

})