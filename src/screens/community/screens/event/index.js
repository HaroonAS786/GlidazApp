import { View, ScrollView, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

import getStyles from './styles'
import CommunityHeader from '../components/CommunityHeader'
import Spacer from '../../../../components/Spacer'
import { VStack, Center, Divider, Row, Column } from 'native-base'
import CustomText from '../../../../components/CustomText'
import ButtonComponent from '../../../../components/ButtonComponent'
import { themeColors } from '../../../../config/colors'
import PopularEventCard from './components/popularEventCard'
import NearbyEventCard from './components/nearbyEvent'
import { IMAGES } from '../../../../utils/imagesAssets'

const EventScreen = (props) => {
    const styles = getStyles()

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView />
            <CommunityHeader
                navigation={props.navigation}
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("ScheduleEvents")} style={styles.scheduleImgCon}>
                    <Image style={styles.scheduleImg} source={IMAGES.Schedule} />
                </TouchableOpacity>
                <Spacer height={20} />
                <VStack style={styles.imageHeader}>
                    <Image source={{ uri: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg" }} style={styles.image} />
                    <Center position={'absolute'} alignSelf={'center'}>
                        <VStack justifyContent={'center'} alignItems={"center"}>
                            <Spacer height={20} />
                            <CustomText h4 bold color={'white'} style={{ textAlign: "center", width: 250 }}>Explore events from the community</CustomText>
                            <Spacer height={20} />
                            <ButtonComponent
                                label={'Booking'}
                                onPress={() => {
                                    props.navigation.navigate("CreateEventScreen")
                                }}
                                buttonTextColor={themeColors.black}
                                buttonContainerStyle={{ backgroundColor: 'white', padding: 0, width: 100 }}
                            />
                        </VStack>
                    </Center>
                    <Spacer height={20} />
                    <Divider />
                    <Spacer height={20} />
                    <Row justifyContent={'space-between'} alignItems={'center'} >
                        <CustomText h5 bold color={'black'} >Popular Event</CustomText>
                        <TouchableOpacity onPress={() => { props.navigation.navigate("SeeAllEvents") }}>
                            <CustomText body bold color={themeColors.authPrimary} >See All</CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={20} />
                    <FlatList
                        data={[0, 1, 2, 3, 4, 5, 6]}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item, index }) => <PopularEventCard
                            onPress={() => {
                                props.navigation.navigate("EventDetails", { eventName: 'Summer Festival' })
                            }}
                        />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Spacer height={20} />
                    <Divider />
                    <Spacer height={20} />
                    <Row justifyContent={'space-between'} alignItems={'center'} >
                        <CustomText h5 bold color={'black'} >Event Nearby You</CustomText>

                        <TouchableOpacity onPress={() => { props.navigation.navigate("SeeAllEvents") }}>
                            <CustomText body bold color={themeColors.authPrimary} >See All</CustomText>
                        </TouchableOpacity>
                    </Row>
                    <Spacer height={20} />
                    <FlatList
                        data={[0, 1, 2, 3, 4, 5, 6]}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => <NearbyEventCard
                            onPress={() => {
                                props.navigation.navigate("EventDetails", { eventName: 'Swimming' })
                            }}
                        />}
                    />
                    <Spacer height={20} />
                    <Divider />
                    <Spacer height={20} />
                    <Row justifyContent={"space-between"} alignItems={'center'} space={2}>
                        <VStack>
                            <TouchableOpacity onPress={() => props.navigation.navigate("TrendingEvents")} activeOpacity={0.6}>
                                <Row alignItems={'center'} space={2}>
                                    <CustomText h7 bold color={'black'} >Trending events</CustomText>
                                    <View style={{ padding: 6, backgroundColor: "#E5E7EB", borderRadius: 4 }}>
                                        <CustomText bold body2 color={'black'} >12</CustomText>
                                    </View>
                                </Row>
                            </TouchableOpacity>
                            <Spacer height={12} />
                            {[0, 1, 2, 3].map((val, indx) => {
                                return (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                        props.navigation.navigate("EventDetails", { eventName: 'Nigeria UI Designer' })
                                    }}>
                                        <Row space={2} marginTop={'2'} >
                                            <Image style={{ width: 29, height: 30, borderRadius: 6, backgroundColor: 'red' }} source={{ uri: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg" }} />
                                            <Column>
                                                <CustomText bold body color={'black'} >Nigeria UI Designer</CustomText>
                                                <CustomText caption color={'grey'} >734 members</CustomText>
                                            </Column>
                                        </Row>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </VStack>
                        <VStack>
                            <TouchableOpacity onPress={() => props.navigation.navigate("UpcomingEvents")} activeOpacity={0.6}>
                                <Row alignItems={'center'} space={2}>
                                    <CustomText h7 bold color={'black'} >Upcoming event</CustomText>
                                    <View style={{ padding: 6, backgroundColor: "#E5E7EB", borderRadius: 4 }}>
                                        <CustomText bold body2 color={'black'} >12</CustomText>
                                    </View>
                                </Row >
                            </TouchableOpacity>
                            <Spacer height={12} />
                            {[0, 1, 2, 3].map((val, indx) => {
                                return (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                        props.navigation.navigate("EventDetails", { eventName: 'SkyView' })
                                    }}>
                                        <Row space={2} marginTop={'2'} >
                                            <VStack style={{ width: 29, height: 30, borderRadius: 6, backgroundColor: '#374151' }} alignItems={'center'} >
                                                <CustomText caption bold color={'white'} >2</CustomText>
                                                <CustomText caption color={'#6B7280'} >Dec</CustomText>
                                            </VStack>
                                            <Column >
                                                <CustomText bold body color={'black'}> SkyView</CustomText>
                                                <CustomText caption color={'grey'} >78k Interested · 7.7K going</CustomText>
                                            </Column>
                                        </Row>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </VStack>
                    </Row>
                </VStack>
                <Spacer height={100} />
            </ScrollView>
        </View>
    )
}

export default EventScreen