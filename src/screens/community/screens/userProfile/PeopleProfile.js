import { Column, Divider, Row, VStack } from 'native-base'
import React, { useRef, useState } from 'react'
import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'

import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { useMediaGroup } from '../../../../hooks/useMediaGroup'
import { introductionData } from '../../../../utils/helper'
import CommunityHeader from '../components/CommunityHeader'
import FriendsCard from './components/friendsCard'
import PostCard from './components/profilePostCard'
import getStyles from './styles'

const PeopleUserProfileScreen = (props) => {

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
                    style={styles.image}>
                    <Row style={styles.profileView}>
                        <View activeOpacity={1}>
                            <Image style={styles.profileImage}
                                source={imageSource ? imageSource : { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }} />
                        </View>
                        <View style={styles.textLabel}>
                            <CustomText body bold color={'black'}> Alee</CustomText>
                        </View>
                    </Row>
                </ImageBackground>
            </TouchableOpacity>
            <Spacer height={80} />
            <ScrollView>
                <VStack style={{ paddingHorizontal: 16 }}>
                    <VStack>
                        <CustomText bold h5>Bio</CustomText>
                        {
                            introductionData.map((val, index) =>
                                <Row alignItems={'center'} space={3} marginTop={'4'} >
                                    {val.svg}
                                    <CustomText body >
                                        {val.label}
                                    </CustomText>
                                </Row>)
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
        </View>
    )
}

export default PeopleUserProfileScreen