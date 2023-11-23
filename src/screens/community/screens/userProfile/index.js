import { Avatar, Center, Column, Divider, Input, Row, VStack } from 'native-base'
import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'


import { CommonActions } from '@react-navigation/native'
import { BookingSVGComponent, CommunitySVGComponent } from '../../../../assets/svgs'
import EditPost from '../../../../assets/svgs/EditPostSvg'
import SelectGallery from '../../../../assets/svgs/SelectGallerySvg'
import Camera from '../../../../assets/svgs/cameraSvg'
import Event from '../../../../assets/svgs/eventSvg'
import Plus from '../../../../assets/svgs/plusSvg'
import SelectCamera from '../../../../assets/svgs/selectCameraSvg'
import ButtonComponent from '../../../../components/ButtonComponent'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import FadeModal from '../../../../components/customBottomSheet'
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet'
import { themeColors } from '../../../../config/colors'
import { useMediaGroup } from '../../../../hooks/useMediaGroup'
import { RenderUtilityScreens, introductionData, onMindData } from '../../../../utils/helper'
import CommentsScreen from '../components/Comments'
import CommunityHeader from '../components/CommunityHeader'
import FriendsCard from './components/friendsCard'
import PostCard from './components/profilePostCard'
import getStyles from './styles'

const UserProfileScreen = (props) => {

    const styles = getStyles()
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageType, setImageType] = useState('profile');
    const refRBImage = useRef();
    const refRBComments = useRef();
    const [imageSource, setImageSource] = useState(null);
    const [imageCoverSource, setImageCoverSource] = useState(null);
    const [homeIndex, setHomeIndex] = useState(11);
    const { selectImage } = useMediaGroup()
    const { fromUtility } = props.route.params ?? {}


    const imageData = [
        {
            label: 'Camera',
            onPress: () => {
                selectImage('camera').then((res) => {
                    if (imageType === "profile") {
                        setImageSource(res)
                    } else if (imageType === "cover") {
                        setImageCoverSource(res)
                    }
                    refRBImage.current.close()
                }).catch(error => {
                    console.log(error)
                })
            },
            svg: <SelectCamera />
        },
        {
            label: 'Gallery',
            onPress: () => {
                selectImage('gallery').then((res) => {
                    if (imageType === "profile") {
                        setImageSource(res)
                    } else if (imageType === "cover") {
                        setImageCoverSource(res)
                    }
                    refRBImage.current.close()
                }).catch(error => {
                    console.log(error)
                })
            },
            svg: <SelectGallery />
        },
    ];

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView />
            {!fromUtility && <CommunityHeader
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
            />}

            <TouchableOpacity onPress={() => props.navigation.navigate("ViewImage", { imageUrl: imageCoverSource })} activeOpacity={0.8}>
                <ImageBackground
                    source={imageCoverSource ? imageCoverSource : { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }}
                    style={styles.image}
                    resizeMode='cover'
                >
                    <TouchableOpacity style={styles.cameraView} activeOpacity={0.8} onPress={() => {
                        refRBImage.current.open()
                        setImageType('cover')
                    }}>
                        <Camera />
                    </TouchableOpacity>
                    <Row style={styles.profileView}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("ViewImage", { imageUrl: imageSource })} activeOpacity={0.8}>
                            <Image style={styles.profileImage}
                                source={imageSource ? imageSource : { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }} />
                            <TouchableOpacity style={styles.cameraView2} activeOpacity={0.8} onPress={() => {
                                refRBImage.current.open();
                                setImageType('profile')
                            }}>
                                <Camera />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <View style={styles.textLabel}>
                            <CustomText body bold color={'black'}> Alee</CustomText>
                        </View>
                    </Row>
                </ImageBackground>
            </TouchableOpacity>
            <Spacer height={80} />
            <ScrollView>
                <VStack style={{ paddingHorizontal: 16 }}>
                    {!fromUtility ? <ButtonComponent
                        label={'Booking'}
                        // loader={loading}
                        onPress={() => {
                            props.navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'UtilityWelcomeScreen' }],
                                }),
                            );
                        }}
                        leftIcon={<BookingSVGComponent stroke={'white'} height={22} />}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={{ backgroundColor: themeColors.utilityPrime, borderRadius: 10 }}

                    /> : <ButtonComponent
                        label={'Community'}
                        onPress={() => {
                            props.navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'CommunityWelcomeScreen' }],
                                }),
                            );
                        }}
                        leftIcon={<CommunitySVGComponent stroke={'white'} height={22} />}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={{ backgroundColor: themeColors.utilityPrime, borderRadius: 10 }}

                    />}
                    <Spacer height={8} />

                    {!fromUtility && <Row space={2}>
                        <ButtonComponent
                            label={'Create a post'}
                            onPress={() => {
                                props.navigation.navigate("CreatePostScreen")
                            }}
                            leftIcon={<Plus stroke={'white'} />}
                            buttonTextColor={themeColors.white}
                            buttonContainerStyle={{ backgroundColor: themeColors.authButtonPrimary, borderRadius: 10, flex: 6 }}
                        />
                        <ButtonComponent
                            label={'Event'}
                            onPress={() => {
                                props.navigation.navigate("EventScreen")
                            }}
                            leftIcon={<Event stroke={'white'} />}
                            buttonTextColor={themeColors.white}
                            buttonContainerStyle={{ backgroundColor: themeColors.authButtonPrimary, borderRadius: 10, flex: 3 }}
                        />
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("EditProfile")
                        }}>
                            <Center style={{ backgroundColor: 'lightgrey', padding: 6, borderRadius: 8, flex: 1 }}>
                                <EditPost />
                            </Center>
                        </TouchableOpacity>
                    </Row>}
                    <Spacer height={8} />
                    <Divider />
                    <Spacer height={8} />
                    {!fromUtility && <>
                        <Row space={2} alignItems={'center'}>
                            {
                                ["Post", "Event"].map((val, index) => <TouchableOpacity space={2} style={activeIndex === index ? styles.postEvent : { backgroundColor: 'white' }} onPress={() => { setActiveIndex(index) }}>
                                    <CustomText color={activeIndex === index ? "white" : 'black'}>{val}</CustomText>
                                </TouchableOpacity>)
                            }
                        </Row>
                        <Spacer height={12} />
                    </>}
                    <VStack>
                        <CustomText bold h5>Introduction</CustomText>
                        {introductionData.map((val, index) =>
                            <Row alignItems={'center'} space={3} marginTop={'4'} >
                                {val.svg}
                                <CustomText body >
                                    {val.label}
                                </CustomText>
                            </Row>
                        )
                        }
                        <Spacer height={12} />
                        <Divider />
                        <Spacer height={8} />
                        <Column>
                            <CustomText body bold>Friends</CustomText>
                            <CustomText color={'grey'} caption >123 friends</CustomText>
                        </Column>
                        <Spacer height={12} />
                        <Row flexWrap={'wrap'}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val, index) => {
                                return <FriendsCard />
                            })}
                        </Row>
                        <Divider />
                        {!fromUtility && <>
                            <Spacer height={12} />
                            <VStack style={styles.whatsOnYourMind} padding={2}>
                                <Row space={2} justifyContent={'center'} alignItems={"center"}>
                                    <Avatar size={'sm'} source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" }} />
                                    <Input
                                        variant='rounded'
                                        width={300}
                                        height={30}
                                        placeholder={"What's on your mind?"}
                                    />
                                </Row>
                                <Spacer height={12} />

                                <Row justifyContent={'space-between'} alignItems={'center'}>
                                    <Row space={2}>
                                        {onMindData.map((val, indx) => {
                                            return val
                                        })}
                                    </Row>
                                    <Row space={2} alignItems={'center'}>
                                        <ButtonComponent
                                            label={'Create event'}
                                            // loader={loading}
                                            onPress={() => {
                                            }}
                                            leftIcon={<Plus stroke={'white'} />}
                                            buttonTextColor={themeColors.white}
                                            buttonContainerStyle={{ backgroundColor: themeColors.authButtonPrimary, borderRadius: 100, width: 160, padding: 0, height: 25 }}

                                        />
                                        <ButtonComponent
                                            label={'Post'}
                                            // loader={loading}
                                            onPress={() => {
                                            }}

                                            buttonTextColor={themeColors.white}
                                            buttonContainerStyle={{ backgroundColor: themeColors.authButtonPrimary, borderRadius: 100, width: 60, padding: 0, height: 25 }}
                                        />
                                    </Row>
                                </Row>
                                <Spacer height={12} />
                            </VStack>
                        </>}
                        <Spacer height={40} />
                        <View >
                            <Spacer height={4} />
                            <FlatList
                                data={[0, 1, 2, 3, 4, 5]}
                                renderItem={({ item, index }) => <PostCard
                                    commentPress={() => {
                                        refRBComments.current.open()
                                    }}
                                />}
                                keyExtractor={(item, index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </VStack>
                </VStack>
                <Spacer height={100} />
            </ScrollView>
            {fromUtility && <DraggableBottomSheet
                currentIndex={index => {

                    RenderUtilityScreens(index, props.navigation)
                    setHomeIndex(index)
                }}

                homeIndex={homeIndex}

            />}
            <FadeModal
                height={Dimensions.get('window').height}
                refRBSheet={refRBComments}>

                <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 16, height: Dimensions.get('window').height }}>
                    <CommentsScreen />
                </View>
            </FadeModal>

            <FadeModal
                height={Dimensions.get('window').height * 0.2}
                refRBSheet={refRBImage}
            >
                <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 16, height: Dimensions.get('window').height }}>
                    {imageData?.map((val, indx) => {
                        return (
                            <>
                                <Spacer
                                    height={20}
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
    )
}

export default UserProfileScreen