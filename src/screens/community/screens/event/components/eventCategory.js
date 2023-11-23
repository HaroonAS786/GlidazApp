import { Center, Divider, Row } from 'native-base'
import React, { useState } from 'react'

import { StyleSheet, TouchableOpacity, View, ScrollView, FlatList, SafeAreaView } from 'react-native'
import Edit from '../../../../../assets/svgs/edit'
import Plus from '../../../../../assets/svgs/plusSvg'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import CommunityHeader from '../../components/CommunityHeader'
import CategoryCard from './categoryCard'
import CategoryCard2 from './categorycard2'

const EventCategory = (props) => {
    const [seeCategory, setSeeCategory] = useState(false)

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

            <Row justifyContent={'space-between'} alignItems={'center'} style={{ paddingHorizontal: 16 }}>
                <CustomText h5 bold >Event Category</CustomText>
                <Row space={1.5}>
                    {[<Plus />, <Edit />].map((val, indx) => <Center style={{ backgroundColor: "lightgray", width: 30, height: 30, borderRadius: 100 }}>
                        <TouchableOpacity onPress={() => {
                            if (indx === 1) {
                                props.navigation.navigate('AddEventCategory', { headerLabel: "Edit event category" })
                            } else {
                                props.navigation.navigate('AddEventCategory')
                            }
                        }}>
                            {val}
                        </TouchableOpacity>
                    </Center>)}
                </Row>
            </Row>

            {seeCategory ?
                <FlatList
                    data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                    contentContainerStyle={{ paddingHorizontal: 10, marginTop: 25, paddingBottom: 100 }}
                    renderItem={({ item, index }) => <CategoryCard2 />}
                    ItemSeparatorComponent={<Divider />}
                    keyExtractor={(item, index) => index.toString()}
                /> :
                <ScrollView>
                    <Row flexWrap={'wrap'} style={{ paddingHorizontal: 16, marginTop: 20 }} justifyContent={"space-between"} >

                        {[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val, indx) => {
                            return (
                                <CategoryCard onPress={() => {
                                    setSeeCategory(true)
                                }} />
                            )
                        })}
                    </Row>
                    <Spacer height={100} />
                </ScrollView>
            }
        </View>
    )
}

export default EventCategory


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white', flex: 1
    },
    eventSuccess: {
        flex: 1,
        alignItems: 'center'
    }
})