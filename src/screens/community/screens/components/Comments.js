import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import { Avatar, Center, ChevronDownIcon, ChevronRightIcon, Divider, Input, Row, VStack } from 'native-base'
import Camera2 from '../../../../assets/svgs/camera2svg'
import LikeSVGComponent from '../../../../assets/svgs/likeSvg'
import Pin from '../../../../assets/svgs/pinSvg'
import SendComment from '../../../../assets/svgs/sendComment'
import SmileEmoji from '../../../../assets/svgs/smileEmoji'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { Reactions } from '../../../../utils/helper'

const CommentsScreen = ({ }) => {

    const [showLikesEmoji, setShowLikesEmoji] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (message.trim() !== '') {
            const newMessage = {
                id: messages.length + 1,
                text: message,
                user: 'User', // You can customize the user as needed
            };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    return (
        <VStack>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Row space={1} justifyContent={'space-between'}>
                    <Row alignItems={'center'} >
                        <LikeSVGComponent />
                        <CustomText body2 color={themeColors.grey}>129</CustomText>
                        <ChevronRightIcon color={'grey'} />
                    </Row>
                    <LikeSVGComponent />
                </Row>
                <Spacer height={20} />
                <TouchableOpacity>
                    <Row space={1} alignItems={'center'}>
                        <CustomText body color={themeColors.black}>Top comments</CustomText>
                        <ChevronDownIcon color={'black'} />
                    </Row>
                </TouchableOpacity>
                <Spacer height={20} />
                <VStack>
                    <FlatList
                        data={messages}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <Row space={2} style={{ paddingTop: 20 }}>
                                <VStack alignItems={'center'}>
                                    <Avatar size={'sm'} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzQLUoyIbxhgqaAyJ7RpKYIkBmCvARZL62yUYGMATQIKv4KlGz2S4JeN91izl4DDWGck&usqp=CAU" }} />
                                    <Divider orientation='vertical' height={10} />
                                </VStack>
                                <VStack space={2}>
                                    <VStack style={{ backgroundColor: '#E5E7EB', borderRadius: 10, padding: 4 }} justifyContent={'center'} >
                                        <CustomText body color={themeColors.black}>{index % 2 === 0 ? "ONI" : "Ade"}</CustomText>
                                        <CustomText caption color={themeColors.black}>{item.user}: {item.text}</CustomText>

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

                            </Row>
                        )}
                    />
                </VStack>
                <Row space={1}>
                    <Avatar size={'md'} flex={1} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" }} />
                    <Row flex={5} style={{ backgroundColor: 'lightgrey', borderRadius: 100, paddingHorizontal: 10 }} justifyContent={'space-between'}>
                        <Input width={120} variant={'unstyled'} placeholder='Write message' value={message}
                            onChangeText={(text) => setMessage(text)} />
                        <Row space={1}>
                            {
                                [<Pin />, <Camera2 />, <SmileEmoji />].map((val, index) => {

                                    return <Center>{val}</Center>
                                })
                            }
                        </Row>
                    </Row>
                    <Center flex={1} style={{ backgroundColor: themeColors.authButtonPrimary, borderRadius: 100 }}>
                        <TouchableOpacity onPress={handleSend}>
                            <SendComment />
                        </TouchableOpacity>
                    </Center>
                </Row>
            </ScrollView>
        </VStack>
    )
}

export default CommentsScreen

const styles = StyleSheet.create({
    commentInput: {
        borderRadius: 100,
        backgroundColor: '#E5E7EB',
        width: '100%'
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