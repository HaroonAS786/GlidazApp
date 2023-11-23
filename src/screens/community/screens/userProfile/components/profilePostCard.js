import { View, StyleSheet, Image, TouchableOpacity, Share } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Column, Divider, Row, VStack, } from 'native-base'


import CustomText from '../../../../../components/CustomText'
import { themeColors } from '../../../../../config/colors'
import Spacer from '../../../../../components/Spacer'
import LikeSVGComponent from '../../../../../assets/svgs/likeSvg'
import CommentSVGComponent from '../../../../../assets/svgs/commentSvg'
import ShareSVGComponent from '../../../../../assets/svgs/shareSvg'
import { Reactions } from '../../../../../utils/helper'

const PostCard = ({ item, index, likePress, sharePress, commentPress }) => {

    const [showLikesEmoji, setShowLikesEmoji] = useState(false)

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

        <VStack style={styles.container}>
            <Row alignItems={'center'} space={2}>
                <Avatar size={"md"} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzQLUoyIbxhgqaAyJ7RpKYIkBmCvARZL62yUYGMATQIKv4KlGz2S4JeN91izl4DDWGck&usqp=CAU" }} />
                <Column>
                    <Row space={1}>
                        <CustomText color='black' bold body>Shadow</CustomText>
                        <CustomText color='#6B7280' bold body>@mattshadow</CustomText>
                    </Row>
                    <CustomText color='#92929D' body2>11 min</CustomText>
                </Column>
            </Row>
            <Spacer height={10} />

            <CustomText color={themeColors.black} bold body>Hi All, This is my new Exploration, what do you think? 🤨</CustomText>
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
                            setShowLikesEmoji(!showLikesEmoji)
                        }}>
                        <Row space={1}>
                            <LikeSVGComponent />
                            <CustomText color='black' body2 >Like</CustomText>
                        </Row>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={commentPress}>
                        <Row space={1}>
                            <CommentSVGComponent />
                            <CustomText color='black' body2>Comment</CustomText>
                        </Row>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={shareCode}>
                        <Row space={1}>
                            <ShareSVGComponent />
                            <CustomText color='black' body2>Share</CustomText>
                        </Row>
                    </TouchableOpacity>
                </Row>

                <View
                    style={[styles.emoji, { display: showLikesEmoji ? 'flex' : 'none' },]}>
                    {Reactions.map((reaction, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    paddingHorizontal: 5,
                                }}
                                onPress={() => {
                                    console.log(reaction, 'reaction---')
                                    setShowLikesEmoji(false)
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
        </VStack>
    )
}

export default PostCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 20,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 8
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