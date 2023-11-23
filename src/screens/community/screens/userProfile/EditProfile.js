import { Avatar, Center, Row } from 'native-base'
import React, { useRef, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import SelectGallery from '../../../../assets/svgs/SelectGallerySvg'
import SelectCamera from '../../../../assets/svgs/selectCameraSvg'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import Header from '../../../../components/common/Header'
import FadeModal from '../../../../components/customBottomSheet'
import { themeColors } from '../../../../config/colors'
import { useMediaGroup } from '../../../../hooks/useMediaGroup'


const EditProfile = (props) => {

    const [imageSource, setImageSource] = useState(null);
    const [imageCoverSource, setImageCoverSource] = useState(null);
    const refRBImage = useRef();
    const { selectImage } = useMediaGroup()
    const [imageType, setImageType] = useState('profile');

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
            svg: <SelectCamera />,
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
            svg: <SelectGallery />,
        },
    ];

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Spacer height={20} />
            <Header isHeader2 label={"Edit Profile"} backPress={() => { props.navigation.goBack() }} />
            <Spacer height={25} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View >

                    <Row justifyContent={'space-between'}>
                        <CustomText h7 bold>
                            Profile Picture
                        </CustomText>
                        <TouchableOpacity onPress={() => {
                            refRBImage.current.open()
                            setImageType('profile')
                        }}>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Edit
                            </CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={25} />
                    <Center>
                        <Avatar size={'2xl'}
                            source={imageSource ? imageSource : { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }} />
                    </Center>
                    <Spacer height={20} />
                    <Row justifyContent={'space-between'}>
                        <CustomText h7 bold>
                            Cover Photo
                        </CustomText>
                        <TouchableOpacity onPress={() => {
                            refRBImage.current.open()
                            setImageType('cover')
                        }}>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Edit
                            </CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={25} />
                    <View style={{ width: '100%', height: '30%' }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={imageCoverSource ? imageCoverSource : { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }}
                        />
                    </View>
                    <Spacer height={25} />
                    <Row justifyContent={'space-between'}>
                        <CustomText h5 bold>
                            Details
                        </CustomText>
                        <TouchableOpacity onPress={() => props.navigation.navigate("DetailsScreen")}>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Edit
                            </CustomText>
                        </TouchableOpacity>
                    </Row>

                    <Spacer height={25} />
                    <Row space={2}>
                        <CustomText h7 bold>
                            Full Name
                        </CustomText>
                        <TouchableOpacity>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Oni
                            </CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={25} />
                    <Row space={2}>
                        <CustomText h7 bold>
                            Profession
                        </CustomText>
                        <TouchableOpacity>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Software Engineer
                            </CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={25} />
                    <Row space={2}>
                        <CustomText h7 bold>
                            Education
                        </CustomText>
                        <TouchableOpacity>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Oxford University BSCS
                            </CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={25} />
                    <Row space={2}>
                        <CustomText h7 bold>
                            Gender
                        </CustomText>
                        <TouchableOpacity>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Male
                            </CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={25} />
                    <Row space={2}>
                        <CustomText h7 bold>
                            Marital Status
                        </CustomText>
                        <TouchableOpacity>
                            <CustomText h7 color={themeColors.authPrimary}>
                                Single
                            </CustomText>
                        </TouchableOpacity>
                    </Row>
                </View>
                <Spacer height={300} />
            </ScrollView>

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

export default EditProfile


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 16
    }

})