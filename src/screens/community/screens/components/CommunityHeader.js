import { CommonActions } from '@react-navigation/native'
import { Divider, Menu, Row, VStack } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { AppLogoSVGComponent } from '../../../../assets/svgs'
import EditPost from '../../../../assets/svgs/EditPostSvg'
import Category from '../../../../assets/svgs/categorySvg'
import Event from '../../../../assets/svgs/eventSvg'
import LiveStream from '../../../../assets/svgs/liveStreamSvg'
import NewEvent from '../../../../assets/svgs/newPostSvg'
import Plus from '../../../../assets/svgs/plusSvg'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { communityHeaderData } from '../../../../utils/helper'

const CommunityHeader = ({ event, onEvent, onCategory, onCreatPost, navigation }) => {

    return (
        <View style={styles.mainContainer}>

            <AppLogoSVGComponent width={69} height={39} />
            <Row>
                <Menu backgroundColor={themeColors.white} style={{ borderRadius: 12, marginRight: 100, top: 20 }}
                    trigger={triggerProps => {
                        return (
                            <>
                                {event ? <TouchableOpacity {...triggerProps} style={styles.svgConatiner} >
                                    <View style={styles.svgView}>
                                        <LiveStream />
                                    </View>
                                </TouchableOpacity> :
                                    <TouchableOpacity {...triggerProps} style={styles.svgConatiner}>
                                        <View style={styles.svgView}>
                                            <Plus />
                                        </View>
                                    </TouchableOpacity>
                                }
                            </>
                        );
                    }}>
                    {
                        event ? <VStack >
                            {[
                                {
                                    svg: <NewEvent />,
                                    label: "Create new event"
                                },
                                {
                                    svg: <Category />,
                                    label: "Category",
                                },
                                {
                                    svg: <LiveStream />,
                                    label: "Live Stream",
                                }
                            ].map((val, index) => {
                                return (

                                    <View>
                                        <Menu.Item onPress={() =>
                                            onEvent(index)
                                        }>
                                            <Row space={1} alignItems={'center'} justifyContent={'flex-start'}>
                                                {val.svg}
                                                <Spacer width={6} />
                                                <CustomText body color={themeColors.black}>{val.label}</CustomText>

                                            </Row>
                                        </Menu.Item>
                                        {val.label !== "Live Stream" && <Divider />}

                                    </View>
                                )
                            })}
                        </VStack> :
                            <VStack >
                                {[
                                    {
                                        svg: <EditPost />,
                                        label: "Create new post"
                                    },
                                    {
                                        svg: <Event />,
                                        label: "Event",
                                    },
                                    {
                                        svg: <LiveStream />,
                                        label: "Live Stream",
                                    }

                                ].map((val, index) => {
                                    return (
                                        <View>
                                            <Menu.Item onPress={() => onCreatPost(index)}>
                                                <Row space={1} alignItems={'center'} justifyContent={'flex-start'}>
                                                    {val.svg}
                                                    <Spacer width={6} />
                                                    <CustomText body color={themeColors.black}>{val.label}</CustomText>

                                                </Row>
                                            </Menu.Item>
                                            {val.label !== "Live Stream" && <Divider />}
                                        </View>
                                    )
                                })}
                            </VStack>
                    }
                </Menu>

                <View style={styles.svgConatiner}>
                    {communityHeaderData.map((val, index) => {
                        return <TouchableOpacity activeOpacity={0.8} style={styles.svgView} onPress={() => {
                            if (index === 2) {
                                navigation.navigate("ChatScreen")
                            }
                            else if (index === 0) {
                                navigation.navigate("SearchScreen")
                            }
                            else if (index === 1) {
                                navigation.navigate("FriendsScreen")
                            }
                            else if (index === 3) {
                                navigation.navigate("CommunityNotificationScreen")
                            }
                            else if (index === 4) {
                                navigation.dispatch(
                                    CommonActions.reset({
                                        index: 0,
                                        routes: [{ name: 'UtilityWelcomeScreen' }],
                                    }),
                                );
                            }
                        }}>
                            {val}
                        </TouchableOpacity>
                    }
                    )}
                </View>
            </Row>
        </View >
    )
}









export default CommunityHeader

const styles = StyleSheet.create({

    mainContainer: {
        flexDirection: "row",
        backgroundColor: themeColors.white,
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    svgView: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: '#E5E7EB',
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 8
    },
    svgConatiner: {
        flexDirection: 'row'
    }

})