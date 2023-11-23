import { Avatar, Center, ChevronLeftIcon, Column, Divider, Input, Row, VStack } from 'native-base';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

import EmojiSelector, { Categories } from "react-native-emoji-selector";
import SelectGallery from '../../../../../assets/svgs/SelectGallerySvg';
import Call from '../../../../../assets/svgs/callSvg';
import Camera2 from '../../../../../assets/svgs/camera2svg';
import Pin from '../../../../../assets/svgs/pinSvg';
import SelectCamera from '../../../../../assets/svgs/selectCameraSvg';
import SendComment from '../../../../../assets/svgs/sendComment';
import SmileEmoji from '../../../../../assets/svgs/smileEmoji';
import CustomText from '../../../../../components/CustomText';
import Spacer from '../../../../../components/Spacer';
import FadeModal from '../../../../../components/customBottomSheet';
import { themeColors } from '../../../../../config/colors';
import { useMediaGroup } from '../../../../../hooks/useMediaGroup';
import CommunityHeader from '../../components/CommunityHeader';


const ChatNow = (props) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const { selectImage, selectDocument } = useMediaGroup()
    const refRBImage = useRef();
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

    const handleEmojiSelected = (emoji) => {
        setShowEmojiPicker(false)
    };

    const handleChatMediaOperations = (index) => {
        switch (index) {
            case 0:
                selectDocument().then((res) => console.log(res, ' res-- -')).catch(e => console.log(e));
                break;
            case 1:
                refRBImage.current.open()
                break;
            case 2:
                setShowEmojiPicker(true)
                break;
            default:
                return 0;
        }
    }

    const imageData = [
        {
            label: 'Camera',
            onPress: () => {
                selectImage('camera').then((res) => {
                    refRBImage.current.close()
                    console.log(res, 'res--')
                }).catch(error => {
                    console.log(error)
                })
            },
            svg: <SelectCamera />,
        },
        {
            label: 'Gallery',
            onPress: () => {
                selectImage('gallery').then((res) => {
                    refRBImage.current.close()
                    console.log(res, 'res--')
                }).catch(error => {
                    console.log(error)
                })
            },
            svg: <SelectGallery />,
        },
    ];


    return (
        <View style={styles.container}>
            <SafeAreaView />
            <CommunityHeader
                onCreatPost={(index) => {
                    if (index === 0) {
                        props.navigation.navigate("CreatePostScreen")
                    }
                    else if (index === 1) {
                        props.navigation.navigate("EventScreen")
                    }
                    else if (index === 2) {
                        props.navigation.navigate("LiveStreamVedio")
                    }
                }}
                navigation={props.navigation}
            />

            <VStack space={1}>
                <Row alignItems={'center'} justifyContent={'space-between'} style={{ paddingHorizontal: 16 }}>
                    <Row space={2} alignItems={'center'}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <ChevronLeftIcon color={'black'} />
                        </TouchableOpacity>
                        <Center style={styles.noOfMessage}>
                            <CustomText caption color={'white'}>2</CustomText>
                        </Center>
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

                    <Row space={2}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("PhoneCallScreen")}>
                            <Call height={22} width={24} />
                        </TouchableOpacity>
                    </Row>
                </Row>
                <Divider />
            </VStack>

            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: "#6366F1", borderRadius: 10, padding: 10, width: "50%", marginTop: 10, marginHorizontal: 16 }}>
                        <CustomText color='white' body>{item.user}: {item.text}</CustomText>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <Row space={1} style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                <Avatar size={'md'} flex={1} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" }} />
                <Row flex={5} style={{ backgroundColor: 'lightgrey', borderRadius: 100, paddingHorizontal: 10 }} justifyContent={'space-between'}>
                    <Input width={120} variant={'unstyled'} placeholder='Write message' value={message}
                        onChangeText={(text) => setMessage(text)} />
                    <Row space={1} alignItems={'center'}>
                        {
                            [<Pin />, <Camera2 />, <SmileEmoji />].map((val, index) => {
                                return <TouchableOpacity onPress={() => handleChatMediaOperations(index)} activeOpacity={0.6}>{val}</TouchableOpacity>
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

            {showEmojiPicker && (
                <EmojiSelector
                    category={Categories.symbols}
                    onEmojiSelected={emoji => handleEmojiSelected(emoji)}
                />)}

            <FadeModal
                height={Dimensions.get('window').height * 0.2}
                refRBSheet={refRBImage}>
                <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 16, height: Dimensions.get('window').height }}>
                    {imageData?.map((val, indx) => {
                        return (
                            <>
                                <Spacer height={20}
                                />
                                <TouchableOpacity
                                    onPress={val.onPress}
                                    style={{ flexDirection: 'row' }}>
                                    {val.svg}
                                    <Spacer width={10} />
                                    <CustomText body>{val.label}</CustomText>
                                </TouchableOpacity>
                            </>
                        );
                    })}
                </View>
            </FadeModal>
        </View>
    );
};

export default ChatNow;


const styles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        flex: 1
    },
    noOfMessage: {
        width: 14,
        height: 14,
        borderRadius: 100,
        backgroundColor: "#FC685D"
    }

})
